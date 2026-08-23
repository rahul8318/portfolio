import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { certifications } from "../../data/education"
import { Award } from "lucide-react"

function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-3 md:mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Certifications
        </p>
        <h2
          className="font-bold leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Credentials
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className="group relative p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-500 min-h-[100px] md:min-h-[110px] flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 md:gap-5 w-full">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <Award size={20} className="md:w-6 md:h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div className="min-w-0">
                    <h3
                      className="text-base md:text-lg font-bold mb-0.5 truncate text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-zinc-300 text-sm truncate">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-zinc-400 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex-shrink-0 w-fit">
                    {cert.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications