/**
 * Professional Portfolio Data for Jevin Sachaniya
 * Recruiter-Friendly, Honest, Factual, and Production-Ready
 */

const portfolioData = {
  personal: {
    name: "Jevin Sachaniya",
    title: "Junior Software Developer",
    headline: "Junior Software Developer | Web Applications & API Development",
    subtitle: "Web Applications & API Development",
    currentRole: "Junior Software Developer at PHP Infosec",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 9016097957",
    email: "jevinsachaniya@gmail.com",
    github: "https://github.com/jevinsachaniya",
    linkedin: "https://www.linkedin.com/in/jevinsachaniya-dev/",
    livePortfolio: "https://jevin.aliveradar.com",
    
    heroBio: "I'm a Junior Software Developer with hands-on experience in web application development, software maintenance, debugging, and REST API integration. I work with Vue.js, Vuetify, JavaScript, Python, FastAPI, and database-driven applications to build and maintain reliable software solutions.",
    
    heroSecondaryBio: "I enjoy solving technical problems, improving application functionality, and turning ideas into practical software products.",
    
    aboutBio: [
      "I'm a Junior Software Developer and B.Voc (Information Technology) student with practical experience in developing, maintaining, and improving web applications.",
      "Currently, I work as a Junior Software Developer at PHP Infosec, where I contribute to existing applications through bug fixing, feature improvements, frontend development, and API-related tasks.",
      "My technical experience includes Vue.js, Vuetify, JavaScript, Python, FastAPI, SQL, and REST APIs. I enjoy understanding how applications work behind the scenes, investigating issues, and developing solutions that improve functionality and reliability.",
      "Alongside my professional work, I build personal projects to strengthen my technical skills and apply my knowledge to real-world problems. One such project is AliveRadar, a website uptime monitoring platform.",
      "I believe in continuous learning, writing maintainable code, and building software that solves practical problems."
    ],

    education: {
      degree: "Bachelor of Vocation (B.Voc) in Information Technology",
      institution: "Silver Oak University, Ahmedabad, Gujarat, India",
      period: "2025 – 2028",
      description: "Currently pursuing my degree in Information Technology while gaining practical software development experience through professional work and personal projects.",
      history: [
        {
          level: "College",
          course: "Bachelor of Vocation (B.Voc) in Information Technology",
          institution: "Silver Oak University, Ahmedabad",
          period: "2025 – 2028",
          status: "Undergraduate",
          details: "Focused on core computing, database management, software engineering, and modern web application development."
        },
        {
          level: "STD 12th Detail",
          stream: "Commerce",
          institution: "Shree Lakshminarayan Dev Secondary and High-Secondary School - Lathidad",
          period: "Feb – March 2025",
          percentage: "72%",
          details: "Completed Higher Secondary School Certificate (HSC) in Commerce stream with 72% marks."
        },
        {
          level: "STD 10th Detail",
          institution: "Shree Swaminarayan Ghia Gurukul School - Tatam",
          period: "March 2023",
          percentage: "73%",
          details: "Completed Secondary School Certificate (SSC) with 73% marks."
        }
      ]
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

  // Flagship Project: AliveRadar (Genuine Implemented Features)
  project: {
    id: "aliveradar",
    title: "AliveRadar — Website Uptime Monitoring Platform",
    tagline: "Continuous availability checking & response-time telemetry",
    subtitle: "Personal Web Development Project",
    category: "Website Uptime Monitoring Platform",
    image: "./aliveradar.png",
    liveUrl: "https://aliveradar.com",
    githubUrl: "https://github.com/jevinsachaniya",
    statusBadge: "Live Platform",
    architecture: "Decoupled Architecture: React Single Page Application (SPA) frontend communicating via REST endpoints with a Python asynchronous backend, containerized via Docker and served behind an Nginx reverse proxy.",
    overview: "AliveRadar is a personal web development project designed to help website owners continuously monitor whether their web applications and services are reachable, identify downtime promptly, and track endpoint response latency over time.",
    problem: "Website owners and web developers often lack a simple, dedicated way to verify if their web services are reachable across the clock. Unnoticed downtime leads to degraded user trust and revenue loss. AliveRadar addresses this by automating availability checks and presenting real-time status telemetry.",
    technicalImplementation: "The application architecture separates the frontend presentation layer from the background monitoring engine. The backend sends automated HTTP/HTTPS requests to configured URLs, records HTTP status codes (e.g., 200 OK vs 500/502/404), measures round-trip response latency in milliseconds, and exposes structured REST API endpoints for frontend consumption.",
    implementedFeatures: [
      "Target URL availability and uptime status checks",
      "Response-time and latency measurement",
      "Clean status dashboards with visual health indicators",
      "Containerized deployment configuration using Docker",
      "Reverse proxy routing and SSL termination via Nginx"
    ],
    plannedFeatures: [
      "Multi-region synthetic ping checks",
      "Automated incident alert notifications (Email & Webhook)",
      "Public status pages for transparent uptime reporting"
    ],
    contributions: [
      "Designed and developed the full project lifecycle from architecture to deployment.",
      "Built a modern, responsive user interface using React with clean status cards and intuitive navigation.",
      "Implemented backend availability logic in Python to handle automated endpoint requests and status code parsing.",
      "Configured Docker containers and Nginx reverse proxy routing for consistent production deployment."
    ],
    tags: ["React", "Python", "Docker", "Nginx", "REST APIs"]
  },
  get flagshipProject() {
    return this.project;
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
      desc: "Executing SQL queries, designing database-driven workflows, data filtering, and working with relational tables.",
      icon: "fa-solid fa-database",
      color: "bg-emerald-50 text-emerald-600"
    }
  ],

  // 4 Organized Skill Categories (Zero arbitrary percentages, clear headings)
  skillCategories: [
    {
      category: "Frontend Development",
      icon: "fa-solid fa-code",
      color: "text-purple-600",
      skills: ["Vue.js", "Vuetify", "JavaScript", "HTML5", "CSS3", "React (AliveRadar)", "Responsive Design"]
    },
    {
      category: "Backend & APIs",
      icon: "fa-solid fa-server",
      color: "text-blue-600",
      skills: ["Python", "FastAPI", "Flask", "REST API Development", "API Integration", "Request & Response Handling"]
    },
    {
      category: "Database",
      icon: "fa-solid fa-database",
      color: "text-emerald-600",
      skills: ["SQL", "MySQL", "Database Queries", "Database-Driven Applications", "SQLAlchemy ORM"]
    },
    {
      category: "Tools & Deployment",
      icon: "fa-solid fa-screwdriver-wrench",
      color: "text-indigo-600",
      skills: ["Git & GitHub", "Docker", "Nginx", "Linux CLI", "Postman", "Debugging & Troubleshooting"]
    }
  ],

  // Tech Logos
  techLogos: [
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
    { name: "Vuetify", icon: "fa-solid fa-layer-group", color: "#1867c0" },
    { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
    { name: "FastAPI", icon: "fa-solid fa-bolt", color: "#009688" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#eab308" },
    { name: "SQL / MySQL", icon: "fa-solid fa-database", color: "#0284c7" },
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
      "Debugging and resolving issues in existing web applications.",
      "Developing and maintaining frontend features using Vue.js and Vuetify.",
      "Working with REST APIs, request/response handling, and frontend-backend integration.",
      "Contributing to Python FastAPI endpoints for database data retrieval and processing.",
      "Maintaining and improving database-driven software functionality.",
      "Collaborating on code investigations, feature enhancements, and maintainability improvements."
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
