import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { ExternalLink } from "lucide-react"
import { projects } from "../../data/projects"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function BrowserMockup({ project, isHovered }: { project: typeof projects[0]; isHovered: boolean }) {
  return (
    <div
      className={`browser-mockup ${isHovered ? "browser-mockup-hovered" : ""}`}
    >
      <div className="browser-mockup-header">
        <div className="browser-mockup-dots">
          <div className="browser-mockup-dot browser-mockup-dot-red" />
          <div className="browser-mockup-dot browser-mockup-dot-yellow" />
          <div className="browser-mockup-dot browser-mockup-dot-green" />
        </div>
        <div className="browser-mockup-url">
          <div className="browser-mockup-url-text">
            {project.liveUrl ? project.liveUrl.replace("https://", "") : project.title.toLowerCase() + ".app"}
          </div>
        </div>
      </div>

      <div className="browser-mockup-content">
        <div className="browser-mockup-placeholder">
          <div>
            <div
              className="browser-mockup-placeholder-number"
              style={{ color: project.color }}
            >
              {String(project.index).padStart(2, "0")}
            </div>
            <div
              className="browser-mockup-placeholder-title"
              style={{ color: project.color }}
            >
              {project.title}
            </div>
            <div className="browser-mockup-placeholder-subtitle">
              {project.subtitle}
            </div>
          </div>
        </div>

        {isHovered && (
          <div className="browser-mockup-hover-overlay">
            <div className="browser-mockup-hover-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PrepForgeMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`prepforge-mockup ${isHovered ? "prepforge-mockup-hovered" : ""}`}
    >
      <div className="browser-mockup-header">
        <div className="browser-mockup-dots">
          <div className="browser-mockup-dot browser-mockup-dot-red" />
          <div className="browser-mockup-dot browser-mockup-dot-yellow" />
          <div className="browser-mockup-dot browser-mockup-dot-green" />
        </div>
        <div className="browser-mockup-url">
          <div className="browser-mockup-url-text">
            prep-project-frontend.vercel.app
          </div>
        </div>
      </div>

      <div className="browser-mockup-content">
        <div className="prepforge-layout">
          {/* Sidebar */}
          <div className="prepforge-sidebar">
            <div className="prepforge-sidebar-item">
              <div className="prepforge-sidebar-item-inner" />
            </div>
            <div className="prepforge-sidebar-item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="prepforge-sidebar-item-inner" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
            <div className="prepforge-sidebar-item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="prepforge-sidebar-item-inner" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
            <div className="prepforge-sidebar-item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="prepforge-sidebar-item-inner" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
          </div>

          {/* Main Content */}
          <div className="prepforge-main">
            <div className="prepforge-header">
              <div className="prepforge-header-left">
                <div className="prepforge-header-title">Start Practicing</div>
                <div className="prepforge-header-subtitle">Welcome back</div>
              </div>
              <div className="prepforge-badge">12 Day Streak 🔥</div>
            </div>

            <div className="prepforge-cards">
              <div className="prepforge-card">
                <div className="prepforge-card-icon">💻</div>
                <div className="prepforge-card-title">Coding</div>
                <div className="prepforge-card-subtitle">Practice</div>
              </div>
              <div className="prepforge-card">
                <div className="prepforge-card-icon">🧠</div>
                <div className="prepforge-card-title">Technical</div>
                <div className="prepforge-card-subtitle">Practice</div>
              </div>
              <div className="prepforge-card">
                <div className="prepforge-card-icon">🗣️</div>
                <div className="prepforge-card-title">HR</div>
                <div className="prepforge-card-subtitle">Practice</div>
              </div>
            </div>

            <div className="prepforge-progress">
              <div className="prepforge-progress-title">Recent Progress</div>
              <div className="prepforge-progress-item">
                <span className="prepforge-progress-label">DSA Problems</span>
                <div className="prepforge-progress-bar">
                  <div className="prepforge-progress-fill" style={{ width: '75%' }} />
                </div>
                <span className="prepforge-progress-value">75%</span>
              </div>
              <div className="prepforge-progress-item">
                <span className="prepforge-progress-label">Technical Round</span>
                <div className="prepforge-progress-bar">
                  <div className="prepforge-progress-fill" style={{ width: '60%' }} />
                </div>
                <span className="prepforge-progress-value">60%</span>
              </div>
              <div className="prepforge-progress-item">
                <span className="prepforge-progress-label">HR Questions</span>
                <div className="prepforge-progress-bar">
                  <div className="prepforge-progress-fill" style={{ width: '40%' }} />
                </div>
                <span className="prepforge-progress-value">40%</span>
              </div>
            </div>
          </div>
        </div>

        {isHovered && (
          <div className="browser-mockup-hover-overlay">
            <div className="browser-mockup-hover-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function DDJCMockup({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`ddjc-mockup ${isHovered ? "ddjc-mockup-hovered" : ""}`}
    >
      <div className="browser-mockup-header">
        <div className="browser-mockup-dots">
          <div className="browser-mockup-dot browser-mockup-dot-red" />
          <div className="browser-mockup-dot browser-mockup-dot-yellow" />
          <div className="browser-mockup-dot browser-mockup-dot-green" />
        </div>
        <div className="browser-mockup-url">
          <div className="browser-mockup-url-text">ddjc.org.in</div>
        </div>
      </div>

      <div className="browser-mockup-content">
        <div className="ddjc-layout">
          <div className="ddjc-topbar">
            <div className="ddjc-logo">
              <div className="ddjc-logo-mark">D</div>
              <div className="ddjc-logo-text">DDJC</div>
            </div>
            <div className="ddjc-nav-pill">Justice • Rights • Community</div>
          </div>

          <div className="ddjc-hero">
            <div className="ddjc-hero-title">Dignity, Rights &amp; Justice for All</div>
            <div className="ddjc-hero-text">
              A platform connecting communities with legal aid, resources, and
              constitutional rights support.
            </div>
          </div>

          <div className="ddjc-modules">
            <div className="ddjc-module">
              <span className="ddjc-module-icon">⚖️</span>
              <span className="ddjc-module-label">Legal</span>
            </div>
            <div className="ddjc-module">
              <span className="ddjc-module-icon">📚</span>
              <span className="ddjc-module-label">Resources</span>
            </div>
            <div className="ddjc-module">
              <span className="ddjc-module-icon">🤝</span>
              <span className="ddjc-module-label">Community</span>
            </div>
            <div className="ddjc-module">
              <span className="ddjc-module-icon">🧑‍⚖️</span>
              <span className="ddjc-module-label">Support</span>
            </div>
          </div>
        </div>

        {isHovered && (
          <div className="browser-mockup-hover-overlay">
            <div className="browser-mockup-hover-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>
          </div>
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
    <section id="work" className="projects" ref={ref}>
      <div className="container">
        <div className="projects-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Featured
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: easeOut }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={idx % 2 === 1 ? "project-item-reverse" : ""}>
                <div className="project-info">
                  <span className="project-index">
                    {String(project.index).padStart(2, "0")} — {project.subtitle}
                  </span>
                  <h3 className="project-title">{project.title}</h3>

                  {(project.teamProject || project.role) && (
                    <div className="project-badges">
                      {project.teamProject && (
                        <span className="project-badge project-badge-team">
                          <span className="project-badge-dot" />
                          Team Project
                        </span>
                      )}
                      {project.role && (
                        <span className="project-badge project-badge-role">
                          <span className="project-badge-dot" />
                          {project.role}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="project-description">{project.description}</p>

                  <div className="project-stack">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="project-stack-item">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Link
                      to={`/work/${project.slug}`}
                      className="btn btn-primary"
                    >
                      <span>View Project</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <Link to={`/work/${project.slug}`} className="block">
                  {project.id === "prepforge" ? (
                    <PrepForgeMockup isHovered={hoveredProject === project.id} />
                  ) : project.id === "ddjc" ? (
                    <DDJCMockup isHovered={hoveredProject === project.id} />
                  ) : (
                    <BrowserMockup
                      project={project}
                      isHovered={hoveredProject === project.id}
                    />
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
