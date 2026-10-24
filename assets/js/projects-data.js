/**
 * Professional Portfolio Data for Jevin Sachaniya
 * Recruiter-Friendly, Honest, and Factual Data
 */

const portfolioData = {
  personal: {
    name: "Jevin Sachaniya",
    title: "Software Developer",
    subtitle: "Web Applications & API Development",
    currentRole: "Junior Software Developer at PHP Infosec",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 9016097957",
    email: "jevinsachaniya@gmail.com",
    linkedin: "https://www.linkedin.com/in/jevinsachaniya-dev/",
    livePortfolio: "https://jevin.aliveradar.com",
    
    heroBio: "I'm a Software Developer with hands-on experience in web application development, software maintenance, debugging, and REST API integration. I work with Vue.js, Vuetify, JavaScript, Python, FastAPI, and database-driven applications to build and maintain reliable software solutions. I enjoy solving technical problems, improving application functionality, and turning ideas into practical software products.",
    
    aboutBio: [
      "I'm a Software Developer and B.Voc (Information Technology) student with practical experience in developing, maintaining, and improving web applications.",
      "Currently, I work as a Junior Software Developer at PHP Infosec, where I contribute to existing applications through bug fixing, feature improvements, frontend development, and API-related tasks.",
      "My technical experience includes Vue.js, Vuetify, JavaScript, Python, FastAPI, SQL, and REST APIs. I enjoy understanding how applications work behind the scenes, investigating issues, and developing solutions that improve functionality and reliability.",
      "Alongside my professional work, I build personal projects to strengthen my technical skills and apply my knowledge to real-world problems. One such project is AliveRadar, a website uptime monitoring platform.",
      "I believe in continuous learning, writing maintainable code, and building software that solves practical problems."
    ],

    education: {
      degree: "Bachelor of Vocation (B.Voc) in Information Technology",
      institution: "Silver Oak University, Ahmedabad, Gujarat, India",
      description: "Currently pursuing my degree in Information Technology while gaining practical software development experience through professional work and personal projects."
    }
  },

  // Factual Professional Highlights (No fake/arbitrary metrics)
  highlights: [
    {
      label: "Current Role",
      value: "Junior Software Developer",
      detail: "PHP Infosec",
      icon: "fa-solid fa-briefcase"
    },
    {
      label: "Specialization",
      value: "Web Apps & REST APIs",
      detail: "Vue.js & Python FastAPI",
      icon: "fa-solid fa-code"
    },
    {
      label: "Flagship Project",
      value: "AliveRadar",
      detail: "Uptime Monitoring Platform",
      icon: "fa-solid fa-satellite-dish"
    }
  ],

  // Single Flagship Project: AliveRadar
  project: {
    id: "aliveradar",
    title: "AliveRadar — Website Uptime Monitoring Platform",
    tagline: "Website Uptime Monitoring Platform",
    subtitle: "Personal Project",
    category: "Website Uptime Monitoring Platform",
    image: "./aliveradar.png",
    description: "AliveRadar is a website monitoring platform designed to help website owners check website availability and identify potential downtime.",
    problem: "Website owners need a convenient way to check whether their websites are reachable and identify availability issues.",
    features: [
      "Website URL monitoring",
      "Website availability status",
      "Response-time monitoring, where implemented",
      "Monitoring history and diagnostic information, where implemented"
    ],
    role: "Designed and developed AliveRadar as a personal project, working on frontend development, backend functionality, and deployment.",
    contributions: [
      "Designed and developed AliveRadar as a personal project, working on frontend development, backend functionality, and deployment."
    ],
    tags: ["React", "Python", "Docker", "Nginx"],
    liveUrl: "https://aliveradar.com"
  },

  // Services / What I Do
  services: [
    {
      title: "Frontend Development",
      desc: "Developing and modifying responsive user interfaces using Vue.js, Vuetify, JavaScript, HTML5, and CSS3.",
      icon: "fa-solid fa-desktop",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Backend & API Development",
      desc: "Building and testing REST API endpoints with Python and FastAPI, handling requests, responses, and data processing.",
      icon: "fa-solid fa-server",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Software Maintenance & Debugging",
      desc: "Investigating existing codebases, diagnosing runtime issues, troubleshooting frontend-backend interactions, and fixing bugs.",
      icon: "fa-solid fa-wrench",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Database Operations",
      desc: "Executing SQL queries, designing database-driven workflows, data filtering, and working with SQLAlchemy ORM.",
      icon: "fa-solid fa-database",
      color: "bg-emerald-50 text-emerald-600"
    }
  ],

  // 4 Organized Skill Categories (Honest, No fake percentages)
  skillCategories: [
    {
      category: "Frontend Development",
      icon: "fa-solid fa-code",
      color: "text-purple-600",
      skills: ["Vue.js", "Vuetify", "JavaScript", "HTML5", "CSS3", "Responsive Web Design"]
    },
    {
      category: "Backend Development",
      icon: "fa-solid fa-server",
      color: "text-blue-600",
      skills: ["Python", "FastAPI", "REST API Development", "API Integration", "Request & Response Handling", "Data Processing"]
    },
    {
      category: "Database",
      icon: "fa-solid fa-database",
      color: "text-emerald-600",
      skills: ["SQL", "Database Queries", "Database-Driven Applications", "SQLAlchemy ORM"]
    },
    {
      category: "Tools & Development Practices",
      icon: "fa-solid fa-screwdriver-wrench",
      color: "text-indigo-600",
      skills: ["Git & GitHub", "Debugging & Troubleshooting", "Bug Fixing", "Software Maintenance", "API Testing & Documentation", "Docker & Nginx Exposure"]
    }
  ],

  // Tech Logos
  techLogos: [
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
    { name: "Vuetify", icon: "fa-solid fa-layer-group", color: "#1867c0" },
    { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
    { name: "FastAPI", icon: "fa-solid fa-bolt", color: "#009688" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#eab308" },
    { name: "SQL", icon: "fa-solid fa-database", color: "#0284c7" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ed" },
    { name: "Nginx", icon: "fa-solid fa-server", color: "#009639" }
  ],

  // Core Competencies
  coreCompetencies: [
    "Web Application Development",
    "Software Maintenance & Bug Fixing",
    "Frontend Development with Vue.js",
    "REST API Development & Integration",
    "Database-Driven Functionality",
    "Python & FastAPI Programming",
    "Debugging & Code Investigation",
    "Deployment with Docker & Nginx",
    "Clean & Maintainable Code"
  ],

  // Professional Experience at PHP Infosec
  experience: {
    role: "Junior Software Developer",
    company: "PHP Infosec",
    location: "Ahmedabad, Gujarat, India",
    startDate: "2026-03-01",
    period: "March 2026 – Present",
    type: "Current Employment",
    description: "Working on web application development, maintenance, bug fixing, and API-related functionality.",
    responsibilities: [
      "Debug and resolve issues in existing web applications.",
      "Maintain and improve frontend interfaces using Vue.js and Vuetify.",
      "Work with REST APIs for frontend and backend communication.",
      "Contribute to Python FastAPI endpoints for database-driven data retrieval and processing.",
      "Process and filter database records to provide structured responses to frontend applications.",
      "Collaborate with team members to understand requirements and improve existing functionality."
    ],
    technologies: ["Vue.js", "Vuetify", "JavaScript", "Python", "FastAPI", "SQL", "REST APIs"]
  },

  // 5 Process Steps
  processSteps: [
    {
      step: "01",
      title: "Discover",
      desc: "Understanding requirements, analyzing user flows, and investigating software issues."
    },
    {
      step: "02",
      title: "Plan",
      desc: "Outlining API endpoints, data flow, component hierarchy, and database structures."
    },
    {
      step: "03",
      title: "Design",
      desc: "Structuring clean, reusable frontend components and modular backend functions."
    },
    {
      step: "04",
      title: "Develop",
      desc: "Writing reliable, readable code following web development standards and best practices."
    },
    {
      step: "05",
      title: "Maintain",
      desc: "Testing functionality, deploying updates, and providing continuous software maintenance."
    }
  ]
};
