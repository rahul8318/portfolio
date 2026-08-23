import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experience } from "../../data/experience"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="mb-10 md:mb-14 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-3 md:mb-4"
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
          <span className="text-blue-500">Journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[6px] md:left-8 top-0 bottom-0 w-[1px] bg-zinc-800" />

        <div className="space-y-12 md:space-y-20 lg:space-y-24">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="relative pl-10 md:pl-20"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: easeOut }}
            >
              <div className="absolute left-0 md:left-[26px] top-2 w-3 h-3 rounded-full bg-blue-500 border-4 border-zinc-900 shadow-[0_0_12px_rgba(59,130,246,0.4)]" />

              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 mb-3 md:mb-4">
                <div>
                  <p className="text-xs text-zinc-500 tracking-[0.15em] uppercase mb-1 md:mb-2">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 mt-1 text-sm md:text-base">{exp.company}</p>
                  {exp.location && (
                    <p className="text-zinc-500 text-xs md:text-sm mt-0.5">{exp.location}</p>
                  )}
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-4 md:mb-6 max-w-2xl text-sm md:text-base">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-3 md:py-1.5 text-xs rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 min-h-[32px] flex items-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 md:space-y-3">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
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