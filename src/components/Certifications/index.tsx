import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { certifications } from "../../data/education"
import { Award } from "lucide-react"

function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <div className="certifications-header">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Credentials</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="certification-icon">
                <Award size={21} />
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
              <span className="certification-year">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
