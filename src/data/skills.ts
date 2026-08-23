export interface SkillCategory {
  id: string
  name: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level?: number
  color?: string
}

export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "⬡",
    skills: [
      { name: "React.js", level: 90, color: "#61dafb" },
      { name: "Tailwind CSS", level: 85, color: "#38bdf8" },
      { name: "Bootstrap", level: 80, color: "#7952b3" },
      { name: "HTML5", level: 95, color: "#e34f26" },
      { name: "CSS3", level: 90, color: "#1572b6" },
      { name: "Responsive Design", level: 85, color: "#f59e0b" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "◈",
    skills: [
      { name: "Node.js", level: 85, color: "#339933" },
      { name: "Express.js", level: 85, color: "#000000" },
      { name: "REST APIs", level: 90, color: "#3b82f6" },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: "▣",
    skills: [
      { name: "MongoDB", level: 85, color: "#47a248" },
      { name: "MySQL", level: 75, color: "#4479a1" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    icon: "⌘",
    skills: [
      { name: "JavaScript", level: 90, color: "#f7df1e" },
      { name: "Java", level: 80, color: "#ed8b00" },
      { name: "C++", level: 75, color: "#00599c" },
    ],
  },
  {
    id: "core",
    name: "Core CS",
    icon: "✦",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, color: "#3b82f6" },
      { name: "Object-Oriented Programming", level: 85, color: "#10b981" },
      { name: "DBMS", level: 80, color: "#f59e0b" },
      { name: "Operating Systems", level: 75, color: "#8b5cf6" },
      { name: "Computer Networks", level: 75, color: "#ef4444" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "⚙",
    skills: [
      { name: "Git", level: 85, color: "#f05032" },
      { name: "GitHub", level: 90, color: "#ffffff" },
      { name: "VS Code", level: 95, color: "#007acc" },
      { name: "Eclipse", level: 70, color: "#2c2255" },
      { name: "Postman", level: 80, color: "#ff6c37" },
    ],
  },
]
