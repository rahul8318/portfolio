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
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <p
            className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-4 md:mb-6"
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
            <span className="text-blue-500">matter.</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
          <p className="text-base md:text-lg text-zinc-200 leading-relaxed">
            I'm a{" "}
            <span className="text-white font-medium">
              Computer Science undergraduate
            </span>{" "}
            expected to graduate in 2028, focused on building exceptional
            digital experiences with the{" "}
            <span className="text-blue-400 font-medium">MERN stack</span>.
          </p>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            I specialize in React.js, Node.js, Express.js, and MongoDB,
            creating full-stack applications that are scalable, performant,
            and user-centric. With a strong foundation in Data Structures &
            Algorithms and core computer science concepts, I bring both
            engineering rigor and creative problem-solving to every project.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5 pt-5 md:pt-8">
            <div className="group relative p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 md:mb-4 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                  <Code2 size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-blue-500 mb-1 md:mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
                  {personalInfo.leetCodeSolved}+
                </div>
                <p className="text-xs md:text-sm text-zinc-300 tracking-wide">
                  LeetCode Problems Solved
                </p>
              </div>
            </div>
            <div className="group relative p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 md:mb-4 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                  <Award size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="font-bold text-blue-500 mb-1 md:mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
                  MERN
                </div>
                <p className="text-xs md:text-sm text-zinc-300 tracking-wide">
                  Full Stack Expertise
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-14 md:mt-20 lg:mt-28"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p
          className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-5 md:mb-6"
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
                className="group relative p-4 md:p-5 rounded-2xl md:rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/30 hover:bg-zinc-900/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-xl md:text-2xl mb-2 md:mb-3 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300">
                    <Icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <p
                    className="text-sm font-medium mb-1 md:mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-zinc-500">
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