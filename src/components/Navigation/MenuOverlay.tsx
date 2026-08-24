import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { label: "HOME", href: "/", index: 0 },
  { label: "WORK", href: "/#work", index: 1 },
  { label: "ABOUT", href: "/#about", index: 2 },
  { label: "EXPERIENCE", href: "/#experience", index: 3 },
  { label: "SKILLS", href: "/#skills", index: 4 },
  { label: "CONTACT", href: "/#contact", index: 5 },
]

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu-overlay active"
          initial={{ clipPath: "circle(0% at calc(100% - 40px) 30px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 40px) 30px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 40px) 30px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="menu-overlay-content">
            {menuItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1 + item.index * 0.05, duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="menu-link"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="menu-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/rahul8318"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-footer-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rahul-kumar-b0b8b733b"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-footer-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:krahul89kumar@gmail.com"
              className="menu-footer-link"
            >
              Email
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuOverlay
