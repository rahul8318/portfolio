import { useEffect, useRef } from "react"
import { useMousePosition } from "../../hooks/useMousePosition"

interface CustomCursorProps {
  hoverText?: string
  isHovering?: boolean
}

function CustomCursor({
  hoverText = "",
  isHovering = false,
}: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const { x, y } = useMousePosition()

  const mouseRef = useRef({
    x: 0,
    y: 0,
  })

  const ringPositionRef = useRef({
    x: 0,
    y: 0,
  })

  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    mouseRef.current.x = x
    mouseRef.current.y = y

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) ${
        isHovering ? "scale(0)" : "scale(1)"
      }`

      dotRef.current.style.opacity = isHovering ? "0" : "1"
    }
  }, [x, y, isHovering])

  useEffect(() => {
    const animate = () => {
      const targetX = mouseRef.current.x
      const targetY = mouseRef.current.y

      const currentX = ringPositionRef.current.x
      const currentY = ringPositionRef.current.y

      const nextX = currentX + (targetX - currentX) * 0.15
      const nextY = currentY + (targetY - currentY) * 0.15

      ringPositionRef.current.x = nextX
      ringPositionRef.current.y = nextY

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")

    const updateCursorVisibility = () => {
      const visible = mediaQuery.matches

      if (dotRef.current) {
        dotRef.current.style.display = visible ? "block" : "none"
      }

      if (ringRef.current) {
        ringRef.current.style.display = visible ? "flex" : "none"
      }
    }

    updateCursorVisibility()

    mediaQuery.addEventListener("change", updateCursorVisibility)

    return () => {
      mediaQuery.removeEventListener("change", updateCursorVisibility)
    }
  }, [])

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) ${
            isHovering ? "scale(0)" : "scale(1)"
          }`,
          opacity: isHovering ? 0 : 1,
          transition:
            "transform 180ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease",
          willChange: "transform, opacity",
        }}
      />

      {/* Cursor Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring ${isHovering ? "cursor-ring-hovering" : ""}`}
        style={{
          transform: `translate3d(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px, 0) translate(-50%, -50%)`,
          willChange: "transform",
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
