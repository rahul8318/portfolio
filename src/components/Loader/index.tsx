import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)

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
        setTimeout(onComplete, 600)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      {/* Background Glow */}
      <div className="loader-backdrop">
        <div className="loader-glow" />
      </div>

      {/* Content */}
      <div className="loader-content">
        {/* Name */}
        <motion.div
          className="loader-name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h1 className="loader-name-text">RAHUL KUMAR</h1>
          <div className="loader-name-line" />
        </motion.div>

        {/* Progress Number */}
        <motion.div
          className="loader-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <span className="loader-progress-number">
            {String(progress).padStart(3, "0")}
          </span>
          <span className="loader-progress-percent">%</span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="loader-bar"
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className="loader-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08, ease: "linear" }}
          />
        </motion.div>

        {/* Role */}
        <motion.p
          className="loader-role"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
