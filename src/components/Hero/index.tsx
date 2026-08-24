import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ThreeScene from "../ThreeScene"
import { personalInfo } from "../../data/personal"
import { useMediaQuery } from "../../hooks/useMediaQuery"

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section
      ref={ref}
      className="hero"
      id="hero"
    >
      {/* Desktop Background */}
      <div className="hero-bg hero-bg-desktop">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-gradient-bottom" />
        <ThreeScene className="hero-bg-3d" />
      </div>

      {/* Mobile Background */}
      <div className="hero-bg-mobile">
        <div className="hero-bg-mobile-orb hero-bg-mobile-orb-1" />
        <div className="hero-bg-mobile-orb hero-bg-mobile-orb-2" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Available for opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="hero-title-line">RAHUL</span>
          <span className="hero-title-line hero-title-accent">KUMAR</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a href="#work" className="btn btn-primary btn-full sm:btn-full">
            View Work
          </a>
          <a href="#contact" className="btn btn-secondary btn-full sm:btn-full">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="hero-scroll-line" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
