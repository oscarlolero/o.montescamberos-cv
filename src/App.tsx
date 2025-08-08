import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

// ---- Profile data (edit this to update content) ----
const PROFILE = {
  name: 'Oscar Montes Camberos',
  title: 'Software Engineer – Full Stack, Mobile & Cloud',
  location: 'Silicon Valley / Mexico',
  email: 'o.montescamberos@gmail.com',
  phone: '+52 56 4669 0182',
  links: {
    linkedin: 'https://www.linkedin.com/in/omontescamberos/',
    github: 'https://github.com/oscarlolero',
    detailedCV: 'https://tinyurl.com/oscarmontescamberos-detailedcv',
  },
}

const SKILLS = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Vue / Vuetify',
  'Node.js / Express',
  'GraphQL / Apollo',
  'AWS / GCP',
  'PostgreSQL / MongoDB',
  'Redis',
  'Docker / Kubernetes',
  'Swift (iOS)',
  'Java (Android)',
  'Flutter (Dart)',
  'Testing: Jest, Cypress, Playwright',
]

const EXPERIENCE = [
  {
    company: 'DaCodes',
    role: 'Senior Software Developer',
    period: 'Jan 2025 – Present',
    bullets: [
      'Built an AI-powered platform to analyze earnings calls/interviews for investors.',
      'Full-stack ownership: React (TS), Node.js, PostgreSQL, Redis.',
      'Deployed and scaled on AWS (Amplify, ECS, ECR).',
    ],
    tech: [
      'React (TS, AntD, Tailwind, Zustand, TanStack Query)',
      'Node.js (Express, TypeORM, Celebrate, Tsyringe)',
      'PostgreSQL, Redis, Jest',
      'AWS (Amplify, ECS, ECR)',
    ],
  },
  {
    company: 'Jonajo Consulting',
    role: 'Senior Software Developer',
    period: 'Jun 2021 – Dec 2024',
    bullets: [
      'Delivered web & mobile solutions optimizing performance and engagement.',
      'Achieved 99.9% uptime with scalable GCP/AWS deployments.',
      'Worked across React, Next.js, Node.js, GraphQL, Firebase, Docker.',
    ],
    tech: ['React, Next.js', 'Node.js, GraphQL', 'GCP, AWS', 'Docker'],
  },
  {
    company: 'Silvermine (client)',
    role: 'Front-End Engineer',
    period: 'Oct 2023 – Oct 2024',
    bullets: [
      'Improved UX for tax payment processes and SEO via SSR.',
      'Reduced load time by optimizing client-side code.',
      'AWS cost optimization and debugging.',
    ],
    tech: ['AngularJS', 'React', 'Next.js', 'SQL Server', 'AWS'],
  },
  {
    company: 'GlamScan (Web & Mobile)',
    role: 'Full‑Stack / iOS / Android Developer',
    period: 'Aug 2021 – May 2024',
    bullets: [
      'Virtual try‑on with AR for nail polish; AI nail detection.',
      'Improved APIs and page performance; e‑commerce integration.',
      'Swift (Realm), Java (CameraX, Room), Flutter; GraphQL backend.',
    ],
    tech: ['React', 'Node.js', 'Express', 'Docker', 'GCP', 'Swift', 'Java', 'Flutter', 'GraphQL'],
  },
  {
    company: 'PRIME Consulting',
    role: 'Full‑Stack Web & Mobile Developer',
    period: 'Jan 2021 – Sep 2024',
    bullets: [
      'Automation bots for PEMEX portals using Puppeteer/Playwright.',
      'Deployed on Cloud Run; scheduling with NodeCron; SQL Server.',
    ],
    tech: ['Node.js', 'Puppeteer', 'Playwright', 'Cloud Run', 'SQL Server'],
  },
  {
    company: 'MOPE IT',
    role: 'Full‑Stack Developer',
    period: 'Jan 2019 – Jan 2020',
    bullets: [
      'Admin panel for reports/config, driver tracking with Maps.',
      'Online payments via OpenPay; Firebase auth.',
    ],
    tech: ['Node.js', 'Express', 'Google Maps API', 'Firebase', 'OpenPay', 'Bootstrap'],
  },
]

// ---- Small UI atoms ----
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur-md">
    {children}
  </span>
)

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1533]/70 to-[#120c1c]/70 p-5 shadow-xl backdrop-blur-xl">
    {children}
  </div>
)

export default function App() {
  // Stagger animation preset for list items
  const itemTransition = useMemo(
    () => ({ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }),
    []
  )

  return (
    <div className="min-h-screen text-white">
      {/* Animated purple/dark background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,#6d28d9_0%,transparent_40%),radial-gradient(1000px_500px_at_100%_10%,#3b0764_0%,transparent_35%),linear-gradient(135deg,#0b0711_0%,#130a1f_45%,#1b1030_100%)] animate-[gradient_20s_ease_infinite]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-violet-700" />
        <style>{`
          @keyframes gradient { 
            0% { filter: hue-rotate(0deg);} 
            50% { filter: hue-rotate(20deg);} 
            100% { filter: hue-rotate(0deg);} 
          }
        `}</style>
      </div>

      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <span className="text-sm tracking-wide text-white/70">Portfolio / CV</span>
          <div className="flex items-center gap-3 text-sm">
            <a href="#skills" className="hover:text-violet-300">Skills</a>
            <a href="#experience" className="hover:text-violet-300">Experience</a>
            <a href="#education" className="hover:text-violet-300">Education</a>
            <a href={PROFILE.links.github} target="_blank" className="inline-flex items-center gap-1 hover:text-violet-300" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" className="inline-flex items-center gap-1 hover:text-violet-300" rel="noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-lg text-white/80">{PROFILE.title}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-white/80">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{PROFILE.location}</span>
              <a className="inline-flex items-center gap-2 hover:text-violet-300" href={`mailto:${PROFILE.email}`}><Mail className="h-4 w-4" />{PROFILE.email}</a>
              <a className="inline-flex items-center gap-2 hover:text-violet-300" href={`tel:${PROFILE.phone.replace(/\s|\+/g,'')}`}><Phone className="h-4 w-4" />{PROFILE.phone}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="rounded-xl bg-violet-600/90 px-4 py-2 text-sm font-medium shadow-lg shadow-violet-900/40 transition hover:bg-violet-500">
                Connect on LinkedIn
              </a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-md transition hover:border-violet-400/60 hover:bg-white/10">
                View GitHub
              </a>
            </div>
          </div>

          <Card>
            <h3 className="text-lg font-semibold">Summary</h3>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Software Engineer with 7+ years building user‑centric, scalable apps across web, mobile, and cloud. Focus on performance, DX, and reliable delivery using React/Vue, Node.js, Swift, and AWS/GCP.
            </p>
          </Card>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="mb-5 text-2xl font-semibold">Technical Skills</h2>
        <Card>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="mb-5 text-2xl font-semibold">Professional Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35 }}
            >
              <Card>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-sm text-white/70">{exp.role}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/85">
                  {exp.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      variants={itemTransition}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-5 text-2xl font-semibold">Education</h2>
        <Card>
          <p className="text-white/85">
            <span className="font-medium">Universidad de Guanajuato</span> — Systems Engineering (GPA 9.0/10)
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-white/60">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <a className="inline-flex items-center gap-1 hover:text-violet-300" href={PROFILE.links.detailedCV} target="_blank" rel="noreferrer">
            View detailed CV <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}
