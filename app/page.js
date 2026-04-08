const highlights = [
  "Full Stack Developer",
  "3+ years experience",
  "SaaS and real-time systems",
];

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Users Impacted", value: "10,000+" },
  { label: "Payments Integrated", value: "4" },
  { label: "Cloud Platforms", value: "3" },
];

const focusAreas = [
  "Product engineering for SaaS applications",
  "Reliable API architecture and backend performance",
  "Payment integrations and recurring billing flows",
  "Real-time tracking and enterprise web systems",
];

const skills = [
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GraphQL",
  "Apollo Client",
  "Redux",
  "Material UI",
  "AWS",
  "Google Cloud",
  "Nginx",
  "Razorpay",
  "PayPal",
  "PhonePe",
  "SenangPay",
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Kritrima Prajna Solutions Pvt. Ltd.",
    location: "Mumbai",
    period: "May 2023 - Present",
    description:
      "Build and scale production SaaS products with a focus on performance, payments, and maintainability.",
    bullets: [
      "Scaled SaaS applications serving 1,000+ users with Next.js, Node.js, Express, and MongoDB.",
      "Integrated Razorpay, PayPal, PhonePe, and SenangPay for subscription and recurring billing.",
      "Reduced API response times by 30-40% through backend and database optimizations.",
      "Deployed production systems on AWS and Google Cloud using Nginx-based hosting setups.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Big Pluto Technologies Pvt. Ltd.",
    location: "Gurgaon",
    period: "Dec 2022 - May 2023",
    description:
      "Worked on RFID-based enterprise systems with a strong emphasis on reliability and real-time data flow.",
    bullets: [
      "Built features for Lighthouse, an RFID-based real-time tracking platform.",
      "Supported enterprise deployment used in Maruti Suzuki environments.",
      "Implemented GraphQL and Apollo Client to improve data-fetching efficiency.",
      "Designed MongoDB schemas for high-frequency read/write operations.",
    ],
  },
];

const projects = [
  {
    name: "eduCOBOT",
    category: "EdTech SaaS Platform",
    description:
      "Gamified learning platform with student dashboards, assessments, and Blockly-based coding modules.",
    stack: "Next.js, Node.js, MongoDB, Blockly",
  },
  {
    name: "Invoice & Subscription System",
    category: "Billing Infrastructure",
    description:
      "Billing suite with GST invoices, installments, recurring payments, and automated reminders.",
    stack: "Node.js, MongoDB, Razorpay, PayPal, PhonePe, SenangPay",
  },
  {
    name: "Interactive Blockly Learning",
    category: "Learning Platform",
    description:
      "Visual coding experience with guided tutorials, validation logic, and real-time feedback.",
    stack: "React, Blockly, JavaScript",
  },
];

const education = [
  "MBA, Human Resources Management - Yashwantrao Chavan Open University, 2021",
  "BCA - Raje Ramrao Mahavidyalaya, Jath, 2018",
];

const certifications = ["CCNA", "MCSA"];

const contact = [
  { label: "Phone", value: "+91 8551955297", href: "tel:+918551955297" },
  { label: "Email", value: "jadhavsagar2081997@gmail.com", href: "mailto:jadhavsagar2081997@gmail.com" },
  { label: "GitHub", value: "https://github.com/jadhavsagar123", href: "https://github.com/jadhavsagar123" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/sagar-jadhav-27a675229/", href: "https://www.linkedin.com/in/sagar-jadhav-27a675229/" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Portfolio</p>
          <p className="topbar-name">Sagar Jadhav</p>
        </div>

        <nav className="topnav" aria-label="Primary">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-grid">
        <article className="hero-copy panel">
          <p className="eyebrow">Full Stack Developer | Mumbai, India</p>
          <h1>Building reliable digital products with a clean engineering mindset.</h1>
          <p className="lead">
            I design and ship SaaS platforms, real-time systems, and payment flows that are fast, stable, and easy
            to grow. My work blends frontend polish with backend discipline.
          </p>

          <div className="hero-tags" aria-label="Highlights">
            {highlights.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#contact" className="button primary">
              Get in touch
            </a>
            <a href="mailto:jadhavsagar2081997@gmail.com" className="button secondary">
              Email me
            </a>
            <a href="/Sagar_Jadhav_Resume.pdf" className="button secondary" download>
              Download resume
            </a>
          </div>
        </article>

        <aside className="hero-card panel">
          <div className="profile-mark">SJ</div>
          <div className="card-copy">
            <p className="card-label">Profile</p>
            <p className="card-title">Focused on product engineering, payment systems, and web performance.</p>
          </div>

          <div className="mini-grid">
            {stats.map((item) => (
              <div key={item.label} className="mini-stat">
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="contact-list">
            {contact.slice(0, 2).map((item) => (
              <a key={item.label} href={item.href} className="contact-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section id="summary" className="content-grid">
        <article className="panel section-card">
          <p className="eyebrow">Overview</p>
          <h2>Professional summary</h2>
          <p className="section-copy">
            Full Stack Developer with 3+ years of experience building production-grade SaaS products and RFID-powered
            real-time systems. I work across frontend, backend, deployments, and payment flows with an emphasis on
            clarity, speed, and reliability.
          </p>
        </article>

        <article className="panel section-card">
          <p className="eyebrow">Focus</p>
          <h2>Core strengths</h2>
          <ul className="bullet-list">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel section-card">
        <p className="eyebrow">Skills</p>
        <h2>Technical stack</h2>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="experience" className="panel section-card">
        <p className="eyebrow">Experience</p>
        <h2>Professional history</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3>{item.role}</h3>
                  <p className="meta">
                    {item.company} | {item.location}
                  </p>
                </div>
                <span className="period">{item.period}</span>
              </div>
              <p className="section-copy">{item.description}</p>
              <ul className="bullet-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="panel section-card">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="meta">{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <article className="panel section-card">
          <p className="eyebrow">Education</p>
          <h2>Academic background</h2>
          <ul className="bullet-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel section-card">
          <p className="eyebrow">Certifications</p>
          <div className="cert-grid">
            {certifications.map((item) => (
              <span key={item} className="cert-pill">
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section id="contact" className="panel contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to full stack product work and engineering collaboration.</h2>
        </div>
        <div className="contact-grid">
          {contact.map((item) => (
            <a key={item.label} href={item.href} className="contact-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
