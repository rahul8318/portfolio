import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { skillsData } from "../../data/skills"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("frontend")

  const activeSkills = skillsData.find((s) => s.id === activeCategory)?.skills || []

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills-grid">
          {/* Sidebar / Category Selection */}
          <div className="skills-sidebar">
            {skillsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`skill-category-btn ${activeCategory === category.id ? "active" : ""}`}
              >
                <span className="skill-category-icon">{category.icon}</span>
                <div className="skill-category-info">
                  <span className="skill-category-name">{category.name}</span>
                  <span className="skill-category-count">{category.skills.length} skills</span>
                </div>
              </button>
            ))}
          </div>

          {/* Skills Display Grid */}
          <div className="skills-display">
            <div className="skills-display-header">
              <span className="skills-display-icon">
                {skillsData.find((s) => s.id === activeCategory)?.icon}
              </span>
              <h3 className="skills-display-title">
                {skillsData.find((s) => s.id === activeCategory)?.name}
              </h3>
            </div>

            <div key={activeCategory} className="skills-grid-items">
              {activeSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: easeOut }}
                >
                  <div className="skill-item-header">
                    <span className="skill-item-name">{skill.name}</span>
                    {skill.level && (
                      <span className="skill-item-level">{skill.level}%</span>
                    )}
                  </div>
                  {skill.level && (
                    <div className="skill-item-bar">
                      <motion.div
                        className="skill-item-fill"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color || "#3b82f6"}, ${skill.color || "#3b82f6"}88)`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
