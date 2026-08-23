import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Marquee from "@/components/Marquee"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Playground from "@/components/Playground"
import Education from "@/components/Education"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

type Easing = [number, number, number, number]
const easeOut: Easing = [0.76, 0, 0.24, 1]

function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const isAboutInView = useInView(aboutRef, { once: true })

  return (
    <div className="relative">
      <Hero />

      <Marquee text="FULL STACK DEVELOPER • MERN STACK • REACT • NODE • MONGODB • BUILD • SHIP • ITERATE" />

      <div ref={aboutRef}>
        <About />
      </div>

      <Marquee text="EXPERIENCE • DUCAT • INTERNSHIP • FULL STACK • REACT • NODE • EXPRESS" reverse speed={40} />

      <Experience />

      <Marquee text="SKILLS • REACT • NODE • MONGODB • JAVA • DSA • GIT • GITHUB" speed={35} />

      <Skills />

      <Projects />

      <Playground />

      <Education />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  )
}

export default HomePage
