
import { useState } from "react";

const skills = [
  "Node.js",
  "Java",
  "JavaScript",
  "TypeScript",
  "PHP",
  "REST APIs",
  "Payment APIs",
  "Webhooks",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitLab CI/CD",
  "Jenkins"
];

const projects = [
  {
    number: "01",
    title: "Event Booking System",
    description:
      "Developed backend functionality for event discovery and ticket booking, including booking states, ticket limits, countdown logic, database-driven content, and server-side tracking.",
    technologies: "Node.js · SQL · REST APIs"
  },
  {
    number: "02",
    title: "Payment & API Troubleshooting",
    description:
      "Investigated payment and API issues involving transaction failures, HTTP responses, account states, webhook delivery, authentication, and inconsistent production behaviour.",
    technologies: "Payment APIs · Webhooks · Troubleshooting"
  },
  {
    number: "03",
    title: "Backend Reliability",
    description:
      "Implemented reliability mechanisms including Redis TTLs, rate limiting, cooldowns, OTP fallback logic, and server-side tracking to improve application resilience and operational visibility.",
    technologies: "Redis · AWS · Node.js"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVIGATION */}

      <header className="navbar">

        <a
          className="logo"
          href="#home"
          onClick={closeMenu}
        >
          BN<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

      </header>


      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero section-container"
        >

          <div className="hero-content">

            <p className="eyebrow">
              TECHNICAL SUPPORT SPECIALIST · FINTECH · DOHA, QATAR
            </p>

            <h1>
              Engineering, troubleshooting,
              <span> and solving complex problems.</span>
            </h1>

            <p className="hero-description">
              Software engineer with professional experience across
              backend development, API integrations, cloud
              infrastructure, and production systems. Now specializing
              in payment technology, technical support, and API-driven
              financial solutions.
            </p>

            <div className="hero-buttons">

              <a
                className="button button-primary"
                href="#contact"
              >
                Let's connect
              </a>

              <a
                className="button"
                href="./Bivhor-Nirola-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

            </div>

          </div>


          <div className="terminal">

            <div className="terminal-header">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <pre>
              <code>{`const engineer = {

  name: "Bivhor Nirola",

  role: "Technical Support Specialist",

  background: [
    "Backend Engineering",
    "API Integrations",
    "Cloud Infrastructure",
    "Production Systems"
  ],

  focus: [
    "Payment Technology",
    "Technical Support",
    "APIs",
    "Reliability"
  ]

};`}</code>
            </pre>

          </div>

        </section>


        {/* ABOUT */}

        <section
          id="about"
          className="section section-container"
        >

          <p className="eyebrow">
            01 · ABOUT
          </p>

          <h2>
            Engineering experience with a
            <span> problem-solving mindset.</span>
          </h2>

          <div className="about-grid">

            <p>
              I'm a software engineer with professional experience
              building and supporting backend systems, APIs, databases,
              and cloud infrastructure.
            </p>

            <p>
              Throughout my career, I've worked close to production —
              developing services, integrating systems, investigating
              failures, and resolving issues that directly impact users
              and business operations.
            </p>

            <p>
              I'm now bringing that engineering foundation into FinTech
              and payment technology, with a focus on API integrations,
              transaction processing, webhooks, troubleshooting, and
              reliable technical support.
            </p>

            <p>
              My approach is simple: understand the problem, identify
              the root cause, communicate clearly, and deliver a
              reliable solution.
            </p>

          </div>

        </section>


        {/* EXPERIENCE */}

        <section
          id="experience"
          className="section section-container"
        >

          <p className="eyebrow">
            02 · EXPERIENCE
          </p>

          <div className="timeline">

            {/* VoPay */}

            <article className="experience">

              <div>

                <small>
                  SEP 2026 — PRESENT
                </small>

                <h3>
                  Technical Support Specialist
                </h3>

                <h4>
                  VoPay · Doha, Qatar
                </h4>

              </div>

              <p>
                Supporting payment technology and merchant integrations
                across APIs, transactions, webhooks, authentication,
                and production systems. Investigating technical issues,
                identifying root causes, and working toward reliable
                resolutions for complex payment and integration
                problems.
              </p>

            </article>


            {/* Rafeeq */}

            <article className="experience">

              <div>

                <small>
                  AUG 2025 — AUG 2026
                </small>

                <h3>
                  Senior Backend Developer
                </h3>

                <h4>
                  Rafeeq · Doha, Qatar
                </h4>

              </div>

              <p>
                Developed and supported backend services for a
                large-scale super-app covering food delivery, grocery,
                events, and ride-hailing. Built REST APIs, booking
                workflows, database-driven features, search
                functionality, and production solutions focused on
                reliability and performance.
              </p>

            </article>


            {/* News Corp */}

            <article className="experience">

              <div>

                <small>
                  PREVIOUS EXPERIENCE
                </small>

                <h3>
                  Senior Software Engineer
                </h3>

                <h4>
                  News Corp
                </h4>

              </div>

              <p>
                Worked on enterprise software and production systems
                across backend services, APIs, databases, and
                operational environments. Contributed to application
                development, system reliability, troubleshooting, and
                production support.
              </p>

            </article>

          </div>

        </section>


        {/* CAREER EVOLUTION */}

        <section className="section section-container">

          <p className="eyebrow">
            03 · CAREER EVOLUTION
          </p>

          <h2>
            From building systems to
            <span> solving the problems behind them.</span>
          </h2>

          <div className="about-grid">

            <p>
              My career began with software engineering and backend
              development, where I built a strong foundation in
              application architecture, APIs, databases, and cloud
              technologies.
            </p>

            <p>
              Working with production systems taught me something
              equally important: understanding how systems behave when
              things don't go as planned.
            </p>

            <p>
              That experience naturally led me toward troubleshooting,
              production support, API operations, and now payment
              technology.
            </p>

            <p>
              Today, I combine software engineering knowledge with
              technical problem-solving to understand issues at their
              source rather than simply treating the symptoms.
            </p>

          </div>

        </section>


        {/* SKILLS */}

        <section
          id="skills"
          className="section section-container"
        >

          <p className="eyebrow">
            04 · TECHNICAL TOOLKIT
          </p>

          <h2>
            Technologies I work with.
          </h2>

          <div className="skills">

            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}

          </div>

        </section>


        {/* PROJECTS */}

        <section
          id="projects"
          className="section section-container"
        >

          <p className="eyebrow">
            05 · SELECTED WORK
          </p>

          <div className="projects">

            {projects.map((project) => (

              <article
                className="project"
                key={project.number}
              >

                <small>
                  {project.number}
                </small>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <strong>
                  {project.technologies}
                </strong>

              </article>

            ))}

          </div>

        </section>


        {/* CORE EXPERTISE */}

        <section className="section section-container">

          <p className="eyebrow">
            06 · CORE EXPERTISE
          </p>

          <div className="strengths">

            <div>
              <strong>
                Payment Technology
              </strong>

              <span>
                Transactions · APIs · Webhooks · Merchant Integrations
              </span>
            </div>

            <div>
              <strong>
                Technical Support
              </strong>

              <span>
                Troubleshooting · Root-Cause Analysis · Incident Resolution
              </span>
            </div>

            <div>
              <strong>
                Backend Engineering
              </strong>

              <span>
                Node.js · Java · PHP · REST APIs
              </span>
            </div>

            <div>
              <strong>
                Cloud & Infrastructure
              </strong>

              <span>
                AWS · Docker · Kubernetes · Terraform
              </span>
            </div>

            <div>
              <strong>
                Databases & Caching
              </strong>

              <span>
                PostgreSQL · MySQL · MongoDB · Redis
              </span>
            </div>

            <div>
              <strong>
                Production Reliability
              </strong>

              <span>
                Monitoring · Debugging · Performance · System Reliability
              </span>
            </div>

          </div>

        </section>


        {/* CONTACT */}

        <section
          id="contact"
          className="section section-container contact"
        >

          <p className="eyebrow">
            07 · CONTACT
          </p>

          <h2>
            Let's solve
            <span> complex technical problems.</span>
          </h2>

          <p className="hero-description">
            I’m interested in payment technology, API integrations,
            backend systems, technical support, and production
            engineering — especially where strong technical
            understanding can turn complex problems into simple,
            reliable solutions.
          </p>

          <div className="contact-links">

            <a href="mailto:bivhor.nirola92@gmail.com">
              Email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/bivhor-nirola"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/bivhor"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer>

        © {new Date().getFullYear()}
        {" "}
        Bivhor Nirola · React & TypeScript

      </footer>

    </div>
  );
}

export default App;
