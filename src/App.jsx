import { useEffect, useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  ExternalLink,
  Mail,
  MessageCircle,
  Smartphone,
  Sparkles,
  Video,
  Zap,
  X,
} from "lucide-react";

import "./App.css";

const CONTACTS = {
  email: "nithishkumar12187@gmail.com",
  github: "https://github.com/nithishkumar12187-crypto",
  upwork: "https://www.upwork.com/freelancers/~01d0de6fd5d61cbacd",
};

const projects = [
  {
    number: "01",
    type: "video",
    category: "AI / VIDEO",
    title: "AI Video Editor",
    shortDescription:
      "An AI-assisted editing system designed to understand footage, scenes, speech, and editing intent.",
    description:
      "A personal AI video editing project exploring automated video analysis, scene detection, frame extraction, speech understanding, FFmpeg processing, and AI-assisted editing workflows.",
    technologies: [
      "Python",
      "AI",
      "FFmpeg",
      "Computer Vision",
      "DaVinci Resolve",
    ],
    status: "In development",
    year: "2026",
    role: "Solo developer",
    challenge:
      "Professional editing involves repeatedly watching footage, finding useful moments, organizing scenes, choosing edits, and processing media.",
    solution:
      "Build an intelligent pipeline that analyzes footage first and creates structured information that can support an AI-assisted editing workflow.",
    result:
      "A growing prototype covering video probing, scene detection, frame extraction, and AI-oriented video analysis.",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    number: "02",
    type: "education",
    category: "EDUCATION / SOFTWARE",
    title: "SUGM Student Progress",
    shortDescription:
      "A digital student progress system for marks, reports, faculty workflows, and parent communication.",
    description:
      "A software platform being designed around the workflow of an educational institution, from marks entry and examinations to reports and parent communication.",
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "Authentication",
      "Mobile UI",
    ],
    status: "In development",
    year: "2026",
    role: "Product developer",
    challenge:
      "Manual marks entry and report preparation can create repetitive work and separate information across files and workflows.",
    solution:
      "Create a centralized system where faculty, principal-level users, and parents can work from structured student progress information.",
    result:
      "An active product prototype with student, faculty, examination, and reporting workflows being built.",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    number: "03",
    type: "attendance",
    category: "MOBILE APP",
    title: "Staff Attendance System",
    shortDescription:
      "A digital attendance workflow for staff authentication, check-in, logout, and administrative monitoring.",
    description:
      "A mobile application concept designed to replace manual staff attendance processes with authenticated digital workflows and administrative visibility.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "AsyncStorage",
      "Mobile UI",
    ],
    status: "Prototype",
    year: "2026",
    role: "App developer",
    challenge:
      "Manual attendance collection can be slow and makes it harder to maintain consistent individual attendance records.",
    solution:
      "Create a role-based mobile workflow where each staff member has an individual session and attendance history.",
    result:
      "A functioning prototype exploring authenticated staff attendance and administrative monitoring.",
    github: "#",
    demo: "#",
    featured: false,
  },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Professional websites and web applications designed around a business goal.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications with practical user experiences.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "AI-powered tools, automation, and intelligent workflows for real problems.",
  },
  {
    icon: Video,
    title: "Video Technology",
    description:
      "Video analysis, media processing, automation, and AI-assisted editing systems.",
  },
];

const skills = [
  "React",
  "React Native",
  "Expo",
  "JavaScript",
  "Python",
  "AI",
  "FFmpeg",
  "Firebase",
  "Supabase",
  "Git",
  "GitHub",
  "REST APIs",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Understand the problem, users, constraints, and desired outcome.",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn the idea into a working product with a clean user experience.",
  },
  {
    number: "03",
    title: "Improve",
    text: "Test, refine, and continuously improve the product based on use.",
  },
];

