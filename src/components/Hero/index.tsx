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
      className="relative flex items-center justify-center overflow-hidden"
      id="hero"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/5 animate-gradient" />

      {!isMobile && (
        <ThreeScene className="absolute inset-0 opacity-30" isMobile={isMobile} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent z-[1]" />

      <div className="relative z-10 text-center px-5 md:px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p
              className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-text-secondary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Available for opportunities
            </p>
          </div>
        </motion.div>

        <motion.h1
          className="font-bold leading-[0.95] mb-4 md:mb-6 max-w-5xl mx-auto"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.04em",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="block text-text-primary">RAHUL</span>
          <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            KUMAR
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Full Stack Developer specializing in the MERN stack. Building exceptional digital experiences where engineering meets interaction.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#work"
            className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-white text-bg text-sm md:text-base font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-accent hover:text-white transition-all duration-500 text-center min-h-[52px] md:min-h-[56px] flex items-center justify-center shadow-lg shadow-white/10 hover:shadow-accent/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 glass text-text-primary text-sm md:text-base font-semibold tracking-[0.12em] uppercase rounded-full hover:border-accent/50 hover:text-white transition-all duration-500 text-center min-h-[52px] md:min-h-[56px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex items-center justify-center gap-2 text-text-muted">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-text-muted to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero