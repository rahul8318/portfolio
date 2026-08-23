import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onMenuToggle: (open: boolean) => void
  menuOpen: boolean
}

function Navigation({ onMenuToggle, menuOpen }: NavigationProps) {
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
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/50" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <Link
          to="/"
          className="group text-xs md:text-sm font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="relative">
            Rahul Kumar
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <span className="hidden md:block text-xs text-zinc-500 tracking-[0.15em]">
            {new Date().getFullYear()}
          </span>
          <button
            onClick={() => onMenuToggle(!menuOpen)}
            className="group flex items-center justify-center gap-2 w-11 h-11 md:w-auto md:h-auto text-zinc-100 text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase hover:text-blue-400 transition-colors"
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

      {!scrolled && !menuOpen && (
        <div className="hidden md:flex justify-center gap-6 md:gap-8 pb-3 md:pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="group relative text-[10px] md:text-xs text-zinc-500 hover:text-white transition-colors tracking-[0.15em] uppercase min-h-[32px] flex items-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
