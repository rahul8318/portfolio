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
      <div className="project-not-found">
        <div>
          <h1 className="project-not-found-title">Project Not Found</h1>
          <Link to="/" className="project-not-found-link">
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
    <div className="project-page">
      {/* Sticky Header */}
      <div className="project-header">
        <div className="project-header-inner">
          <Link to="/" className="project-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="project-back-icon">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="project-counter">
            Project {String(project.index).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Hero */}
        <motion.div
          className="project-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="project-subtitle">{project.subtitle}</span>
          <h1
            className="project-title"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.04em",
            }}
          >
            {project.title}
          </h1>
          <p className="project-description">{project.longDescription}</p>
        </motion.div>

        {/* Meta Grid */}
        <motion.div
          className="project-meta-grid"
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
            <div key={item.label} className="project-meta-card">
              <p className="project-meta-label">{item.label}</p>
              <p className="project-meta-value">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Overview */}
        <motion.div
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="project-section-title">Overview</h3>
          <p className="project-section-text">{project.longDescription}</p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="project-section-title">The Problem</h3>
          <p className="project-section-text">{project.problem}</p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="project-section-title">Key Features</h3>
          <div className="project-features-grid">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                className="project-feature"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <span className="project-feature-arrow">→</span>
                <span className="project-feature-text">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge & Approach */}
        <motion.div
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="project-section-title">Challenge & Approach</h3>
          <div className="project-challenge-grid">
            <div>
              <p className="project-challenge-label">Challenge</p>
              <p className="project-section-text">{project.challenge}</p>
            </div>
            <div>
              <p className="project-challenge-label">Approach</p>
              <p className="project-section-text">{project.approach}</p>
            </div>
          </div>
        </motion.div>

        {/* Result */}
        <motion.div
          className="project-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="project-section-title">Result</h3>
          <p className="project-section-text">{project.result}</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="project-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-full"
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
              className="btn btn-secondary btn-full"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <GithubIcon />
              GitHub
            </a>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="project-nav">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="project-nav-link project-nav-link-left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="project-nav-icon">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <div className="project-nav-info">
                <p className="project-nav-label">Previous</p>
                <p className="project-nav-title">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}`}
              className="project-nav-link project-nav-link-right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="project-nav-icon">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <div className="project-nav-info">
                <p className="project-nav-label">Next</p>
                <p className="project-nav-title">{nextProject.title}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
