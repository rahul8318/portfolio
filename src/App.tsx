import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import CustomCursor from "@/components/CustomCursor"
import Loader from "@/components/Loader"
import Navigation from "@/components/Navigation"
import MenuOverlay from "@/components/Navigation/MenuOverlay"
import HomePage from "@/pages/Home"
import ProjectPage from "@/pages/Project"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import "@/styles/animations.css"

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
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-zinc-800/50 px-6 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-around">
            {[
              { label: "Home", href: "/", icon: "Home" },
              { label: "Work", href: "/#work", icon: "Briefcase" },
              { label: "About", href: "/#about", icon: "User" },
              { label: "Contact", href: "/#contact", icon: "Mail" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors min-h-[44px] justify-center px-2"
              >
                <span className="text-base">{item.label === "Home" ? "🏠" : item.label === "Work" ? "💼" : item.label === "About" ? "👤" : "✉️"}</span>
                <span className="text-[10px] font-medium tracking-wider uppercase">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}

export default App
