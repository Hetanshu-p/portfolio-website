import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  mes,
  ericsson,
  mist, 
  jobit,
  python,
  java,
  c,
  sql,
  tensorflow,
  bash,
  nexDerm, 
  tennisGame
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML/AI Developer",
    icon: creator,
  },
];

const technologies = [
    {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Bash Scripting",
    icon: bash,
  }, 
  {
    name: "TensorFlow",
    icon: tensorflow,
  }, 
];

const experiences = [
  {
    title: "Test Environment Developer Coop",
    company_name: "Ericsson",
    icon: ericsson,
    iconBg: "#383E56",
    date: "May 2024 - August 2025",
    points: [
      "Designed and maintained Java-based test automation tools with CI/CD pipelines and OOP patterns for scalable, maintainable frameworks.",
      "Executed functional and regression tests on 4G/5G radios and baseband hardware, including configuration and moshell scripting",
      "Built ML models on 50,000+ logs to predict test runtimes, optimizing features and evaluating models for accurate results.",
      "Worked with international teams across multiple time zones, resolving high-priority tickets and supporting 100+ verifiers worldwide.",
    ],
  },
  {
    title: "Software Specialist",
    company_name: "McMaster Interedisciplinary Satellite Team",
    icon: mist,
    iconBg: "#E6DEDD",
    date: "July 2022 - October 2024",
    points: [
      "Organized and documented a 20,000+ line codebase to improve long-term structure and developer efficiency.",
      "Created clear, contributor-friendly project documentation using Sphinx.",
      "Built Flask backend services to support fast and reliable communication in satellite testing workflows.",
      "Worked with multidisciplinary engineers to integrate software with satellite hardware for dependable system testing.",
    ],
  },
  {
    title: "CS Department Representative",
    company_name: "MacEng Society",
    icon: mes,
    iconBg: "#383E56",
    date: "September 2022 - September 2023",
    points: [
      "Represented Computer Science students by collecting feedback and bringing concerns to faculty and MacEng leadership.",
      "Helped plan and support academic, professional, and social events to improve student engagement.",
      "Communicated key updates, resources, and opportunities to keep students informed",
      "Worked with other department reps to coordinate initiatives and enhance the overall MacEng student experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NexDerm - Dermatology Diagnosis AI",
    description:
      "AI-powered dermatology support platform that lets users upload or capture skin images for instant analysis, offering early condition detection and connecting them with nearby dermatologists for timely care.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "Postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: nexDerm,
    source_code_link: "https://github.com/NexSpend/NexDerm",
  },
  {
    name: "HOMA - Homework Math Assistant",
    description:
      "Interactive math assistant that converts spoken word problems into text, automatically calculates solutions, and currently supports revenue optimization and interest problems, with more capabilities coming as the system evolves.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/OmPatel03/HOMA",
  },
  {
    name: "Tennis Game",
    description:
      "Browser-based tennis game built with JavaScript, created as a first introduction to the language during the early pandemic, showcasing interactive gameplay and foundational programming skills.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tennisGame,
    source_code_link: "https://github.com/Hetanshu-p/Tennis-game-in-Javascript",
  },
];

export { services, technologies, experiences, testimonials, projects };
