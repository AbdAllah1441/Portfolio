export const siteConfig = {
  name: 'AbdAllah Mostafa',
  title: 'Frontend Developer | React & Next.js Developer',
  description:
    'Frontend Developer with 3+ years of experience building responsive and interactive web applications using React, Next.js, and TypeScript.',
  url: 'https://abdallah-mostafa.dev',
  email: 'abdallah.mostafa@example.com',
  github: 'https://github.com/AbdAllah1441',
  linkedin: 'https://linkedin.com/in/abdallah-mostafa',
  cvUrl: '/cv-abdallah-mostafa.pdf',
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
    'I am a Frontend Developer passionate about crafting intuitive, performant web experiences. With over three years of professional experience, I specialize in React and Next.js ecosystems, building everything from dashboards to real-time voice AI integrations. I value clean code, thoughtful UX, and collaborative teamwork.',
  highlights: [
    '3+ years building production web applications',
    'Strong focus on component architecture and reusability',
    'Experience with voice AI (LiveKit), REST APIs, and PostgreSQL',
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
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'REST APIs',
    ],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Figma', 'LiveKit'],
  },
] as const

export const skillSlugs = [
  'typescript',
  'javascript',
  'react',
  'nextdotjs',
  'html5',
  'css3',
  'tailwindcss',
  'reactquery',
  'zustand',
  'tanstack',
  'nodedotjs',
  'express',
  'postgresql',
  'mongodb',
  'prisma',
  'git',
  'docker',
  'figma',
] as const

export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'electropi',
    title: 'ElectroPi Website & Voice Agent',
    description:
      'Built both the ElectroPi marketing site and its AI-powered Egyptian Arabic voice agent. The Next.js frontend covers services, case studies, contact, and an admin dashboard; the voice agent runs on Node.js with LiveKit and Gemini Live, letting visitors talk to the site, navigate pages, and submit the contact form from a floating mic widget.',
    technologies: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'LiveKit',
      'Gemini Live API',
      'PostgreSQL',
      'Prisma',
    ],
    liveUrl: 'https://www.electropi.ai',
    imageUrl: '/projects/electropi.png',
    imageAlt: 'ElectroPi website and voice agent preview',
  },
  {
    id: 'modrs-parent',
    title: 'Modrs Parent Dashboard',
    description:
      'Bilingual parent dashboard for the Modrs education platform. Parents monitor children’s progress, homework, and rewards while building weekly study plans with an integrated AI-powered LiveKit voice assistant that can add children, configure subjects, and reschedule sessions by voice.',
    technologies: [
      'React',
      'TypeScript',
      'TanStack Router',
      'LiveKit',
      'Tailwind CSS',
      'i18n',
    ],
    imageAlt: 'Modrs Parent Dashboard preview',
  },
  {
    id: 'sera',
    title: 'SERA AI Chat Assistant',
    description:
      'Embeddable Arabic AI chat widget for Saudi Arabia’s electricity regulator (SERA). Delivered as a Next.js popup that injects via script, iframe, or Chrome extension—with secure API proxying, optional speech-to-text, Nafath identity verification, and DGA-styled RTL UI.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Chrome Extension',
      'Speech-to-Text',
      'RTL',
      'Tailwind CSS',
    ],
    imageAlt: 'SERA AI chat assistant preview',
  },
  {
    id: 'trading',
    title: 'Tadawl Agents Trading Platform',
    description:
      'Bilingual trading frontend that surfaces AI-generated opportunities and supports manual or automatic paper trades with live charts across US, crypto, and Saudi (Tadawul) markets. Includes strategy activation, multi-strategy backtesting, and Firebase push alerts.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Lightweight Charts',
      'WebSockets',
      'NextAuth',
      'TanStack Query',
    ],
    imageAlt: 'Tadawl Agents trading platform preview',
  },
  {
    id: 'node-hub',
    title: 'Node Hub (Digital Hub)',
    description:
      'Enterprise employee portal for Node Technologies, built to support process maturity toward CMMI certification. Centralizes leave approvals across employee, manager, HR, and finance roles, plus process assets, org chart, calendar, media, attendance, and payroll views.',
    technologies: [
      'React',
      'TypeScript',
      'TanStack Router',
      'TanStack Query',
      'Microsoft Auth',
      'SignalR',
    ],
    imageAlt: 'Node Hub employee portal preview',
  },
  {
    id: 'formbuilder',
    title: 'Form Builder',
    description:
      'Full-stack form builder where users design surveys with drag-and-drop questions, publish shareable links, and review submissions with CSV export. Includes live preview, file attachments, dark mode, and bilingual English/Arabic with RTL support.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      '@dnd-kit',
      'Tailwind CSS',
    ],
    imageAlt: 'Form Builder app preview',
  },
  {
    id: 'azkar',
    title: 'Azkar — Salawat Chrome Extension',
    description:
      'Manifest V3 Chrome extension that plays a short salawat (الصلاة على النبي) clip whenever you open a new tab. Uses a background service worker and Chrome’s Offscreen Documents API for reliable audio without replacing the default new-tab page.',
    technologies: [
      'Chrome Extension',
      'Manifest V3',
      'JavaScript',
      'Service Workers',
      'Offscreen API',
    ],
    imageAlt: 'Azkar Chrome extension preview',
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
    id: 'exp-electropi',
    role: 'Frontend Developer',
    company: 'ElectroPi',
    period: '2025 — Present',
    description:
      'Built production frontends and voice AI integrations across ElectroPi products: the company website with an Egyptian Arabic LiveKit agent, Modrs parent dashboard with voice-driven study plans, SERA’s embeddable Arabic chat assistant, and the Tadawl Agents trading platform.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'LiveKit',
      'Tailwind CSS',
    ],
  },
  {
    id: 'exp-node',
    role: 'Frontend Developer',
    company: 'Node Technologies',
    period: '2024 — 2025',
    description:
      'Developed Digital Hub (Node Hub), an employee portal supporting CMMI process maturity—role-based leave workflows, process assets, org chart, calendar with SignalR, and HR modules—using React, TanStack Router/Query, and Microsoft authentication.',
    technologies: [
      'React',
      'TypeScript',
      'TanStack Router',
      'Microsoft Auth',
      'SignalR',
    ],
  },
]

export const terminalCommands = [
  {
    command: 'whoami',
    output: ['AbdAllah Mostafa'],
  },
  {
    command: 'stack',
    output: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'LiveKit',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    command: 'status',
    output: ['Building web experiences...'],
  },
] as const
