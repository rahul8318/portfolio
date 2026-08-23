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
    <section id="education" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          <span className="text-blue-500">Background</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-500 group flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: easeOut }}
          >
            <div className="flex items-center justify-between mb-4 md:mb-5">
              <span
                className="text-[10px] md:text-xs px-3 py-1 md:px-3 md:py-1.5 rounded-full border"
                style={{
                  color: typeColors[edu.type] || "#3b82f6",
                  borderColor: typeColors[edu.type] + "40",
                  background: typeColors[edu.type] + "15",
                }}
              >
                {typeLabels[edu.type] || edu.type}
              </span>
              <span className="text-[10px] md:text-xs text-zinc-400">
                {edu.startDate} — {edu.endDate}
              </span>
            </div>

            <div className="flex-1 flex flex-col">
              <h3
                className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2 text-white group-hover:text-blue-400 transition-colors"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {edu.degree}
              </h3>
              <p className="text-blue-400 text-sm md:text-base mb-1 md:mb-1.5">
                {edu.field}
              </p>
              <p className="text-zinc-300 text-sm mb-1 md:mb-2">{edu.institution}</p>
              <div className="mt-auto pt-3 border-t border-zinc-800/50">
                <p className="text-zinc-400 text-xs md:text-sm">
                  {edu.location}
                </p>
                {edu.cgpa && (
                  <p className="text-zinc-300 text-xs md:text-sm mt-1">
                    <span className="text-zinc-500">CGPA:</span>{" "}
                    <span className="text-white font-medium">{edu.cgpa}</span>
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