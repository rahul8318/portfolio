export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  endDate: string
  type: "undergraduate" | "diploma" | "high-school"
  cgpa?: string
}

export const education: Education[] = [
  {
    id: "mmmmut",
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    institution: "Madan Mohan Malaviya University of Technology",
    location: "Gorakhpur, Uttar Pradesh",
    startDate: "2025",
    endDate: "Present",
    type: "undergraduate",
    cgpa: "8.5/10",
  },
  {
    id: "gps",
    degree: "Diploma",
    field: "Computer Science and Engineering",
    institution: "Government Polytechnic, Saharanpur",
    location: "Saharanpur, Uttar Pradesh",
    startDate: "2022",
    endDate: "2025",
    type: "diploma",
  },
  {
    id: "rmsgic",
    degree: "High School",
    field: "Science Stream",
    institution: "Ram Milan Salikram G. Inter College",
    location: "Sultanpur, Uttar Pradesh",
    startDate: "2020",
    endDate: "2020",
    type: "high-school",
  },
]

export const certifications = [
  {
    id: "java-cert",
    title: "Java Programming",
    issuer: "Apna College",
    year: "2024",
  },
  {
    id: "fsd-cert",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    year: "2024",
  },
]
