import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { personalInfo } from "../../data/personal"
import { skillsData } from "../../data/skills"
import {
  Code2,
  Globe,
  Cpu,
  Database,
  Wrench,
  Palette,
  Server,
} from "lucide-react"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  frontend: Palette,
  backend: Server,
  database: Database,
  languages: Code2,
  core: Cpu,
  tools: Wrench,
}

function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

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
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        {/* ABOUT TOP */}
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* PROFILE CARD */}
          <motion.div variants={itemVariants} className="about-card-wrapper">
            <div className="about-card">
              <div className="about-card-inner">
                {/* Animated background orbs */}
                <div className="about-card-orb about-card-orb-1" />
                <div className="about-card-orb about-card-orb-2" />
                
                <div className="about-card-content">
                  <div className="about-card-avatar">
                    <div className="about-card-avatar-overlay" />
                    <span className="about-card-avatar-text">RK</span>
                  </div>

                  <h3 className="about-card-name">Rahul Kumar</h3>
                  <p className="about-card-role">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="about-card-decoration about-card-decoration-1" />
            <div className="about-card-decoration about-card-decoration-2" />
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div variants={itemVariants} className="about-content">
            <p className="about-label">About Me</p>

            <h2 className="about-title">
              I build things
              <br />
              that{" "}
              <span className="about-title-accent">matter.</span>
            </h2>

            <div className="about-text-wrapper">
              <p className="about-text">
                I'm a{" "}
                <span className="about-text-strong">Computer Science undergraduate</span>{" "}
                expected to graduate in 2028, focused on building exceptional
                digital experiences with the{" "}
                <span className="about-text-accent">MERN stack</span>
                .
              </p>

              <p className="about-text about-text-muted">
                I specialize in React.js, Node.js, Express.js, and MongoDB,
                creating full-stack applications that are scalable,
                performant, and user-centric. With a strong foundation in
                Data Structures & Algorithms and core computer science
                concepts, I bring both engineering rigor and creative
                problem-solving to every project.
              </p>
            </div>

            {/* STATS */}
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-value">{personalInfo.leetCodeSolved}+</div>
                <p className="about-stat-label">LeetCode Problems Solved</p>
              </div>

              <div className="about-stat">
                <div className="about-stat-value about-stat-value-emerald">MERN</div>
                <p className="about-stat-label">Full Stack Expertise</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          className="about-tech"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="about-tech-label">Tech Stack</p>

          <div className="about-tech-grid">
            {skillsData.map((category) => {
              const Icon = iconMap[category.id] || Globe

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  className="about-tech-item"
                >
                  <div className="about-tech-item-inner">
                    <div className="about-tech-icon-wrapper">
                      <div className="about-tech-icon-border">
                        <Icon size={20} className="about-tech-icon-svg" />
                      </div>
                    </div>

                    <p className="about-tech-name">{category.name}</p>

                    <p className="about-tech-count">{category.skills.length} tools</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
