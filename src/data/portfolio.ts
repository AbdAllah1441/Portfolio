export const siteConfig = {
  name: 'AbdAllah Sakhr',
  title: 'Frontend Developer | React & Next.js Developer',
  description:
    'Frontend Developer with 3+ years of experience building responsive and interactive web applications using React, Next.js, and TypeScript.',
  url: 'https://abdallah-sakhr.dev',
  email: 'abdallah.sakhr@example.com',
  github: 'https://github.com/AbdAllah1441',
  linkedin: 'https://linkedin.com/in/abdallah-sakhr',
  cvUrl: '/cv-abdallah-sakhr.pdf',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroContent = {
  intro:
    'Frontend Developer with 3+ years of experience building responsive and interactive web applications using React, Next.js, and TypeScript. Focused on clean architecture, reusable components, API integration, and smooth user experiences.',
} as const

export const aboutContent = {
  summary:
    'I am a Frontend Developer passionate about crafting intuitive, performant web experiences. With over three years of professional experience, I specialize in React and Next.js ecosystems, building everything from dashboards to real-time integrations. I value clean code, thoughtful UX, and collaborative teamwork.',
  highlights: [
    '3+ years building production web applications',
    'Strong focus on component architecture and reusability',
    'Experience with full-stack integration using REST APIs and PostgreSQL',
    'Comfortable working in agile teams with Git-based workflows',
  ],
} as const

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  {
    title: 'Backend & Data',
    skills: ['PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Figma'],
  },
] as const

export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'parent-dashboard',
    title: 'Parent Dashboard System',
    description:
      'A responsive admin dashboard for managing parent accounts, student records, and communication workflows. Built with role-based access and real-time data updates.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/AbdAllah1441/parent-dashboard',
    liveUrl: 'https://parent-dashboard-demo.vercel.app',
    imageAlt: 'Parent Dashboard System preview',
  },
  {
    id: 'voice-assistant',
    title: 'Voice Assistant Integration',
    description:
      'Web application integrating voice commands for hands-free navigation and task execution. Features speech recognition, natural language processing, and seamless UI feedback.',
    technologies: ['React', 'TypeScript', 'Web APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/AbdAllah1441/voice-assistant',
    liveUrl: 'https://voice-assistant-demo.vercel.app',
    imageAlt: 'Voice Assistant Integration preview',
  },
  {
    id: 'postgres-prisma',
    title: 'PostgreSQL + Prisma Project',
    description:
      'Full-stack data management application with PostgreSQL database, Prisma ORM, and a modern React frontend. Includes CRUD operations, data validation, and optimized queries.',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    githubUrl: 'https://github.com/AbdAllah1441/postgres-prisma-app',
    liveUrl: 'https://postgres-prisma-demo.vercel.app',
    imageAlt: 'PostgreSQL and Prisma project preview',
  },
]

export type Experience = {
  id: string
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 — Present',
    description:
      'Develop and maintain responsive web applications using React and Next.js. Collaborate with backend teams on API integration, implement reusable component libraries, and optimize application performance.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    role: 'Junior Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2022 — 2023',
    description:
      'Built client-facing websites and internal tools. Translated Figma designs into pixel-perfect interfaces, integrated REST APIs, and participated in code reviews and sprint planning.',
    technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Frontend Intern',
    company: 'Startup Labs',
    period: '2021 — 2022',
    description:
      'Assisted in developing UI components, fixing bugs, and learning modern frontend workflows. Gained hands-on experience with React, version control, and agile methodologies.',
    technologies: ['React', 'JavaScript', 'Git', 'Figma'],
  },
]

export const terminalCommands = [
  {
    command: 'whoami',
    output: ['AbdAllah Sakhr'],
  },
  {
    command: 'stack',
    output: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    command: 'status',
    output: ['Building web experiences...'],
  },
] as const
