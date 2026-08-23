import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navigation({ onMenuToggle, menuOpen }: { onMenuToggle: (open: boolean) => void; menuOpen: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WORK", href: "/#work" },
    { label: "ABOUT", href: "/#about" },
    { label: "EXPERIENCE", href: "/#experience" },
    { label: "SKILLS", href: "/#skills" },
    { label: "CONTACT", href: "/#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "glass border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 py-4 md:py-5 max-w-7xl mx-auto">
        <Link
          to="/"
          className="group text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-text-primary hover:text-accent transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="relative">
            Rahul Kumar
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => onMenuToggle(!menuOpen)}
            className="group flex items-center justify-center gap-2 w-10 h-10 md:w-auto md:h-auto text-sm font-medium tracking-[0.15em] uppercase text-text-primary hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative w-5 h-4 flex flex-col justify-between">
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-full h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </span>
            <span className="hidden md:inline">{menuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation