import { useState } from "react";

const skills = [
  "Node.js",
  "Java",
  "JavaScript",
  "TypeScript",
  "PHP",
  "REST APIs",
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
      "Backend booking and ticketing workflows including booking states, ticket limits, countdown logic and database-driven content.",
    technologies: "Node.js · SQL · REST APIs"
  },
  {
    number: "02",
    title: "Payment & API Troubleshooting",
    description:
      "Production investigation of transaction failures, HTTP responses, account states, webhooks and inconsistent API behaviour.",
    technologies: "APIs · Webhooks · Payments"
  },
  {
    number: "03",
    title: "Backend Reliability",
    description:
      "Production-focused reliability patterns including Redis TTL, cooldowns, OTP fallback logic, rate limiting and server-side tracking.",
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
              SENIOR BACKEND DEVELOPER · DOHA, QATAR
            </p>

            <h1>
              Building reliable
              <span> backend systems.</span>
            </h1>

            <p className="hero-description">
              Backend engineer focused on APIs, payment
              integrations, scalable services, cloud infrastructure
              and production support.
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
              <code>
{`const engineer = {

  name: "Bivhor Nirola",

  role: "Senior Backend Developer",

  focus: [
    "Backend",
    "APIs",
    "Payments",
    "Cloud"
  ],

  stack:
    "Node.js · Java · AWS"

};`}
              </code>
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
            Engineering with a
            <span> production mindset.</span>
          </h2>

          <div className="about-grid">

            <p>
              I'm a software engineer with experience across
              backend development, API integrations, cloud
              infrastructure and technical support.
            </p>

            <p>
              I enjoy solving complex production problems,
              improving reliability and turning business
              requirements into maintainable systems.
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

            <article className="experience">

              <div>

                <small>
                  2025 — PRESENT
                </small>

                <h3>
                  Senior Backend Developer
                </h3>

                <h4>
                  Rafeeq · Doha, Qatar
                </h4>

              </div>

              <p>
                Backend development for super-app experiences
                including food, grocery, events and ride-hailing.
                Built APIs, booking logic, database-driven features,
                search and operational tracking.
              </p>

            </article>


            <article className="experience">

              <div>

                <small>
                  PREVIOUS
                </small>

                <h3>
                  Senior Software Engineer
                </h3>

                <h4>
                  News Corp
                </h4>

              </div>

              <p>
                Software engineering and production support across
                backend services, APIs, databases and operational
                systems.
              </p>

            </article>


            <article className="experience">

              <div>

                <small>
                  PAYMENT TECHNOLOGY
                </small>

                <h3>
                  Technical Support · Payments
                </h3>

                <h4>
                  VoPay
                </h4>

              </div>

              <p>
                Payment technology, API troubleshooting, webhooks,
                transaction lifecycles, authentication, idempotency
                and merchant integrations.
              </p>

            </article>

          </div>

        </section>


        {/* SKILLS */}

        <section
          id="skills"
          className="section section-container"
        >

          <p className="eyebrow">
            03 · TOOLKIT
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
            04 · SELECTED WORK
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


        {/* STRENGTHS */}

        <section className="section section-container">

          <p className="eyebrow">
            05 · WHAT I BRING
          </p>

          <div className="strengths">

            <div>
              <strong>
                APIs
              </strong>

              <span>
                Design & troubleshooting
              </span>
            </div>

            <div>
              <strong>
                Payments
              </strong>

              <span>
                Transaction lifecycle
              </span>
            </div>

            <div>
              <strong>
                Cloud
              </strong>

              <span>
                AWS & DevOps
              </span>
            </div>

            <div>
              <strong>
                Support
              </strong>

              <span>
                Production problem solving
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
            06 · CONTACT
          </p>

          <h2>
            Let's build something
            <span> reliable.</span>
          </h2>

          <p className="hero-description">
            Open to backend engineering, technical support and
            API/payment technology opportunities.
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
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </section>

      </main>


      <footer>

        © {new Date().getFullYear()}
        {" "}
        Bivhor Nirola · Built with React & TypeScript

      </footer>

    </div>
  );
}

export default App;
