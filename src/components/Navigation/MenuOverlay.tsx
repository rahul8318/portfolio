import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
          initial={{ clipPath: "circle(0% at calc(100% - 28px) 28px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 28px) 28px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 28px) 28px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <button
            onClick={onClose}
            className="group absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="flex flex-col items-center gap-4 md:gap-6">
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
                  className="group relative text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary hover:text-accent transition-colors duration-300 min-h-[48px] flex items-center tracking-wide"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-text-muted tracking-[0.15em] uppercase tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://github.com/rahul8318" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-text-primary transition-colors min-h-[32px]">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-accent group-hover:scale-150 transition-all" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/rahul-kumar-b0b8b733b" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover:text-text-primary transition-colors min-h-[32px]">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-accent group-hover:scale-150 transition-all" />
                LinkedIn
              </a>
              <a href="mailto:krahul89kumar@gmail.com" className="group flex items-center gap-2 hover:text-text-primary transition-colors min-h-[32px]">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-accent group-hover:scale-150 transition-all" />
                Email
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuOverlay
