/**
 * Updated Portfolio Data for Jevin Sachaniya
 * With Phone Number, Updated Gmail, and Git Details Removed
 */

const portfolioData = {
  personal: {
    name: "Jevin Sachaniya",
    title: "Software Developer",
    subtitle: "Web Application Development | Backend & API Development",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 9016097957",
    email: "jevinsachaniya@gmail.com",
    linkedin: "https://www.linkedin.com/in/jevinsachaniya-dev/",
    intro: "I am a Software Developer with hands-on experience in web application development, software maintenance, debugging, and API integration. I work with modern web technologies to develop functional, reliable, and maintainable software solutions.",
    extendedIntro: "My technical experience includes Vue.js, Vuetify, JavaScript, Python, FastAPI, and database-driven application development. I enjoy solving technical challenges, improving application functionality, and building software that delivers practical value to users.",
    passion: "I am passionate about writing clean code, improving system performance, and developing scalable applications through effective problem-solving and continuous technical improvement.",
    professionalSummary: "Software Developer experienced in maintaining web applications, troubleshooting software issues, implementing frontend improvements, and working with API-driven functionality. Familiar with frontend development, backend programming, database operations, and application deployment. Experienced in working with existing codebases, understanding application workflows, resolving bugs, and implementing functional enhancements. Interested in building efficient, maintainable, and user-focused software solutions using modern development technologies.",
    professionalObjective: "To contribute to software development teams by building reliable web applications, developing backend services, solving technical challenges, and improving existing systems. I aim to apply my development experience and technical skills to create maintainable, efficient, and scalable software solutions while contributing to meaningful business outcomes.",
    education: {
      degree: "Bachelor of Vocation (B.Voc) — Information Technology",
      institution: "Silver Oak University, Ahmedabad, Gujarat, India",
      status: "Currently pursuing a bachelor's degree in Information Technology"
    }
  },

  stats: [
    { value: "2+", label: "Years Experience", icon: "fa-regular fa-clock" },
    { value: "Flagship", label: "AliveRadar.com", icon: "fa-solid fa-satellite-dish" },
    { value: "PHP Infosec", label: "Industry Role", icon: "fa-regular fa-building" }
  ],

  // Single Flagship Project: AliveRadar
  project: {
    id: "aliveradar",
    title: "AliveRadar — Website Uptime Monitoring Platform",
    tagline: "Every Page, On Your Radar",
    subtitle: "Real-time Website Uptime, Latency Tracking & Incident Investigation",
    category: "Flagship Web Application",
    image: "./aliveradar.png",
    description: "AliveRadar is a website monitoring platform designed to help website owners check website availability, track response times, receive downtime alerts, publish status pages, and check SSL & DNS health in one unified place.",
    problem: "Website owners need a convenient, reliable way to check whether their websites and services are responding and investigate availability problems in real time before users are impacted.",
    features: [
      "Website URL submission for continuous automated monitoring",
      "Real-time website availability checks and response latency graphs",
      "Automated downtime detection, alert logs, and recovery notification",
      "SSL certificate and DNS health validation",
      "Public status pages to share real-time service health with users"
    ],
    contributions: [
      "Engineered frontend interfaces and backend monitoring communication",
      "Configured containerized application deployment with Docker and Nginx",
      "Implemented API endpoints for health status logs and latency tracking",
      "Worked on request routing and uptime telemetry workflows"
    ],
    tags: ["React", "Python", "Docker", "Nginx", "REST API", "Uptime Monitoring"],
    liveUrl: "https://aliveradar.com/"
  },

  // 4 Services (What I Do)
  services: [
    {
      title: "Frontend Development",
      desc: "Developing and modifying responsive user interfaces using Vue.js, Vuetify, JavaScript, HTML5, and CSS3.",
      icon: "fa-solid fa-desktop",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Backend & API Engineering",
      desc: "FastAPI, Flask, REST API development, request/response validation, data processing, and API integration.",
      icon: "fa-solid fa-server",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Software Maintenance",
      desc: "Identifying, troubleshooting, and resolving bugs across application components and existing codebases.",
      icon: "fa-solid fa-wrench",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Database Integration",
      desc: "SQL database queries, database-driven application persistence, data filtering, and SQLAlchemy ORM.",
      icon: "fa-solid fa-database",
      color: "bg-emerald-50 text-emerald-600"
    }
  ],

  // Skills Overview
  skillBars: [
    { name: "Vue.js & Vuetify", percent: 90 },
    { name: "Python & FastAPI", percent: 88 },
    { name: "REST API & Integration", percent: 92 },
    { name: "SQL & SQLAlchemy ORM", percent: 84 },
    { name: "JavaScript / HTML5 / CSS3", percent: 90 },
    { name: "Debugging & Maintenance", percent: 92 }
  ],

  // Tech Logos (Git removed)
  techLogos: [
    { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },
    { name: "FastAPI", icon: "fa-solid fa-bolt", color: "#009688" },
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "#eab308" },
    { name: "SQL", icon: "fa-solid fa-database", color: "#0284c7" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ed" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
    { name: "Nginx", icon: "fa-solid fa-server", color: "#009639" },
    { name: "REST API", icon: "fa-solid fa-network-wired", color: "#7c3aed" }
  ],

  // Core Competencies
  coreCompetencies: [
    "Software Development and Maintenance",
    "Debugging and Troubleshooting",
    "Frontend Application Development",
    "Backend API Development",
    "Database-Driven Applications",
    "REST API Integration",
    "Problem-Solving and Logical Thinking",
    "Application Deployment",
    "Code Readability and Maintainability"
  ],

  // Professional Experience
  experience: {
    role: "Junior Software Developer",
    company: "PHP Infosec",
    location: "Ahmedabad, Gujarat, India",
    points: [
      "Maintain and enhance existing web applications to support business requirements and application functionality.",
      "Identify, troubleshoot, and resolve software bugs across application components.",
      "Develop and modify frontend interfaces using Vue.js and Vuetify.",
      "Implement UI improvements, form functionality, dialog interactions, and conditional rendering.",
      "Work with API-driven data and frontend-backend communication.",
      "Assist with database-related operations and data processing within application workflows.",
      "Analyze existing codebases to understand application behavior and implement changes effectively.",
      "Support application reliability through debugging, testing, and maintenance activities."
    ],
    technologies: ["Vue.js", "Vuetify", "JavaScript", "REST APIs", "SQL", "HTML5/CSS3"]
  },

  // 5 Process Steps
  processSteps: [
    {
      step: "01",
      title: "Discover",
      desc: "Understanding requirements, reviewing workflows, and analyzing software issues."
    },
    {
      step: "02",
      title: "Plan",
      desc: "Researching architecture, API endpoints, and database schemas."
    },
    {
      step: "03",
      title: "Design",
      desc: "Structuring clean UI components and maintainable backend logic."
    },
    {
      step: "04",
      title: "Develop",
      desc: "Writing reliable, responsive, and performance-optimized code."
    },
    {
      step: "05",
      title: "Deliver",
      desc: "Testing, verification, deployment, and ongoing software maintenance."
    }
  ]
};
