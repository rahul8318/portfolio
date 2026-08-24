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
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          Rahul Kumar
        </Link>

        <div className="nav-right">
          <span className="nav-year">{new Date().getFullYear()}</span>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => onMenuToggle(!menuOpen)}
            className="nav-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="nav-menu-btn-icon">
              {menuOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
            </span>
            <span className="nav-menu-btn-text">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
