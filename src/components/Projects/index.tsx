import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../../data/projects"
import { ExternalLink } from "lucide-react"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

function BrowserMockup({ project, isHovered }: { project: typeof projects[0]; isHovered: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] rounded-2xl overflow-hidden glass border-border"
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(-5deg) rotateX(3deg) scale(1.02)" : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: isHovered ? `0 25px 50px -12px ${project.color}20, 0 0 0 1px ${project.color}30` : "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-bg-secondary/80 border-b border-border">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-bg-tertiary/50 rounded-md px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-text-muted text-center truncate">
            {project.liveUrl ? project.liveUrl.replace("https://", "") : project.title.toLowerCase() + ".app"}
          </div>
        </div>
      </div>

      <div className="relative p-3 md:p-6 bg-gradient-to-br from-bg-secondary to-bg min-h-[200px]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 opacity-10"
              style={{ fontFamily: "var(--font-display)", color: project.color }}
            >
              {String(project.index).padStart(2, "0")}
            </div>
            <p
              className="text-lg md:text-xl lg:text-2xl font-medium text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </p>
            <p className="text-xs md:text-sm text-text-muted mt-1 md:mt-2">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  )
}

function PrepForgeMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] rounded-2xl overflow-hidden glass border-border"
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(-5deg) rotateX(3deg) scale(1.02)" : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: isHovered ? "0 25px 50px -12px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.3)" : "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-bg-secondary/80 border-b border-border">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-bg-tertiary/50 rounded-md px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-text-muted text-center truncate">
            prep-project-frontend.vercel.app
          </div>
        </div>
      </div>

      <div className="relative p-4 md:p-8 bg-gradient-to-br from-bg-secondary to-bg min-h-[200px] md:min-h-[300px]">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full">
          <div className="flex md:flex-col items-center md:items-stretch gap-2 md:gap-3 md:w-14 lg:w-16 flex-shrink-0 overflow-x-auto md:overflow-visible">
            <div className="p-2 md:p-2 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-accent/20" />
            </div>
            <div className="p-2 md:p-2 rounded-lg hover:bg-bg-tertiary/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-border" />
            </div>
            <div className="p-2 md:p-2 rounded-lg hover:bg-bg-tertiary/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-border" />
            </div>
            <div className="p-2 md:p-2 rounded-lg hover:bg-bg-tertiary/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-border" />
            </div>
          </div>

          <div className="flex-1 space-y-4 md:space-y-5 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs text-text-muted mb-1 tracking-wide">Welcome back</p>
                <p className="text-sm md:text-lg font-semibold text-text-primary truncate tracking-wide">Start Practicing</p>
              </div>
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] md:text-xs text-accent flex-shrink-0 tracking-wide">
                12 Day Streak
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {["Coding", "Technical", "HR"].map((type) => (
                <div key={type} className="p-3 md:p-5 rounded-lg md:rounded-xl glass border-border hover:border-accent/30 transition-colors">
                  <div className="text-lg md:text-2xl mb-1 md:mb-2">{type === "Coding" ? "💻" : type === "Technical" ? "🧠" : "🗣️"}</div>
                  <p className="text-xs md:text-sm font-medium text-text-primary truncate tracking-wide">{type}</p>
                  <p className="text-[10px] md:text-xs text-text-muted mt-0.5 md:mt-1 tracking-wide">Practice</p>
                </div>
              ))}
            </div>

            <div className="p-3 md:p-5 rounded-lg md:rounded-xl glass border-border">
              <p className="text-[10px] md:text-xs text-text-muted mb-2 md:mb-3 tracking-wide">Recent Progress</p>
              <div className="space-y-2 md:space-y-3">
                {[
                  { label: "DSA Problems", progress: 75 },
                  { label: "Technical Round", progress: 60 },
                  { label: "HR Questions", progress: 40 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 md:gap-3">
                    <span className="text-[10px] md:text-xs text-text-secondary w-16 md:w-28 flex-shrink-0 truncate tracking-wide">{item.label}</span>
                    <div className="flex-1 h-1.5 md:h-2 bg-bg-tertiary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs text-text-muted flex-shrink-0 tracking-wide">{item.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="work" className="py-24 md:py-32 lg:py-40 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          Selected Work
        </p>
        <h2
          className="font-bold leading-[0.95]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          Featured
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </motion.div>

      <div className="space-y-16 md:space-y-24 lg:space-y-32">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: easeOut }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
              <div
                className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <span
                  className="text-xs text-text-muted tracking-[0.15em] md:tracking-[0.2em] uppercase block mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(project.index).padStart(2, "0")} — {project.subtitle}
                </span>
                <h3
                  className="font-bold mb-5 text-text-primary group-hover:text-accent transition-colors duration-500 tracking-wide"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.03em",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-5 text-sm md:text-base lg:text-lg tracking-wide">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-xs rounded-full glass border-border text-text-secondary tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-white text-bg text-sm md:text-base font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-accent hover:text-white transition-all duration-500 min-h-[52px] md:min-h-[56px] shadow-lg shadow-white/10 hover:shadow-accent/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 glass text-text-primary text-sm md:text-base font-semibold tracking-[0.12em] uppercase rounded-full hover:border-accent/50 hover:text-white transition-all duration-500 min-h-[52px] md:min-h-[56px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="flex-shrink-0" />
                    </a>
                  )}
                </div>
              </div>

              <div
                className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Link to={`/work/${project.slug}`} className="block">
                  {project.id === "prepforge" ? (
                    <PrepForgeMockup isHovered={hoveredProject === project.id} />
                  ) : (
                    <BrowserMockup
                      project={project}
                      isHovered={hoveredProject === project.id}
                    />
                  )}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects