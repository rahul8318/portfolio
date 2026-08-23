import { useRef, useEffect, useState } from "react"
import { useMousePosition } from "../../hooks/useMousePosition"

interface CustomCursorProps {
  hoverText?: string
  isHovering?: boolean
}

function CustomCursor({ hoverText = "", isHovering = false }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const { x, y } = useMousePosition()
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
    }
    handleMouseMove()
  }, [x, y])

  useEffect(() => {
    let raf: number
    const animate = () => {
      setRingPos((prev) => ({
        x: prev.x + (x - prev.x) * 0.15,
        y: prev.y + (y - prev.y) * 0.15,
      }))
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [x, y])

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.x}px`
      ringRef.current.style.top = `${ringPos.y}px`
    }
  }, [ringPos])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
          opacity: isHovering ? 0 : 1,
          transition: "transform 0.2s ease, opacity 0.2s ease",
        }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? "hovering" : ""}`}
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
        }}
      >
        {isHovering && hoverText && (
          <span className="cursor-ring-text">{hoverText}</span>
        )}
      </div>
    </>
  )
}

export default CustomCursor
