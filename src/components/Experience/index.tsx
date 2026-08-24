import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { experience } from "../../data/experience"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            Professional
            <br />
            <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="experience-timeline">
          <div className="experience-timeline-line" />
          
          <div className="experience-items">
            {experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className={`experience-item ${idx % 2 === 0 ? "experience-item-left" : "experience-item-right"}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: easeOut }}
              >
                <div className="experience-dot">
                  <div className="experience-dot-inner" />
                </div>
                
                <div className="experience-card">
                  <div className="experience-meta">
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-date">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="experience-tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="experience-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="experience-list-item">
                        <span className="experience-list-arrow">→</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
