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
  figma,
  docker,
  mes,
  ericsson,
  mist,
  carrent,
  jobit,
  tripguide,
  python,
  java,
  c,
  sql,
  tensorflow,
  bash,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
