import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { getProjectBySlug, projects } from "@/data/projects"
import { useEffect } from "react"

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || "")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-black">
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="text-xs text-zinc-500 tracking-[0.2em] uppercase">
            Project {String(project.index).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24">
        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-zinc-500 tracking-[0.2em] uppercase block mb-4">
            {project.subtitle}
          </span>
          <h1
            className="font-bold leading-[0.9] mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.04em",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
            }}
          >
            {project.title}
          </h1>
          <p className="text-base md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { label: "Role", value: "Full Stack Developer" },
            { label: "Stack", value: project.stack.join(" • ") },
            { label: "Year", value: "2025" },
            { label: "Status", value: "Live" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 min-h-[80px]"
            >
              <p className="text-[10px] md:text-xs text-zinc-500 tracking-widest uppercase mb-1 md:mb-2">
                {item.label}
              </p>
              <p className="text-sm font-medium leading-tight">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Overview
          </h3>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Problem
          </h3>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
            {project.problem}
          </p>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                <span className="text-zinc-300 text-sm md:text-base">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Challenge & Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="text-xs text-zinc-500 tracking-widest uppercase mb-2 md:mb-3">
                Challenge
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 tracking-widest uppercase mb-2 md:mb-3">
                Approach
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{project.approach}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Result
          </h3>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl">
            {project.result}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 bg-white text-black text-sm font-medium tracking-widest uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 min-h-[48px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 border border-zinc-600 text-zinc-200 text-sm font-medium tracking-widest uppercase rounded-full hover:border-white hover:text-white transition-all duration-300 min-h-[48px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <GithubIcon />
              GitHub
            </a>
          )}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 md:pt-8 border-t border-zinc-800/50">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors w-full sm:w-auto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform flex-shrink-0">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-zinc-500">Previous</p>
                <p className="font-medium truncate">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors text-right w-full sm:w-auto"
            >
              <div className="min-w-0">
                <p className="text-xs text-zinc-500">Next</p>
                <p className="font-medium truncate">{nextProject.title}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:translate-x-1 transition-transform flex-shrink-0">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