function ProjectPreview({ type }) {
  if (type === "video") {
    return (
      <div className="preview-stage video-stage">
        <div className="preview-shell">
          <div className="preview-topbar">
            <div className="preview-brand">AI EDITOR</div>

            <div className="preview-top-actions">
              <span>Analyze</span>
              <span>Timeline</span>
              <button type="button">Export</button>
            </div>
          </div>

          <div className="editor-layout">
            <aside className="editor-sidebar">
              <span className="active-sidebar">Media</span>
              <span>Scenes</span>
              <span>Audio</span>
              <span>Effects</span>
            </aside>

            <div className="editor-main">
              <div className="editor-preview">
                <div className="preview-play">▶</div>
                <div className="preview-copy">
                  <small>AI ANALYSIS</small>
                  <strong>Scene 03</strong>
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-label">00:42</div>

                <div className="timeline-track">
                  <span className="timeline-fill" />
                  <span className="timeline-marker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "education") {
    return (
      <div className="preview-stage education-stage">
        <div className="dashboard-shell">
          <div className="dashboard-topbar">
            <div>
              <small>SUGM</small>
              <strong>Student Progress</strong>
            </div>

            <span className="dashboard-user">PRINCIPAL</span>
          </div>

          <div className="dashboard-layout">
            <aside className="dashboard-sidebar">
              <span className="active-nav">Overview</span>
              <span>Students</span>
              <span>Marks</span>
              <span>Exams</span>
              <span>Reports</span>
            </aside>

            <div className="dashboard-main">
              <div className="dash-heading">
                <div>
                  <small>ACADEMIC OVERVIEW</small>
                  <strong>Senior MPC</strong>
                </div>

                <span>2026–27</span>
              </div>

              <div className="metric-row">
                <div>
                  <small>Students</small>
                  <strong>650</strong>
                </div>

                <div>
                  <small>Reports</small>
                  <strong>8.2K</strong>
                </div>

                <div>
                  <small>Exams</small>
                  <strong>13</strong>
                </div>
              </div>

              <div className="marks-panel">
                <div className="panel-title">
                  <span>Recent performance</span>
                  <span>View all</span>
                </div>

                <div className="mini-chart">
                  <span style={{ height: "34%" }} />
                  <span style={{ height: "48%" }} />
                  <span style={{ height: "43%" }} />
                  <span style={{ height: "66%" }} />
                  <span style={{ height: "58%" }} />
                  <span style={{ height: "76%" }} />
                  <span style={{ height: "70%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-stage attendance-stage">
      <div className="attendance-shell">
        <div className="attendance-topbar">
          <div>
            <small>SUGM STAFF</small>
            <strong>Attendance</strong>
          </div>

          <span className="online-badge">LIVE</span>
        </div>

        <div className="attendance-body">
          <div className="attendance-card hero-attendance">
            <small>TODAY</small>
            <strong>24 / 28</strong>
            <span>Staff checked in</span>
          </div>

          <div className="attendance-grid">
            <div className="attendance-card">
              <small>PRESENT</small>
              <strong>24</strong>
            </div>

            <div className="attendance-card">
              <small>ABSENT</small>
              <strong>04</strong>
            </div>
          </div>

          <div className="staff-row">
            <div className="staff-avatar">RK</div>

            <div>
              <strong>Ramesh Kumar</strong>
              <span>Checked in · 07:31 AM</span>
            </div>

            <b>Present</b>
          </div>

          <div className="staff-row">
            <div className="staff-avatar">PS</div>

            <div>
              <strong>Priya S.</strong>
              <span>Checked in · 07:36 AM</span>
            </div>

            <b>Present</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.body.classList.add("intro-lock");

    const timer = window.setTimeout(() => {
      setIntroVisible(false);
      document.body.classList.remove("intro-lock");
    }, 4200);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("intro-lock");
    };
  }, []);

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleProjectMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 1.7;
    const rotateX = ((centerY - y) / centerY) * 1.7;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleProjectMouseLeave = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleHireSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Freelance project enquiry from ${formData.name || "Portfolio visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`
    );

    window.location.href =
      `mailto:${CONTACTS.email}?subject=${subject}&body=${body}`;
  };

  const skipIntro = () => {
    setIntroVisible(false);
    document.body.classList.remove("intro-lock");
  };

  return (
    <>
      {introVisible && (
        <div className="cinematic-intro">
          <div className="cinematic-noise" />

          <div className="intro-flare intro-flare-one" />
          <div className="intro-flare intro-flare-two" />

          <div className="intro-top">
            <span>NITHISH KUMAR</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          <div className="intro-center">
            <div className="intro-kicker">DIGITAL PRODUCT DEVELOPER</div>

            <div className="intro-name">
              <span>NITHISH</span>
              <span>KUMAR</span>
            </div>

            <div className="intro-subtitle">
              AI · WEB · MOBILE · AUTOMATION
            </div>
          </div>

          <div className="intro-bottom">
            <div className="intro-progress">
              <div className="intro-progress-fill" />
            </div>

            <div className="intro-bottom-row">
              <span>BUILDING IDEAS INTO SOFTWARE</span>
              <span>ENTERING PORTFOLIO</span>
            </div>
          </div>

          <button
            className="intro-skip"
            type="button"
            onClick={skipIntro}
          >
            SKIP INTRO
          </button>

          <div className="intro-curtain intro-curtain-left" />
          <div className="intro-curtain intro-curtain-right" />
        </div>
      )}

      <div className="site-shell">
        <div className="cursor-spotlight" />
        <div className="noise" />

        <header className="navbar">
          <a className="brand" href="#home">
            <span>NK</span>
            <i>.</i>
          </a>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Hire me
            <ArrowUpRight size={16} />
          </a>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-grid" />
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="hero-inner">
              <div className="availability reveal reveal-delay-1">
                <span className="status-dot" />
                Available for freelance work
              </div>

              <div className="hero-kicker reveal reveal-delay-2">
                <Sparkles size={15} />
                AI · WEB · MOBILE · AUTOMATION
              </div>

              <h1 className="hero-title reveal reveal-delay-3">
                I turn ambitious
                <span> ideas into</span>
                <strong>working software.</strong>
              </h1>

              <p className="hero-copy reveal reveal-delay-4">
                I'm <strong>Nithish Kumar</strong>, a developer focused on
                building modern websites, mobile applications, AI-powered
                products, and useful automation systems.
              </p>

              <div className="hero-actions reveal reveal-delay-4">
                <a className="button button-primary" href="#work">
                  Explore my work
                  <ArrowUpRight size={17} />
                </a>

                <a className="button button-secondary" href="#contact">
                  Hire me
                </a>
              </div>

              <div className="hero-bottom reveal reveal-delay-4">
                <div className="hero-stat">
                  <span>FOCUS</span>
                  <strong>Real-world products</strong>
                </div>

                <div className="hero-stat">
                  <span>BASED IN</span>
                  <strong>India</strong>
                </div>

                <a className="scroll-link" href="#work">
                  Scroll to explore
                  <ArrowDown size={15} />
                </a>
              </div>
            </div>
          </section>

          <section className="statement" data-reveal>
            <div className="statement-line" />

            <p>
              I don't just want to make software that looks good.
              <span> I want to build software that is useful.</span>
            </p>

            <div className="statement-line" />
          </section>

          <section className="section work-section" id="work">
            <div className="section-header" data-reveal>
              <div>
                <span className="section-number">01 / WORK</span>
                <h2>Selected projects.</h2>
              </div>

              <p>
                Real concepts, real software, and products currently being
                developed.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article
                  className={`project-card ${
                    project.featured ? "project-featured" : ""
                  }`}
                  key={project.number}
                  data-reveal
                  onMouseMove={handleProjectMouseMove}
                  onMouseLeave={handleProjectMouseLeave}
                >
                  <div className="project-visual">
                    <ProjectPreview type={project.type} />

                    <div className="project-number">{project.number}</div>
                  </div>

                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>

                      {project.featured && (
                        <span className="featured-label">
                          <Zap size={12} />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.shortDescription}</p>

                    <div className="technology-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <button
                      className="project-link"
                      type="button"
                      onClick={() => setSelectedProject(project)}
                    >
                      View case study
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section services-section" id="services">
            <div className="section-header" data-reveal>
              <div>
                <span className="section-number">02 / SERVICES</span>
                <h2>What I can build.</h2>
              </div>

              <p>
                Product-focused development for websites, mobile apps, AI, and
                automation.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.title}
                    data-reveal
                  >
                    <div className="service-top">
                      <span>0{index + 1}</span>

                      <div className="service-icon">
                        <Icon size={20} />
                      </div>
                    </div>

                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>

                    <ArrowUpRight className="service-arrow" size={18} />
                  </article>
                );
              })}
            </div>
          </section>

          <section className="about-section" id="about">
            <div className="about-label" data-reveal>
              <span className="section-number">03 / ABOUT</span>
            </div>

            <div className="about-main" data-reveal>
              <p className="about-lead">
                I'm interested in the space where{" "}
                <span>technology, creativity, and real problems</span> meet.
              </p>

              <div className="about-columns">
                <p>
                  I enjoy taking an idea from a rough concept and turning it
                  into something people can actually use. My work currently
                  focuses on software development, artificial intelligence,
                  automation, and creative technology.
                </p>

                <p>
                  I'm constantly learning by building. Instead of studying
                  technologies only in isolation, I prefer combining them
                  inside real projects and solving problems along the way.
                </p>
              </div>

              <div className="skill-area">
                <span className="skill-heading">TECHNOLOGIES</span>

                <div className="skill-list">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section process-section">
            <div className="section-header" data-reveal>
              <div>
                <span className="section-number">04 / PROCESS</span>
                <h2>How I work.</h2>
              </div>

              <p>
                A simple process keeps projects focused and avoids unnecessary
                complexity.
              </p>
            </div>

            <div className="process-grid">
              {process.map((item) => (
                <article
                  className="process-card"
                  key={item.number}
                  data-reveal
                >
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="freelance-section" data-reveal>
            <div className="freelance-glow" />

            <span className="section-number">LET'S BUILD</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              Tell me what you're trying to build, what problem you're trying
              to solve, or what you'd like to improve.
            </p>

            <a className="button button-primary" href="#contact">
              Start a project
              <ArrowUpRight size={17} />
            </a>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-left" data-reveal>
              <span className="section-number">05 / CONTACT</span>

              <h2>Let's talk.</h2>

              <p>
                Tell me what you're building and what you need help with. The
                form opens a pre-filled email so you can send the details
                quickly.
              </p>

              <div className="contact-note">
                <Check size={16} />
                <span>
                  Clear project details make the first conversation easier.
                </span>
              </div>
            </div>

            <div className="contact-right" data-reveal>
              <form className="hire-form" onSubmit={handleHireSubmit}>
                <div className="form-row">
                  <label htmlFor="name">
                    Your name
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <label htmlFor="email">
                    Email
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>

                <label htmlFor="message">
                  Project details
                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me what you want to build..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <button
                  className="button button-primary form-submit"
                  type="submit"
                >
                  Send project enquiry
                  <Mail size={17} />
                </button>
              </form>
            </div>
          </section>

          <section className="contact-links" data-reveal>
            <a className="contact-item" href={`mailto:${CONTACTS.email}`}>
              <div>
                <span>Email</span>
                <strong>{CONTACTS.email}</strong>
              </div>

              <Mail size={20} />
            </a>

            <a
              className="contact-item"
              href={CONTACTS.github}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>GitHub</span>
                <strong>nithishkumar12187-crypto</strong>
              </div>

              <ExternalLink size={20} />
            </a>

            <a
              className="contact-item"
              href={CONTACTS.upwork}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>Freelance</span>
                <strong>Upwork profile</strong>
              </div>

              <ExternalLink size={20} />
            </a>
          </section>

          <section className="final-strip" data-reveal>
            <div>
              <Check size={17} />
              <span>Clear communication</span>
            </div>

            <div>
              <Check size={17} />
              <span>Clean interfaces</span>
            </div>

            <div>
              <Check size={17} />
              <span>Practical solutions</span>
            </div>

            <div>
              <Check size={17} />
              <span>Continuous improvement</span>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div>
            <a className="brand footer-brand" href="#home">
              <span>NK</span>
              <i>.</i>
            </a>

            <p>Building useful things with technology.</p>
          </div>

          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Nithish Kumar
          </div>
        </footer>

        <a className="floating-contact" href="#contact">
          <MessageCircle size={18} />
          <span>Let's talk</span>
        </a>

        {selectedProject && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <div
              className="project-modal"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} case study`}
            >
              <button
                className="modal-close"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>

              <div className="modal-preview">
                <ProjectPreview type={selectedProject.type} />
              </div>

              <div className="modal-top">
                <div>
                  <span className="section-number">
                    {selectedProject.number} / CASE STUDY
                  </span>

                  <div className="modal-category">
                    {selectedProject.category}
                  </div>
                </div>

                <span className="modal-status">
                  {selectedProject.status}
                </span>
              </div>

              <h2>{selectedProject.title}</h2>

              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="modal-facts">
                <div>
                  <span>YEAR</span>
                  <strong>{selectedProject.year}</strong>
                </div>

                <div>
                  <span>ROLE</span>
                  <strong>{selectedProject.role}</strong>
                </div>

                <div>
                  <span>STATUS</span>
                  <strong>{selectedProject.status}</strong>
                </div>
              </div>

              <div className="modal-grid">
                <div className="modal-block">
                  <span>THE CHALLENGE</span>
                  <p>{selectedProject.challenge}</p>
                </div>

                <div className="modal-block">
                  <span>THE APPROACH</span>
                  <p>{selectedProject.solution}</p>
                </div>

                <div className="modal-block modal-block-wide">
                  <span>WHAT EXISTS SO FAR</span>
                  <p>{selectedProject.result}</p>
                </div>
              </div>

              <div className="modal-tech">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  className="button button-primary"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (selectedProject.github === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  GitHub
                  <ExternalLink size={16} />
                </a>

                <a
                  className="button button-secondary"
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => {
                    if (selectedProject.demo === "#") {
                      event.preventDefault();
                    }
                  }}
                >
                  Live demo
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
