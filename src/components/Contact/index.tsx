import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { personalInfo } from "../../data/personal"
import { Mail, Phone } from "lucide-react"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: "Phone" },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 px-5 md:px-6 lg:px-8" ref={ref} style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOut }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get In Touch
          </p>

          <h2
            className="font-bold leading-[0.9] mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.04em",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
            }}
          >
            Let's Build
            <br />
            Something{" "}
            <span className="text-blue-500">Great.</span>
          </h2>

          <p className="text-zinc-300 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base lg:text-lg leading-relaxed">
            I'm always open to new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello,
            feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative w-full sm:w-auto px-7 py-3.5 md:px-8 md:py-4 bg-white text-black text-sm font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all duration-500 inline-flex items-center justify-center gap-3 min-h-[48px] overflow-hidden"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Mail size={18} className="md:w-5 md:h-5" />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-300 hover:text-white transition-colors text-base md:text-lg break-all min-h-[48px] flex items-center justify-center px-4"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 mt-10 md:mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs md:text-sm text-zinc-300 hover:text-white transition-colors tracking-widest uppercase min-h-[40px] px-3 py-2 rounded-full hover:bg-zinc-900/50"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <link.icon size={16} className="group-hover:text-blue-400 transition-colors" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact