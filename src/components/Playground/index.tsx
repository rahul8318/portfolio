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
    { x: 0, y: 0, color: "#3b82f6", size: 70 },
    { x: 140, y: -50, color: "#6366f1", size: 55 },
    { x: -100, y: 70, color: "#8b5cf6", size: 60 },
    { x: 220, y: 90, color: "#3b82f6", size: 45 },
    { x: -170, y: -30, color: "#6366f1", size: 65 },
  ]

  const scale = isMobile ? 0.65 : 1

  return (
    <section id="playground" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experiments
          </p>
          <h2
            className="font-bold leading-[0.95]"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Play<span className="text-blue-500">ground</span>
          </h2>
          <p className="text-zinc-400 mt-6 max-w-xl mx-auto text-sm md:text-base">
            I don't only build applications. I enjoy experimenting with the web
            — pushing boundaries and exploring what's possible.
          </p>
        </motion.div>

        <motion.div
          className="relative h-[320px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-3xl bg-zinc-900/30 border border-zinc-800/50 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: easeOut }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative w-full h-full max-w-4xl"
              style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
            >
              {boxes.map((box, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-xl cursor-pointer"
                  style={{
                    left: `calc(50% + ${box.x}px)`,
                    top: `calc(50% + ${box.y}px)`,
                    width: box.size,
                    height: box.size,
                    marginLeft: -box.size / 2,
                    marginTop: -box.size / 2,
                    background: `linear-gradient(135deg, ${box.color}, ${box.color}88)`,
                    boxShadow: hoveredBox === i
                      ? `0 0 40px ${box.color}50, 0 0 80px ${box.color}20`
                      : "none",
                  }}
                  animate={{
                    x: hoveredBox === i ? (i % 2 === 0 ? 12 : -12) : 0,
                    y: hoveredBox === i ? (i % 2 === 0 ? -12 : 12) : 0,
                    rotate: hoveredBox === i ? 8 : 0,
                    scale: hoveredBox === i ? 1.15 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={() => !isMobile && setHoveredBox(i)}
                  onHoverEnd={() => !isMobile && setHoveredBox(null)}
                  onTap={() => isMobile && setHoveredBox(hoveredBox === i ? null : i)}
                />
              ))}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-[10px] md:text-xs text-zinc-600 tracking-[0.2em] uppercase mb-1 md:mb-2">
                    {isMobile ? "Tap to interact" : "Hover to interact"}
                  </p>
                  <p className="text-4xl md:text-6xl font-bold text-zinc-800" style={{ fontFamily: "var(--font-display)" }}>
                    PLAY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Playground