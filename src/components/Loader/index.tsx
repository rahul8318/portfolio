import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "reveal">("loading")

  useEffect(() => {
    const duration = 2000
    const interval = 30
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      const p = Math.min(Math.round((step / steps) * 100), 100)
      setProgress(p)
      if (p >= 100) {
        clearInterval(timer)
        setPhase("reveal")
        setTimeout(onComplete, 800)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="loading-overlay"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-6 md:gap-8 px-6">
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="font-bold tracking-tighter"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.05em",
              fontSize: "clamp(2rem, 8vw, 4.5rem)",
            }}
          >
            RAHUL KUMAR
          </h1>
          <div className="mt-2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        </motion.div>

        <motion.div
          className="flex items-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-light tabular-nums" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em", fontSize: "clamp(3rem, 10vw, 6rem)" }}>
            {String(progress).padStart(3, "0")}
          </div>
          <div className="text-xl md:text-2xl text-zinc-500 font-light">%</div>
        </motion.div>

        <motion.div
          className="w-48 md:w-64 h-[2px] bg-zinc-800 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </motion.div>

        <motion.p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
