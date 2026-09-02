export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  problem: string
  features: string[]
  challenge: string
  approach: string
  result: string
  stack: string[]
  liveUrl: string
  githubUrl?: string
  image: string
  color: string
  index: number
  featured: boolean
  // Team project fields
  teamProject?: boolean
  role?: string
  contribution?: string[]
}

export const projects: Project[] = [
  {
    id: "prepforge",
    slug: "prepforge",
    title: "PrepForge",
    subtitle: "Interview Preparation Platform",
    description: "A modern preparation platform helping students and developers prepare smarter for coding, technical, and HR interviews with curated resources and intelligent practice tools.",
    longDescription: "PrepForge is a comprehensive interview preparation platform designed to help students and developers prepare smarter for coding, technical, and HR interviews. It provides an organized environment for practice, revision, and performance tracking, combining modern UI with functional learning tools.",
    problem: "Students preparing for technical interviews struggle with scattered resources, inconsistent practice routines, and lack of structured progress tracking across coding, technical, and HR rounds.",
    features: [
      "Curated preparation resources organized by topic and interview type",
      "Practice sessions for coding, technical, and HR interviews",
      "Progress analytics and study streaks",
      "Clean, distraction-free study interface",
      "Responsive design for all devices",
      "Fast, optimized performance for long study sessions",
    ],
    challenge: "Creating a platform that is both feature-rich and uncluttered, ensuring students can focus without cognitive overload while covering multiple interview formats.",
    approach: "Built with React and modern frontend practices, focusing on component reusability, fast rendering, and a design system that scales across different preparation modules.",
    result: "A production-ready preparation platform deployed on Vercel with smooth UX and real-time interactivity.",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    liveUrl: "https://prep-project-frontend.vercel.app/",
    image: "",
    color: "#3b82f6",
    index: 1,
    featured: true,
  },
  {
    id: "ddjc",
    slug: "ddjc",
    title: "Dalit Dignity & Justice Center",
    subtitle: "Real-World Community Platform",
    description: "Worked as a Backend Developer on a real-world team project for the Dalit Dignity & Justice Center (DDJC), contributing to backend architecture, APIs, database integration, data management, and administrative functionality for a platform focused on justice, rights, community engagement, and access to resources.",
    longDescription: "The Dalit Dignity & Justice Center (DDJC) is a real-world platform focused on justice, dignity, constitutional rights, community support, legal assistance, youth leadership, resources, and connecting communities with relevant services and opportunities. I contributed to DDJC as a Backend Developer, building the server-side foundation of the platform alongside other team members.",
    problem: "Communities need a centralized, trustworthy digital platform to access legal resources, raise concerns, and connect with support services — while organizations need a reliable backend to manage data, content, and engagement at scale.",
    features: [
      "Backend API architecture and endpoint design",
      "Database schema design and MongoDB integration",
      "CRUD operations for content, resources, and user data",
      "Server-side validation and structured error handling",
      "Form submission processing and data persistence",
      "Admin-side data management endpoints",
      "Frontend–backend integration across modules",
      "Deployment and production backend configuration",
    ],
    challenge: "Designing a reliable backend that supports diverse content types, handles real user submissions, and integrates cleanly with the frontend — while working as part of a team with clearly scoped backend responsibilities.",
    approach: "Built with Node.js and Express.js, structured around RESTful API endpoints and a well-defined MongoDB schema. Focused on clean request/response handling, validation, and predictable data flow that the frontend team could integrate against.",
    result: "A production-deployed real-world platform serving the DDJC community, with a stable backend supporting content, resources, and administrative workflows.",
    stack: ["Node.js", "Express.js", "MongoDB", "REST API", "JavaScript"],
    liveUrl: "https://www.ddjc.org.in/",
    image: "",
    color: "#a855f7",
    index: 2,
    featured: true,
    teamProject: true,
    role: "Backend Developer",
    contribution: [
      "Designed and developed backend APIs using Node.js and Express.js",
      "Implemented RESTful API endpoints for core platform modules",
      "Designed MongoDB schemas and managed data persistence",
      "Implemented CRUD operations across resources and user content",
      "Handled form submissions and server-side data processing",
      "Built admin-side data management endpoints",
      "Added server-side validation and structured error handling",
      "Integrated backend services with the frontend application",
      "Collaborated with frontend developers and other team members",
      "Assisted with deployment and production backend configuration",
    ],
  },
  {
    id: "wanderlust",
    slug: "wanderlust",
    title: "Wanderlust",
    subtitle: "Apartment Booking Platform",
    description: "A full-stack apartment booking platform inspired by Airbnb, featuring property listings, image uploads, reviews, and booking management.",
    longDescription: "Wanderlust is a comprehensive full-stack web application that replicates the core experience of a modern property rental platform. Users can browse listings, manage bookings, write reviews, and hosts can manage their properties.",
    problem: "Finding and booking unique accommodations requires a seamless, trustworthy, and visually appealing platform experience.",
    features: [
      "User authentication and authorization",
      "Property listing creation and management",
      "Image upload and gallery management",
      "Booking system with date selection",
      "Review and rating system for properties",
      "RESTful API architecture with Express.js",
      "Responsive design with Bootstrap and custom CSS",
      "MongoDB for scalable data storage",
    ],
    challenge: "Building a full-stack application with proper authentication, data relationships, and a responsive UI that feels production-ready.",
    approach: "Used React for the frontend with reusable components, Node.js + Express for the backend API, and MongoDB for the database. Implemented RESTful endpoints for all core operations.",
    result: "A fully functional MERN stack application demonstrating end-to-end full-stack development capabilities.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    liveUrl: "",
    githubUrl: "https://github.com/rahul8318",
    image: "",
    color: "#f59e0b",
    index: 3,
    featured: true,
  },
  {
    id: "zerodha-clone",
    slug: "zerodha",
    title: "Zerodha Clone",
    subtitle: "Stock Trading Platform",
    description: "A responsive stock trading platform dashboard inspired by Zerodha, featuring portfolio management, market data display, and trading interfaces.",
    longDescription: "A full-stack clone of the popular Indian stock trading platform Zerodha, featuring a responsive dashboard, portfolio tracking, and a clean trading interface built with the MERN stack.",
    problem: "Trading platforms need to present complex financial data in an intuitive, real-time interface while maintaining performance and security.",
    features: [
      "Responsive trading dashboard",
      "Portfolio management and holdings view",
      "Stock price display and tracking UI",
      "Authentication system",
      "RESTful API backend with Express.js",
      "Reusable React component architecture",
      "MongoDB for data persistence",
      "Scalable project structure",
    ],
    challenge: "Replicating a complex financial UI while maintaining code quality, responsiveness, and a clean architecture.",
    approach: "Built with React for a component-based UI, Node.js + Express for scalable backend services, and MongoDB for data storage. Focused on clean code and reusable patterns.",
    result: "A visually accurate clone demonstrating proficiency in React component architecture and full-stack API design.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/rahul8318",
    image: "",
    color: "#10b981",
    index: 4,
    featured: true,
  },
]

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)
