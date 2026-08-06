type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  youtube?: string
  github?: string
  id: string
}

/**
 * Interface representing a work experience entry.
 */
export interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description?: string
}

/**
 * Interface representing a blog post entry.
 */
export interface BlogPost {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

/**
 * Interface representing a social media link.
 */
export type SocialLink = {
  label: string
  link: string
}

export const PROJECTS_EN: Project[] = [
  {
    name: 'Fitty',
    description:
      'AI-powered cat health tracker estimating Body Condition Score (BCS) from photos. Features voice context analysis, historical trend charts, and personalized recommendations. Built for #HACKTHEKITTY 2026 🐾 Tech Stack: React Native, Supabase, Temporal.io, Claude 5, Whisper & Aikido.',
    link: 'https://fitty-demo.vercel.app',
    image: '/projects/fitty.png',
    github: 'https://github.com/gonzagramaglia/fitty',
    id: 'project_fitty',
  },
  {
    name: 'Truco Mundial',
    description:
      'A fresh take on the classic Argentine card game where the wit of Truco meets the passion of football stickers. Features real-time multiplayer, custom deck building, and Twitch integration for an interactive streaming experience 🏆 Tech Stack: React, TypeScript, Zustand, and Supabase.',
    link: 'https://trucomundial.com/en',
    image: '/projects/truco-mundial.png',
    github: 'https://github.com/gonzagramaglia/trucomundial',
    id: 'project_truco_mundial',
  },
  {
    name: 'Entrenate.net',
    description:
      'A comprehensive training platform designed for fitness tracking, exercise logging, and performance monitoring. Focused on stability, security, and a smooth user experience 💪 Tech Stack: Go, React, and Supabase.',
    link: 'https://entrenate.net/en',
    image: '/projects/entrenate.png',
    github: 'https://github.com/gonzagramaglia/entrenate',
    id: 'project1',
  },
  {
    name: 'Ciberportero.com',
    description:
      'Advanced academic ecosystem and study portal for Cyberdefense students (UNDEF). Features an interactive Kanban roadmap, centralized academic calendar, and local progress persistence 🛡️ Tech Stack: Next.js, Prisma, and NextAuth.',
    link: 'https://ciberportero.com/en',
    image: '/projects/ciberportero.png',
    github: 'https://github.com/gonzagramaglia/ciberportero',
    id: 'project_ciberportero',
  },
  {
    name: 'Vélez Analytics',
    description:
      'An analytical dashboard dedicated to tracking the trajectory, match results, and player statistics of Club Atlético Vélez Sarsfield (better known as \'El Fortín\') 🏟️ Tech Stack: Go, Vite, Astro, and Supabase.',
    link: 'https://github.com/gonzagramaglia/velez',
    image: '/projects/velez.png',
    github: 'https://github.com/gonzagramaglia/velez',
    id: 'project_velez',
  },
  {
    name: 'Healthy Snacks',
    description:
      'E-commerce platform with a custom mix builder and a comprehensive admin panel. Designed to be intuitive and fast, prioritizing a smooth, secure navigation and a modern interface ⚡ Tech Stack: Next.js, TypeScript, and Tailwind.',
    link: 'https://moovimiento.com/en',
    image: '/projects/healthysnacks.png',
    github: 'https://github.com/gonzagramaglia/healthysnacks',
    id: 'project3',
  },
  // {
  //   name: 'Milemojis.com',
  //   description:
  //     'A minimalist emoji picker designed for speed and accessibility. Developed with a focus on clean architecture and UX, featuring custom emojis and bilingual support 😎 Tech Stack: React, TypeScript and Tailwind.',
  //   link: 'https://milemojis.com/en',
  //   image: '/milemojis-com.png',
  //   github: 'https://github.com/gonzagramaglia/emojis',
  //   id: 'project5',
  // },
]

export const PROJECTS_ES: Project[] = [
  {
    name: 'Fitty',
    description:
      'Rastreador de salud felina impulsado por IA que estima el Índice de Condición Corporal (BCS) a partir de fotos. Cuenta con análisis por voz, gráficos históricos y recomendaciones personalizadas. Creado para #HACKTHEKITTY 2026 🐾 Construido con React Native, Supabase, Temporal.io, Claude 5 y Whisper.',
    link: 'https://fitty-demo.vercel.app',
    image: '/projects/fitty.png',
    github: 'https://github.com/gonzagramaglia/fitty',
    id: 'project_fitty',
  },
  {
    name: 'Truco Mundial',
    description:
      'Una nueva versión del clásico juego de cartas argentino donde la picardía del Truco se encuentra con la pasión de las figuritas de fútbol. Cuenta con multijugador en tiempo real, armado de mazos personalizados e integración con Twitch para streamers 🏆 Construido con React, TypeScript, Zustand y Supabase.',
    link: 'https://trucomundial.com/es',
    image: '/projects/truco-mundial.png',
    github: 'https://github.com/gonzagramaglia/trucomundial',
    id: 'project_truco_mundial',
  },
  {
    name: 'Entrenate.net',
    description:
      'Una plataforma integral de entrenamiento diseñada para el seguimiento de rutinas, registro de ejercicios y monitoreo de rendimiento. Enfocada en la estabilidad, la seguridad y una experiencia de usuario fluida 💪 Construido con Go, React y Supabase.',
    link: 'https://entrenate.net',
    image: '/projects/entrenate.png',
    github: 'https://github.com/gonzagramaglia/entrenate',
    id: 'project1',
  },
  {
    name: 'Ciberportero.com',
    description:
      'Ecosistema académico avanzado y portal de estudios para estudiantes de Ciberdefensa (UNDEF). Incluye un roadmap Kanban interactivo, calendario académico centralizado y persistencia de progreso local 🛡️ Construido con Next.js, Prisma y NextAuth.',
    link: 'https://ciberportero.com/es',
    image: '/projects/ciberportero.png',
    github: 'https://github.com/gonzagramaglia/ciberportero',
    id: 'project_ciberportero',
  },
  {
    name: 'Vélez Analytics',
    description:
      'Dashboard analítico dedicado a seguir la trayectoria, resultados de partidos y estadísticas de los jugadores del Club Atlético Vélez Sarsfield (más conocido como \'El Fortín\'). Incluye datos históricos y filtros avanzados 🏟️ Construido con Go, Vite, Astro y Supabase.',
    link: 'https://github.com/gonzagramaglia/velez',
    image: '/projects/velez.png',
    github: 'https://github.com/gonzagramaglia/velez',
    id: 'project_velez',
  },
  {
    name: 'Snacks Saludables',
    description:
      'Plataforma e-commerce con un armador de mixes personalizados y un panel de administración integral. Diseñada para ser intuitiva y rápida, priorizando una navegación fluida, a la vez que segura, y una interfaz moderna ⚡ Construido con Next.js, TypeScript y Tailwind.',
    link: 'https://moovimiento.com',
    image: '/projects/healthysnacks.png',
    github: 'https://github.com/gonzagramaglia/healthysnacks',
    id: 'project3',
  },
  // {
  //   name: 'Milemojis.com',
  //   description:
  //     'Un buscador de emojis minimalista diseñado para ser veloz y accesible. Desarrollado con un fuerte enfoque en arquitectura limpia y experiencia de usuario, con la posibilidad de sumar emojis personalizados y soporte bilingüe 😎 Construido con React, TypeScript y Tailwind.',
  //   link: 'https://milemojis.com',
  //   image: '/milemojis-com.png',
  //   github: 'https://github.com/gonzagramaglia/emojis',
  //   id: 'project5',
  // },
]

/**
 * English work experience data.
 */
export const WORK_EXPERIENCE_EN: WorkExperience[] = [
  {
    company: 'Independent Professional',
    title: 'Full Stack Developer',
    start: '2024',
    end: 'Present',
    link: '/work/full-stack-developer',
    id: 'work1',
    description:
      'Custom full-stack web development and scalable cloud solutions.',
  },
  {
    company: 'Stämm Biotech',
    title: 'Help Desk Specialist',
    start: '2023',
    end: '2024',
    link: '/work/help-desk-specialist',
    id: 'work2',
    description:
      'Startup developing next-gen biomanufacturing technologies.',
  },
]

/**
 * Spanish work experience data.
 */
export const WORK_EXPERIENCE_ES: WorkExperience[] = [
  {
    company: 'Profesional Independiente',
    title: 'Full Stack Developer',
    start: '2024',
    end: 'Presente',
    link: '/es/work/full-stack-developer',
    id: 'work1',
    description:
      'Desarrollo full-stack a medida y soluciones cloud escalables.',
  },
  {
    company: 'Stämm Biotech',
    title: 'Help Desk Specialist',
    start: '2023',
    end: '2024',
    link: '/es/work/help-desk-specialist',
    id: 'work2',
    description: 'Startup de biotecnología de próxima generación.',
  },
]

export const EDUCATION_EN: WorkExperience[] = [
  {
    company: 'Universidad de la Defensa Nacional',
    title: 'Cyberdefense',
    start: '2026',
    end: '2029',
    link: 'https://undef.edu.ar/fadena/carreras-de-grado/licciberdefensa/',
    id: 'edu1',
    description:
      'Argentinian university specializing in defense and security studies.',
  },
  {
    company: 'Universidad Nacional de Córdoba',
    title: 'Computer Science',
    start: '2025',
    end: '2025',
    link: 'https://www.famaf.unc.edu.ar/academica/grado/licenciatura-en-ciencias-de-la-computaci%C3%B3n/',
    id: 'edu2',
    description:
      'Oldest university in Argentina, renowned for science and technology.',
  },
  {
    company: 'Boot.dev',
    title: 'Backend Development',
    start: '2024',
    end: '2024',
    link: 'https://boot.dev/u/gonza',
    id: 'edu3',
    description:
      'Hands-on computer science curriculum focused on backend development.',
  },
  {
    company: 'Grow with Google',
    title: 'IT Support & Cybersecurity',
    start: '2023',
    end: '2023',
    link: 'https://grow.google/certificates/',
    id: 'edu5',
    description: 'Professional training programs designed by Google.',
  },
  {
    company: 'Scrimba.com',
    title: 'Frontend Development',
    start: '2022',
    end: '2022',
    link: 'https://scrimba.com/home',
    id: 'edu4',
    description:
      'Interactive learning platform for frontend and fullstack development.',
  },
]

export const EDUCATION_ES: WorkExperience[] = [
  {
    company: 'Universidad de la Defensa Nacional',
    title: 'Ciberdefensa',
    start: '2026',
    end: '2029',
    link: 'https://undef.edu.ar/fadena/carreras-de-grado/licciberdefensa/',
    id: 'edu1',
    description:
      'Universidad nacional especializada en estudios de defensa y seguridad.',
  },
  {
    company: 'Universidad Nacional de Córdoba',
    title: 'Ciencias de la Computación',
    start: '2025',
    end: '2025',
    link: 'https://www.famaf.unc.edu.ar/academica/grado/licenciatura-en-ciencias-de-la-computaci%C3%B3n/',
    id: 'edu2',
    description:
      'La universidad más antigua de Argentina, reconocida en ciencia y tecnología.',
  },
  {
    company: 'Boot.dev',
    title: 'Desarrollo Backend',
    start: '2024',
    end: '2024',
    link: 'https://boot.dev/u/gonza',
    id: 'edu3',
    description:
      'Plan de estudios prácticos en computación, centrado en el desarrollo backend.',
  },
  {
    company: 'Grow with Google',
    title: 'Soporte IT y Ciberseguridad',
    start: '2023',
    end: '2023',
    link: 'https://grow.google/certificates/',
    id: 'edu5',
    description: 'Programas de formación profesional diseñados por Google.',
  },
  {
    company: 'Scrimba.com',
    title: 'Desarrollo Frontend',
    start: '2022',
    end: '2022',
    link: 'https://scrimba.com/home',
    id: 'edu4',
    description:
      'Plataforma de aprendizaje interactivo en desarrollo frontend y fullstack.',
  },
]
export const BLOG_POSTS_EN: BlogPost[] = [
  {
    title: 'Runner-Up at HackTheKitty 2026: How I Competed Solo Against 127 Teams',
    description:
      'The AI system and tools that allowed me to secure second place out of 127 teams, being the only solo developer in the Top 7.',
    link: '/blog/hackthekitty-2026',
    uid: 'blog-hackthekitty',
    date: 'Aug 6, 2026',
  },
  {
    title: 'Hacking Through the Holidays: My Advent of Cyber 2025 Experience',
    description:
      "A daily journey through TryHackMe's cybersecurity challenges, learning new skills and solving exercises.",
    link: '/blog/advent-of-cyber-2025',
    uid: 'blog-1',
    date: 'Dec 28, 2025',
  },

]

/**
 * Spanish blog posts data.
 */
export const BLOG_POSTS_ES: BlogPost[] = [
  {
    title: 'Subcampeón en HackTheKitty 2026: Cómo competí solo contra 127 equipos',
    description:
      'El sistema y las herramientas de IA que me permitieron quedar en el segundo puesto, siendo el único desarrollador solo en el Top 7.',
    link: '/es/blog/hackthekitty-2026',
    uid: 'blog-hackthekitty',
    date: '6 de Ago, 2026',
  },
  {
    title: 'Hackeando en las Fiestas: Mi Experiencia en Advent of Cyber 2025',
    description:
      'Un viaje diario a través de los desafíos de ciberseguridad de TryHackMe, aprendiendo nuevas habilidades y resolviendo ejercicios.',
    link: '/es/blog/advent-of-cyber-2025',
    uid: 'blog-1',
    date: '28 de Dic, 2025',
  },

]

/**
 * Array of social media profiles.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/gonzagramaglia',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@gonzagramaglia',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzagramaglia',
  },
  {
    label: 'Cal',
    link: 'https://cal.com/gonza',
  },
]

/**
 * Personal email address used across the portfolio.
 */
export const EMAIL = 'gonzagramaglia@gmail.com'

/**
 * Localized project data for the portfolio.
 */
export const PROJECTS = { en: PROJECTS_EN, es: PROJECTS_ES }

/**
 * Localized work experience data.
 */
export const WORK_EXPERIENCE = {
  en: WORK_EXPERIENCE_EN,
  es: WORK_EXPERIENCE_ES,
}

/**
 * Localized education data.
 */
export const EDUCATION = { en: EDUCATION_EN, es: EDUCATION_ES }

/**
 * Localized blog post data.
 */
export const BLOG_POSTS = { en: BLOG_POSTS_EN, es: BLOG_POSTS_ES }
