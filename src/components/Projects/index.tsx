import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../../data/projects"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function BrowserMockup({ project, isHovered }: { project: typeof projects[0]; isHovered: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(-5deg) rotateX(3deg) scale(1.02)" : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: isHovered ? `0 25px 50px -12px ${project.color}20, 0 0 0 1px ${project.color}30` : "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-zinc-800/80 border-b border-zinc-700/50">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-zinc-700/50 rounded-md px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-zinc-400 text-center truncate">
            {project.liveUrl ? project.liveUrl.replace("https://", "") : project.title.toLowerCase() + ".app"}
          </div>
        </div>
      </div>

      <div className="relative p-3 md:p-6 bg-gradient-to-br from-zinc-900 to-black min-h-[200px]">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 opacity-10"
              style={{ fontFamily: "var(--font-display)", color: project.color }}
            >
              {String(project.index).padStart(2, "0")}
            </div>
            <p
              className="text-lg md:text-xl lg:text-2xl font-medium"
              style={{ fontFamily: "var(--font-display)", color: project.color }}
            >
              {project.title}
            </p>
            <p className="text-xs md:text-sm text-zinc-500 mt-1 md:mt-2">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="md:hidden">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="hidden md:block">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function PrepForgeMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900"
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(-5deg) rotateX(3deg) scale(1.02)" : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        boxShadow: isHovered ? "0 25px 50px -12px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.3)" : "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-zinc-800/80 border-b border-zinc-700/50">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-2 md:mx-4">
          <div className="bg-zinc-700/50 rounded-md px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs text-zinc-400 text-center truncate">
            prep-project-frontend.vercel.app
          </div>
        </div>
      </div>

      <div className="relative p-3 md:p-6 bg-gradient-to-br from-zinc-900 to-black min-h-[200px] md:min-h-[300px]">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 h-full">
          <div className="flex md:flex-col items-center md:items-stretch gap-2 md:gap-3 md:w-14 lg:w-16 flex-shrink-0 overflow-x-auto md:overflow-visible">
            <div className="p-1.5 md:p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-blue-500/20" />
            </div>
            <div className="p-1.5 md:p-2 rounded-lg hover:bg-zinc-800/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-zinc-700/50" />
            </div>
            <div className="p-1.5 md:p-2 rounded-lg hover:bg-zinc-800/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-zinc-700/50" />
            </div>
            <div className="p-1.5 md:p-2 rounded-lg hover:bg-zinc-800/50 flex-shrink-0">
              <div className="w-5 h-5 md:w-6 md:h-6 mx-auto rounded bg-zinc-700/50" />
            </div>
          </div>

          <div className="flex-1 space-y-3 md:space-y-4 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] md:text-xs text-zinc-500 mb-0.5 md:mb-1">Welcome back</p>
                <p className="text-sm md:text-lg font-semibold text-white truncate">Start Practicing</p>
              </div>
              <div className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs text-blue-400 flex-shrink-0">
                12 Day Streak
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {["Coding", "Technical", "HR"].map((type) => (
                <div key={type} className="p-2 md:p-4 rounded-lg md:rounded-xl bg-zinc-800/30 border border-zinc-700/30 hover:border-blue-500/30 transition-colors">
                  <div className="text-lg md:text-2xl mb-1 md:mb-2">{type === "Coding" ? "💻" : type === "Technical" ? "🧠" : "🗣️"}</div>
                  <p className="text-xs md:text-sm font-medium truncate">{type}</p>
                  <p className="text-[10px] md:text-xs text-zinc-500 mt-0.5 md:mt-1">Practice</p>
                </div>
              ))}
            </div>

            <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-zinc-800/20 border border-zinc-700/20">
              <p className="text-[10px] md:text-xs text-zinc-500 mb-2 md:mb-3">Recent Progress</p>
              <div className="space-y-1.5 md:space-y-2">
                {[
                  { label: "DSA Problems", progress: 75 },
                  { label: "Technical Round", progress: 60 },
                  { label: "HR Questions", progress: 40 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 md:gap-3">
                    <span className="text-[10px] md:text-xs text-zinc-400 w-16 md:w-28 flex-shrink-0 truncate">{item.label}</span>
                    <div className="flex-1 h-1 md:h-1.5 bg-zinc-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs text-zinc-500 flex-shrink-0">{item.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="md:hidden">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="hidden md:block">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="work" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
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
          <span className="text-blue-500">Projects</span>
        </h2>
      </motion.div>

      <div className="space-y-14 md:space-y-20 lg:space-y-28">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
              <div
                className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <span
                  className="text-xs text-zinc-500 tracking-[0.15em] md:tracking-[0.2em] uppercase block mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(project.index).padStart(2, "0")} — {project.subtitle}
                </span>
                <h3
                  className="font-bold mb-4 md:mb-5 group-hover:text-blue-400 transition-colors duration-500"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.03em",
                    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-4 md:mb-5 text-sm md:text-base lg:text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 md:px-3 md:py-1.5 text-xs rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 min-h-[32px] flex items-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-7 md:py-3.5 bg-white text-black text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 min-h-[48px]"
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
                      className="inline-flex items-center justify-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors min-h-[48px] px-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span>Live Demo</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
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