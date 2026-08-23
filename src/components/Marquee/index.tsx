import { motion } from "framer-motion"

interface MarqueeProps {
  text: string
  reverse?: boolean
  speed?: number
  className?: string
}

function Marquee({ text, reverse = false, speed = 30, className = "" }: MarqueeProps) {
  const repeated = Array(10).fill(text).join(" • ")

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: reverse ? [0, -repeated.length * 8] : [-repeated.length * 8, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-zinc-800/80"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {repeated}
        </span>
        <span
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-zinc-800/80 mx-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {repeated}
        </span>
      </motion.div>
    </div>
  )
}

export default Marquee
