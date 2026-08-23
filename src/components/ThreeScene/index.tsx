import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

function TorusKnot({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })
  return (
    <Float speed={speed * 2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <torusKnotGeometry args={[0.6, 0.2, 64, 16]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
      </mesh>
    </Float>
  )
}

function ParticleField({ count = 500, isMobile }: { count?: number; isMobile?: boolean }) {
  const mesh = useRef<THREE.Points>(null)
  const particles = useMemo(() => {
    const actualCount = isMobile ? 150 : count
    const positions = new Float32Array(actualCount * 3)
    for (let i = 0; i < actualCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count, isMobile])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  const actualCount = isMobile ? 150 : count

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={actualCount}
          array={particles}
          itemSize={3}
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#3b82f6"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Sphere args={[1.2, 48, 48]} position={[3.5, 0, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            distort={0.35}
            speed={1.5}
            roughness={0.15}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>

      <TorusKnot position={[-3.5, 1, -2]} color="#6366f1" speed={0.3} />

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, -2.5, -1.5]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.6} roughness={0.3} transparent opacity={0.5} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[2, 2, -3]} rotation={[Math.PI / 6, Math.PI / 3, 0]}>
          <icosahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.5} roughness={0.4} transparent opacity={0.4} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.9}>
        <mesh position={[-2, -1.5, -2.5]} rotation={[0, 0, Math.PI / 4]}>
          <dodecahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.3} transparent opacity={0.4} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene({ isMobile }: { isMobile?: boolean }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
      <pointLight position={[5, -5, 5]} intensity={0.2} color="#8b5cf6" />

      <ParticleField count={400} isMobile={isMobile} />
      <FloatingGeometries />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

interface ThreeSceneProps {
  className?: string
  isMobile?: boolean
}

function ThreeScene({ className, isMobile }: ThreeSceneProps) {
  return (
    <div className={className || "absolute inset-0"}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}

export default ThreeScene