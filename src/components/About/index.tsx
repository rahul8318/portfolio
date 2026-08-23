import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { personalInfo } from "../../data/personal"
import { skillsData } from "../../data/skills"
import { Code2, Award, Globe, Cpu, Database, Wrench, Palette, Server } from "lucide-react"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  frontend: Palette,
  backend: Server,
  database: Database,
  languages: Code2,
  core: Cpu,
  tools: Wrench,
}

function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden glass p-1">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <span className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      RK
                    </span>
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-text-primary mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Rahul Kumar
                  </h3>
                  <p className="text-text-secondary">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl opacity-20 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full opacity-10 blur-3xl" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 lg:order-2 flex flex-col justify-center">
          <p
            className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Me
          </p>
          <h2
            className="font-bold leading-[0.95] mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            I build things
            <br />
            that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              matter.
            </span>
          </h2>

          <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              I'm a{" "}
              <span className="text-text-primary font-medium">
                Computer Science undergraduate
              </span>{" "}
              expected to graduate in 2028, focused on building exceptional
              digital experiences with the{" "}
              <span className="text-accent font-medium">MERN stack</span>.
            </p>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              I specialize in React.js, Node.js, Express.js, and MongoDB,
              creating full-stack applications that are scalable, performant,
              and user-centric. With a strong foundation in Data Structures &
              Algorithms and core computer science concepts, I bring both
              engineering rigor and creative problem-solving to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="glass rounded-2xl p-5 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {personalInfo.leetCodeSolved}+
              </div>
              <p className="text-xs md:text-sm text-text-muted">LeetCode Problems Solved</p>
            </div>
            <div className="glass rounded-2xl p-5 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>
                MERN
              </div>
              <p className="text-xs md:text-sm text-text-muted">Full Stack Expertise</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20 md:mt-28 lg:mt-36"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent mb-5 md:mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tech Stack
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {skillsData.map((category) => {
            const Icon = iconMap[category.id] || Globe
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="glass rounded-2xl p-4 md:p-5 hover:border-accent/30 transition-all duration-500 group cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300">
                    <Icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <p
                    className="text-sm font-medium text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-text-muted">
                    {category.skills.length} tools
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default About