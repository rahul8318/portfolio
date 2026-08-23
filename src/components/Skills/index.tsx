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
    <section id="skills" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          Skills
        </p>
        <h2
          className="font-bold leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Developer
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            System
          </span>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="lg:col-span-4 space-y-2 md:space-y-3">
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 min-h-[56px] overflow-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                activeCategory === category.id
                  ? "glass border-accent/30 text-text-primary"
                  : "glass border-border hover:border-border-light text-text-secondary"
              }`}
            >
              <div className="relative flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <div>
                  <p
                    className="font-medium text-base md:text-lg tracking-wide"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-text-muted tracking-wide">
                    {category.skills.length} skills
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8">
          <div className="glass rounded-3xl p-8 md:p-10 lg:p-12 min-h-[300px] md:min-h-[400px]">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10">
              <span className="text-2xl md:text-3xl">
                {skillsData.find((s) => s.id === activeCategory)?.icon}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold text-text-primary tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skillsData.find((s) => s.id === activeCategory)?.name}
              </h3>
            </div>

            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activeSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300 border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: easeOut }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-medium text-sm md:text-base text-text-primary tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-xs text-text-muted tabular-nums tracking-wide">
                        {skill.level}%
                      </span>
                    )}
                  </div>
                  {skill.level && (
                    <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
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
      </motion.div>
    </section>
  )
}

export default Skills