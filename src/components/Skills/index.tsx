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
    <section id="skills" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          <span className="text-blue-500">System</span>
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
              className={`group relative w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-300 min-h-[56px] overflow-hidden ${
                activeCategory === category.id
                  ? "bg-zinc-900 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] text-white"
                  : "bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50 text-zinc-300"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 md:gap-4">
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <div>
                  <p
                    className="font-medium text-base md:text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-zinc-400">
                    {category.skills.length} skills
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-8">
          <div className="p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-zinc-900/30 border border-zinc-800/50 min-h-[300px] md:min-h-[400px]">
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <span className="text-2xl md:text-3xl">
                {skillsData.find((s) => s.id === activeCategory)?.icon}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skillsData.find((s) => s.id === activeCategory)?.name}
              </h3>
            </div>

            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="group relative p-5 rounded-2xl bg-zinc-800/20 border border-zinc-700/30 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: easeOut }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="font-medium text-sm md:text-base"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-xs text-zinc-500 tabular-nums">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
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
                  </div>
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