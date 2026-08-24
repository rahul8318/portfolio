import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useMediaQuery } from "../../hooks/useMediaQuery"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Playground() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredBox, setHoveredBox] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const boxes = [
    { x: "50%", y: "50%", translateX: "-50%", translateY: "-50%", size: "clamp(48px, 7vw, 72px)", color: "#3b82f6" },
    { x: "68%", y: "32%", translateX: "-50%", translateY: "-50%", size: "clamp(42px, 6vw, 60px)", color: "#6366f1" },
    { x: "30%", y: "68%", translateX: "-50%", translateY: "-50%", size: "clamp(44px, 6.5vw, 64px)", color: "#8b5cf6" },
    { x: "78%", y: "68%", translateX: "-50%", translateY: "-50%", size: "clamp(36px, 5vw, 50px)", color: "#3b82f6" },
    { x: "22%", y: "34%", translateX: "-50%", translateY: "-50%", size: "clamp(46px, 6vw, 66px)", color: "#6366f1" },
  ]

  return (
    <section id="playground" className="playground" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="playground-header">
          <p className="section-label">Experiments</p>
          <h2 className="playground-title">
            Play<span className="text-gradient">ground</span>
          </h2>
          <p className="playground-description">
            I don't only build applications. I enjoy experimenting with the
            web — pushing boundaries and exploring what's possible.
          </p>
        </div>

        {/* Playground Card */}
        <motion.div
          className="playground-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
          style={{ height: "clamp(320px, 50vh, 520px)" }}
        >
          {/* Grid Background */}
          <div className="playground-grid" />

          {/* Center Glow */}
          <div className="playground-glow" />

          {/* Interactive Boxes */}
          <div className="playground-boxes">
            {boxes.map((box, i) => {
              const isActive = hoveredBox === i

              return (
                <motion.div
                  key={i}
                  className={`playground-box ${isActive ? "playground-box-active" : ""}`}
                  style={{
                    left: box.x,
                    top: box.y,
                    width: box.size,
                    height: box.size,
                    translateX: box.translateX,
                    translateY: box.translateY,
                    background: `linear-gradient(135deg, ${box.color}, ${box.color}88)`,
                    boxShadow: isActive
                      ? `0 0 30px ${box.color}55, 0 0 70px ${box.color}25`
                      : `0 8px 30px ${box.color}12`,
                  }}
                  animate={{
                    x: isActive
                      ? i % 2 === 0
                        ? 10
                        : -10
                      : 0,
                    y: isActive
                      ? i % 2 === 0
                        ? -10
                        : 10
                      : 0,
                    rotate: isActive ? 7 : 0,
                    scale: isActive ? 1.12 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                  onHoverStart={() => {
                    if (!isMobile) setHoveredBox(i)
                  }}
                  onHoverEnd={() => {
                    if (!isMobile) setHoveredBox(null)
                  }}
                  onClick={() => {
                    if (isMobile) {
                      setHoveredBox(hoveredBox === i ? null : i)
                    }
                  }}
                />
              )
            })}
          </div>

          {/* Center Content */}
          <div className="playground-center">
            <p className="playground-center-hint">
              {isMobile ? "Tap to interact" : "Hover to interact"}
            </p>
            <p className="playground-center-text">PLAY</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Playground
