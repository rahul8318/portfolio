import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { education } from "../../data/education"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const typeColors: Record<string, string> = {
    undergraduate: "#3b82f6",
    diploma: "#10b981",
    "high-school": "#f59e0b",
  }

  const typeLabels: Record<string, string> = {
    undergraduate: "Undergraduate",
    diploma: "Diploma",
    "high-school": "High School",
  }

  return (
    <section id="education" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          Education
        </p>
        <h2
          className="font-bold leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Academic
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Background
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 border-border hover:border-accent/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-500 group flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: easeOut }}
          >
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <span
                className="text-[10px] md:text-xs px-4 py-2 md:px-4 md:py-2 rounded-full border tracking-wide"
                style={{
                  color: typeColors[edu.type] || "#3b82f6",
                  borderColor: typeColors[edu.type] + "40",
                  background: typeColors[edu.type] + "15",
                }}
              >
                {typeLabels[edu.type] || edu.type}
              </span>
              <span className="text-[10px] md:text-xs text-text-muted tracking-wide">
                {edu.startDate} — {edu.endDate}
              </span>
            </div>

            <div className="flex-1 flex flex-col">
              <h3
                className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-text-primary group-hover:text-accent transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {edu.degree}
              </h3>
              <p className="text-accent text-sm md:text-base mb-2 md:mb-3 tracking-wide">
                {edu.field}
              </p>
              <p className="text-text-secondary text-sm mb-2 md:mb-3 tracking-wide">{edu.institution}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-text-muted text-xs md:text-sm tracking-wide">
                  {edu.location}
                </p>
                {edu.cgpa && (
                  <p className="text-text-secondary text-xs md:text-sm mt-2 tracking-wide">
                    <span className="text-text-muted">CGPA:</span>{" "}
                    <span className="text-text-primary font-medium">{edu.cgpa}</span>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education