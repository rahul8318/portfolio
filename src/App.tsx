import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import CustomCursor from "@/components/CustomCursor"
import Loader from "@/components/Loader"
import Navigation from "@/components/Navigation"
import MenuOverlay from "@/components/Navigation/MenuOverlay"
import HomePage from "@/pages/Home"
import ProjectPage from "@/pages/Project"
import { useMediaQuery } from "@/hooks/useMediaQuery"

function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      {!isMobile && <CustomCursor />}
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s ease" }}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
      {isMobile && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-items">
            {[
              { label: "Home", href: "/", emoji: "🏠" },
              { label: "Work", href: "/#work", emoji: "💼" },
              { label: "About", href: "/#about", emoji: "👤" },
              { label: "Contact", href: "/#contact", emoji: "✉️" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-item"
                aria-label={item.label}
              >
                <span className="mobile-nav-item-emoji">{item.emoji}</span>
                <span className="mobile-nav-item-label">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}

export default App
