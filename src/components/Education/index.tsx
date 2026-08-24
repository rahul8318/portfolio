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
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Academic
            <br />
            <span className="text-gradient">Background</span>
          </h2>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => {
            const color = typeColors[edu.type] || "#3b82f6"
            const label = typeLabels[edu.type] || edu.type

            return (
              <motion.div
                key={edu.id}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: easeOut }}
              >
                <div className="education-card-header">
                  <span
                    className="education-type"
                    style={{
                      color,
                      borderColor: `${color}40`,
                      backgroundColor: `${color}15`,
                    }}
                  >
                    {label}
                  </span>
                  <span className="education-date">
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                <div className="education-degree">{edu.degree}</div>
                <div className="education-field">{edu.field}</div>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-location">{edu.location}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
