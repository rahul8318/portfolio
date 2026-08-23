import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experience } from "../../data/experience"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="mb-10 md:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent mb-3 md:mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Experience
        </p>
        <h2
          className="font-bold leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Professional
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[6px] md:left-8 top-0 bottom-0 w-[1px] bg-border" />

        <div className="space-y-12 md:space-y-20 lg:space-y-24">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative pl-10 md:pl-20"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: easeOut }}
            >
              <div className="absolute left-0 md:left-[26px] top-2 w-3 h-3 rounded-full bg-accent border-4 border-bg shadow-[0_0_12px_rgba(59,130,246,0.4)]" />

              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 mb-3 md:mb-4">
                <div>
                  <p className="text-xs text-text-muted tracking-[0.15em] uppercase mb-1 md:mb-2">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-accent mt-1 text-sm md:text-base">{exp.company}</p>
                  {exp.location && (
                    <p className="text-text-muted text-xs md:text-sm mt-0.5">{exp.location}</p>
                  )}
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-5 md:mb-6 max-w-2xl text-sm md:text-base tracking-wide">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-xs rounded-full glass border-border text-text-secondary min-h-[36px] flex items-center tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 md:space-y-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary tracking-wide">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience