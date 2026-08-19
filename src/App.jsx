import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const PROFILE = {
  name: 'Oscar Montes Camberos',
  email: 'o.montescamberos@gmail.com',
  phone: '+52 56 4669 0182',
  linkedin: 'https://www.linkedin.com/in/omontescamberos/',
  github: 'https://github.com/oscarlolero',
  resume: `${import.meta.env.BASE_URL}Oscar-Montes-Camberos-CV.pdf`,
}

const metrics = [
  { value: '7+', label: 'years building products' },
  { value: '4', label: 'industries: fintech, AI, e-commerce & consulting' },
  { value: '100K+', label: 'interviews available in the AI data platform' },
  { value: 'EN / ES', label: 'professional communication' },
]

const skillGroups = [
  ['01', 'Frontend', 'React, TypeScript, Next.js, Vue.js, Vuetify, AngularJS, Tailwind CSS, Ant Design'],
  ['02', 'Backend & APIs', 'Node.js, Express, GraphQL, REST APIs, TypeORM, PostgreSQL, Redis, SQL Server'],
  ['03', 'Cloud & delivery', 'AWS, GCP, Kubernetes, Docker, CI/CD, Cloud Run, Cloud Build, Linux'],
  ['04', 'Real-time & AI', 'WebSockets, streaming output, long-running job state, LLM integration patterns'],
  ['05', 'Mobile', 'Swift, Java, Flutter, Realm, CameraX, Room'],
  ['06', 'Quality & collaboration', 'Jest, Cypress, Playwright, GitHub, Figma, code reviews, technical documentation, Agile/Scrum'],
]

const experience = [
  {
    company: 'DaCodes',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 — Present',
    location: 'Remote',
    intro: 'End-to-end delivery for product teams in fintech, AI, and data-intensive startups—from architecture and implementation to performance work, code review, and cross-functional planning.',
    feature: {
      label: 'Current client engagement',
      company: 'Heron Intelligence',
      url: 'https://www.heron-intelligence.com',
      role: 'Senior Software Engineer · Jan 2026 — Present',
      body: 'Building an institutional-investor research platform with specialized company tracking, personalized watchlists, and AI workflows over a proprietary interview corpus.',
      bullets: [
        'Optimized database queries and layered client/server caching for high-volume research and platform workflows.',
        'Built a complex personalized-watchlist and specialized company-tracking system for investor research.',
        'Developed real-time, RAG-powered AI chat across 100K+ proprietary interviews and 5K+ companies.',
        'Strengthened security for online payment systems powered by Stripe.',
        'Shipped a WebSocket notification system that replaced a polling-based flow for research and platform activity.',
      ],
      stack: 'React · TypeScript · Node.js · PostgreSQL · Redis · AWS · WebSockets · LLMs',
    },
  },
  {
    company: 'Jonajo Consulting',
    url: 'https://www.jonajo.com/',
    role: 'Senior Software Engineer',
    period: 'May 2021 — Dec 2024',
    location: 'Remote',
    intro: 'Delivered web and mobile products across React, Next.js, Node.js, GraphQL, Firebase, Docker, AWS, and GCP, with CI/CD and cloud infrastructure ownership.',
    bullets: [
      'Built native and cross-platform mobile applications with Swift, Java, and Flutter, including robust offline functionality.',
      'Translated Figma systems into production interfaces using modular architecture, MVC patterns, and Agile delivery.',
    ],
    projects: [
      {
        name: 'Silvermine',
        url: 'https://www.silverminegroup.com/',
        period: 'Oct 2023 — Oct 2024',
        summary: 'Improved tax-payment journeys and SEO through SSR; optimized client code, supported AWS cost reduction, and resolved production issues.',
      },
      {
        name: 'GlamScan',
        url: 'https://glamscan.webflow.io/',
        period: 'Aug 2021 — May 2024',
        summary: 'Built web, iOS, and Android capabilities for an AR nail-polish try-on product, including AI nail detection, e-commerce, performance, and GraphQL work.',
      },
    ],
  },
  {
    company: 'Prime Consultoría',
    url: 'https://prime-consultoria.com.mx/',
    role: 'Full-Stack Web & Mobile Developer',
    period: 'Jan 2021 — Sep 2024',
    location: 'Remote',
    intro: 'Developed product and automation workflows with Node.js, Vue.js, Flutter, .NET/SOAP services, SQL Server, and Cloud Run.',
    bullets: [
      'Built operator and technician workflows integrated with SAP Business One for reporting, equipment verification, work logging, and push-notification revisions.',
      'Delivered sortable reporting dashboards and automated Banxico, SAP, and PEMEX workflows using Puppeteer and Playwright.',
    ],
  },
  {
    company: 'Universidad de Guanajuato',
    role: 'Web Developer · Temporary Contract',
    period: 'Sep 2020 — Nov 2020',
    location: 'Salamanca, Mexico',
    intro: "Designed and implemented the website for the university's special laboratories.",
  },
  {
    company: 'Mope IT',
    role: 'Full-Stack Web Developer · Temporary Contract',
    period: 'Aug 2019 — Mar 2020',
    location: 'Irapuato, Mexico',
    intro: 'Built an operations admin platform and Node.js services for a home-cleaning company, integrating OpenPay, Google Maps, Firebase authentication, notifications, Firestore, and Realtime Database.',
  },
]

function Reveal({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

function SectionHeading({ id, number, kicker, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-heading__label"><span>{number}</span><span>{kicker}</span></div>
      <div><h2 id={id}>{title}</h2>{copy && <p>{copy}</p>}</div>
    </div>
  )
}

function ExternalLink({ href, children, className = '', download = false }) {
  return (
    <a className={`arrow-link ${className}`} href={href} target={download ? undefined : '_blank'} rel={download ? undefined : 'noreferrer'} download={download || undefined}>
      <span>{children}</span>
      {download ? <Download aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
    </a>
  )
}

function CompanyLink({ name, url }) {
  if (!url) return name

  return <a className="project-link" href={url} target="_blank" rel="noreferrer">{name}<ArrowUpRight aria-hidden="true" /></a>
}

function ExperienceItem({ item, index }) {
  return (
    <Reveal className="experience-item">
      <div className="experience-item__rail" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
      <article>
        <div className="experience-item__header">
          <div><h3><CompanyLink name={item.company} url={item.url} /></h3><p className="experience-item__role">{item.role}</p></div>
          <div className="experience-item__meta"><time>{item.period}</time><span>{item.location}</span></div>
        </div>
        <p className="experience-item__intro">{item.intro}</p>
        {item.bullets && <ul className="impact-list">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {item.feature && (
          <div className="feature-project">
            <p className="eyebrow">{item.feature.label}</p>
            <div className="feature-project__title"><h4><CompanyLink name={item.feature.company} url={item.feature.url} /></h4><span>{item.feature.role}</span></div>
            <p className="feature-project__body">{item.feature.body}</p>
            <ul className="impact-list impact-list--light">{item.feature.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            <p className="feature-project__stack">{item.feature.stack}</p>
          </div>
        )}
        {item.projects && (
          <div className="selected-projects">
            <p className="eyebrow">Selected client work</p>
            {item.projects.map((project) => (
              <div className="selected-project" key={project.name}>
                <div><h4><CompanyLink name={project.name} url={project.url} /></h4><span>{project.period}</span></div>
                <p>{project.summary}</p>
              </div>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  )
}

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Oscar Montes Camberos, back to top"><span>OM</span><span>Senior Software Engineer</span></a>
          <div className="site-nav__links"><a href="#experience">Experience</a><a href="#expertise">Expertise</a><a href="#background">Background</a></div>
          <a className="nav-contact" href={`mailto:${PROFILE.email}`}><Mail aria-hidden="true" /><span>Let’s talk</span></a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <motion.div className="hero__copy" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <p className="eyebrow hero__eyebrow"><span className="status-dot" aria-hidden="true" />Senior Software Engineer · Remote</p>
            <h1 id="hero-title">I turn complex product workflows into <em>clear, reliable software.</em></h1>
            <p className="hero__summary">Seven-plus years delivering web, mobile, cloud, real-time, and AI-enabled products—from the interface through the infrastructure.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#experience">Explore my work <ArrowDownRight aria-hidden="true" /></a>
              <ExternalLink className="button button--secondary" href={PROFILE.resume} download>Download CV</ExternalLink>
            </div>
          </motion.div>
          <motion.aside className="current-role" aria-label="Current role" initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
            <div className="current-role__topline"><span>Currently</span><span>2026</span></div>
            <div className="current-role__main"><p>DaCodes × Heron Intelligence</p><h2>Building AI research tools for institutional investors.</h2></div>
            <p className="current-role__footer">React · TypeScript · Node.js · PostgreSQL · Redis · AWS</p>
          </motion.aside>
        </section>

        <section className="metrics" aria-label="Career highlights">{metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" number="01" kicker="Experience" title="Work with real stakes and measurable complexity." copy="Product engineering across finance, AI, commerce, field operations, mobile, and automation." />
          <div className="experience-list">{experience.map((item, index) => <ExperienceItem item={item} index={index} key={`${item.company}-${item.period}`} />)}</div>
        </section>

        <section className="section expertise" id="expertise" aria-labelledby="expertise-title">
          <SectionHeading id="expertise-title" number="02" kicker="Expertise" title="Broad range. Product-minded execution." copy="A full-stack toolkit organized around shipping dependable products—not collecting technology badges." />
          <div className="skill-grid">{skillGroups.map(([number, title, skills]) => <Reveal className="skill-group" key={title}><span>{number}</span><h3>{title}</h3><p>{skills}</p></Reveal>)}</div>
        </section>

        <section className="section background" id="background" aria-labelledby="background-title">
          <SectionHeading id="background-title" number="03" kicker="Background" title="Engineering fundamentals, fluent collaboration." />
          <div className="background-grid">
            <Reveal className="background-card background-card--education">
              <p className="eyebrow">Education</p><div><h3>Universidad de Guanajuato</h3><p>Systems Engineering</p></div>
              <div className="background-card__meta"><span>Aug 2016 — 2021</span><strong>GPA 9.0 / 10</strong></div>
            </Reveal>
            <Reveal className="background-card background-card--languages" delay={0.06}>
              <p className="eyebrow">Languages</p><dl><div><dt>Spanish</dt><dd>Native</dd></div><div><dt>English</dt><dd>Fluent · Professional working proficiency</dd></div></dl>
            </Reveal>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div><p className="eyebrow">Have a complex product to ship?</p><h2 id="contact-title">Let’s make it clear, fast, and dependable.</h2></div>
          <a className="contact__email" href={`mailto:${PROFILE.email}`}><span>{PROFILE.email}</span><ArrowUpRight aria-hidden="true" /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div><strong>{PROFILE.name}</strong><span>{PROFILE.phone}</span></div>
        <div className="site-footer__links">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
          <ExternalLink href={PROFILE.resume} download>CV</ExternalLink>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}
