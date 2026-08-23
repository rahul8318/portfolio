export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  startDate: string
  endDate: string
  type: "internship" | "full-time" | "part-time" | "freelance"
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: "ducat-internship",
    role: "Full Stack Development Intern",
    company: "Ducat India",
    location: "India",
    startDate: "August 2024",
    endDate: "February 2025",
    type: "internship",
    description:
      "Gained hands-on experience in full-stack web development, building real-world applications using modern technologies and industry best practices.",
    responsibilities: [
      "Developed responsive web applications using React.js, Node.js and Express.js",
      "Built RESTful APIs with proper error handling and validation",
      "Integrated MongoDB for efficient data storage and retrieval",
      "Worked with Git and GitHub for version control and collaboration",
      "Improved debugging and backend development skills through real projects",
      "Worked on API integration with third-party services",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git", "GitHub"],
  },
]
