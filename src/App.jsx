import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  ExternalLink,
  Code2,
  Menu,
  X,
  Download,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";
import "./App.css";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

/* =========================================================
   BRAND ICONS
========================================================= */

function GithubIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TelegramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsappIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = {
  email: "mailto:kenan.mehoub1@gmail.com",
  emailText: "kenan.mehoub1@gmail.com",
  github: "https://github.com/kenanmehoub1",
  githubText: "github.com/kenanmehoub1",
  linkedin: "https://linkedin.com/in/kenan-mehoub-5ba58332b",
  linkedinText: "linkedin.com/in/kenan-mehoub-5ba58332b",
  facebook: "https://www.facebook.com/share/1K3sWENu8a/",
  facebookText: "facebook.com/kenan.mehoub",
  instagram: "https://www.instagram.com/kenan_mehoub",
  instagramText: "instagram.com/kenan_mehoub",
  telegram: "https://t.me/kenan_mehoub",
  telegramText: "t.me/kenan_mehoub",
  whatsapp: "https://wa.me/963998187380",
  whatsappText: "+963 998 187 380",
};

/* =========================================================
   PROJECTS DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description:
      "A modern task management platform with team collaboration, real-time updates and a clean interface.",
    image: project1,
    tags: ["Laravel", "Blade", "MySQL", "Tailwind"],
    liveUrl: "https://www.zenfine1.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A fully featured e-commerce platform with secure payments, user accounts and admin dashboard.",
    image: project2,
    tags: ["Laravel", "Blade", "Filament", "MySQL"],
    liveUrl: "https://violet-chamois-504658.hostingersite.com",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  });

  const [status, setStatus] = useState("idle");

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xyezgeer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",

          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="logo">
            Kenan <span>Mehoub </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let's Talk
            <ArrowRight size={16} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>
        <section className="hero" id="home">
          <div className="hero-background">
            <div className="hero-glow glow-one"></div>
            <div className="hero-glow glow-two"></div>
          </div>

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="status-dot"></span>
                Available for new projects
              </div>

              <h1>
                Fullstack <span>Developer</span>
              </h1>

              <p className="hero-description">
                I build modern web applications with
                <strong> Laravel & React</strong>, focusing on clean code,
                performance and great user experiences.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="button button-dark">
                  View My Projects
                  <ArrowRight size={18} />
                </a>

                <a href="#contact" className="button button-outline">
                  Get In Touch
                </a>
              </div>

              <div className="hero-stack">
                <div className="stack-item">
                  <span className="laravel-mark">L</span>
                  Laravel
                </div>

                <div className="stack-divider"></div>

                <div className="stack-item">
                  <Code2 size={22} />
                  React
                </div>
              </div>
            </div>

            {/* TERMINAL */}

            <div className="terminal-wrapper">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="terminal-title">developer@portfolio</span>
                </div>

                <div className="terminal-body">
                  <div className="terminal-command">
                    <span className="green">$</span> php artisan about
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Backend</span>
                    <strong>php Laravel</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Frontend</span>
                    <strong>React / Inertia</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Styling</span>
                    <strong>Tailwind CSS</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Admin Panel</span>
                    <strong>Filament</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Database</span>
                    <strong>MySQL</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>API</span>
                    <strong>REST</strong>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span>Version Control</span>
                    <strong>Git / GitHub</strong>
                  </div>

                  <div className="terminal-ready">
                    <CheckCircle2 size={15} />
                    System ready...
                  </div>

                  <span className="terminal-cursor"></span>
                </div>
              </div>

              <div className="terminal-decoration"></div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">MY PROJECTS</span>
                <h2>Featured Projects</h2>
              </div>

              <p>
                A selection of my recent work. Each project is built with modern
                technologies and a focus on performance, scalability and clean
                code.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />

                    <div className="image-overlay">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-label">
              <span className="section-label">ABOUT ME</span>
            </div>

            <div className="about-content">
              <h2>
                I turn ideas into
                <span> reliable digital products.</span>
              </h2>

              <p>
                I'm a Fullstack Developer focused on building modern web
                applications using Laravel and React. I enjoy solving complex
                problems and creating clean, maintainable code that delivers
                real value.
              </p>

              <p>
                From backend architecture and REST APIs to responsive
                interfaces, I care about every part of the development process.
              </p>

              <div className="about-actions">
                <a
                  href="/cv.pdf"
                  download="Kenan-Mehoub-CV.pdf"
                  className="button button-dark"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section className="contact-section" id="contact">
          <div className="container contact-wrapper">
            <div className="contact-content">
              <span className="section-label">GET IN TOUCH</span>

              <h2>
                Have a project
                <span> in mind?</span>
              </h2>

              <p>
                Let's build something great together. I'm open to new
                opportunities and exciting projects.
              </p>

              <div className="contact-info">
                <a href={socialLinks.email}>
                  <div className="contact-icon">
                    <Mail size={19} />
                  </div>
                  <div>
                    <small>Email</small>
                    <span>{socialLinks.emailText}</span>
                  </div>
                </a>

                <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer">
                  <div className="contact-icon">
                    <WhatsappIcon size={19} />
                  </div>
                  <div>
                    <small>WhatsApp</small>
                    <span>{socialLinks.whatsappText}</span>
                  </div>
                </a>

                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <div className="contact-icon">
                    <GithubIcon size={19} />
                  </div>
                  <div>
                    <small>GitHub</small>
                    <span>{socialLinks.githubText}</span>
                  </div>
                </a>

                <a href={socialLinks.telegram} target="_blank" rel="noreferrer">
                  <div className="contact-icon">
                    <TelegramIcon size={19} />
                  </div>
                  <div>
                    <small>Telegram</small>
                    <span>{socialLinks.telegramText}</span>
                  </div>
                </a>

                <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                  <div className="contact-icon">
                    <FacebookIcon size={19} />
                  </div>
                  <div>
                    <small>Facebook</small>
                    <span>{socialLinks.facebookText}</span>
                  </div>
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon">
                    <InstagramIcon size={19} />
                  </div>
                  <div>
                    <small>Instagram</small>
                    <span>{socialLinks.instagramText}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* FORM */}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="button button-dark submit-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <ArrowRight size={18} />
              </button>

              {status === "success" && (
                <div className="form-message form-success">
                  ✅ Your message was sent successfully! I'll reply soon.
                </div>
              )}

              {status === "error" && (
                <div className="form-message form-error">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Kenan <span>Mehoub</span>
            </a>
            <p>Fullstack Developer</p>
            <small>Laravel × React</small>
          </div>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsappIcon size={19} />
            </a>
            <a
              href={socialLinks.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon size={19} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={19} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={19} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
            <a href={socialLinks.email} aria-label="Email">
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Kenan Mehoub. All rights reserved.</span>
          <span className="footer-status">
            <i></i>
            Available for selected projects
          </span>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}

      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="تواصل عبر واتساب"
      >
        <WhatsappIcon size={28} />
      </a>
    </div>
  );
}

export default App;
