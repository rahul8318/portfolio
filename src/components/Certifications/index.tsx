import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { certifications } from "../../data/education"
import { Award } from "lucide-react"

function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent mb-3 md:mb-4"
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
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border-border hover:border-accent/30 transition-all duration-500 min-h-[120px] md:min-h-[140px] flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-5 md:gap-6 w-full">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
                <Award size={24} className="md:w-7 md:h-7" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <h3
                      className="text-base md:text-lg font-bold mb-1 truncate text-text-primary tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-text-secondary text-sm tracking-wide">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-text-muted px-4 py-2 rounded-full bg-bg-tertiary/50 border border-border flex-shrink-0 w-fit tracking-wide">
                    {cert.year}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications