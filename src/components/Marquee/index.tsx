import { motion } from "framer-motion"

interface MarqueeProps {
  text: string
  reverse?: boolean
  speed?: number
  className?: string
}

function Marquee({
  text,
  reverse = false,
  speed = 30,
  className = "",
}: MarqueeProps) {
  const items = Array.from({ length: 6 }, () => text)

  return (
    <div className={`marquee ${className}`}>
      {/* LEFT / RIGHT FADE */}
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />

      <motion.div
        className="marquee-track"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: Math.max(speed, 10),
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* TRACK 1 */}
        <div className="marquee-track-inner">
          {items.map((item, index) => (
            <span key={`first-${index}`} className="marquee-item">
              {item}
              <span aria-hidden="true" className="marquee-dot">
                •
              </span>
            </span>
          ))}
        </div>

        {/* TRACK 2 */}
        <div className="marquee-track-inner" aria-hidden="true">
          {items.map((item, index) => (
            <span key={`second-${index}`} className="marquee-item">
              {item}
              <span aria-hidden="true" className="marquee-dot">
                •
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Marquee
