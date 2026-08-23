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
        background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)",
      }}
    >
      {!isMobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-[1]" />
          <ThreeScene className="absolute inset-0 opacity-40" isMobile={isMobile} />
        </>
      )}

      {isMobile && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-500/5 blur-3xl" />
        </div>
      )}

      <div className="relative z-10 text-center px-5 md:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <p
            className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Full Stack Developer
          </p>
        </motion.div>

        <motion.h1
          className="font-bold leading-[0.9] mb-4 md:mb-6"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.04em",
            textShadow: "0 0 80px rgba(59,130,246,0.15)",
            fontSize: "clamp(2.8rem, 8vw, 9rem)",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="block">RAHUL</span>
          <span className="block text-blue-500">KUMAR</span>
        </motion.h1>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-zinc-300 max-w-lg md:max-w-xl mx-auto mb-6 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <a
            href="#work"
            className="group relative w-full sm:w-auto px-7 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 text-center min-h-[48px] flex items-center justify-center overflow-hidden"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-7 py-3.5 md:px-8 md:py-4 border border-zinc-500 bg-zinc-900/50 text-zinc-100 text-sm font-semibold tracking-[0.1em] uppercase rounded-full hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-500 text-center min-h-[48px] flex items-center justify-center overflow-hidden"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-[1px] h-10 md:h-14 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent mx-auto relative">
            <div className="absolute inset-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero