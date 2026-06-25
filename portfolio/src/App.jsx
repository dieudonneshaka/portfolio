import './App.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-logo"><span className="nav-logo-dot" />your.name</div>
    <div className="nav-links-wrapper">
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <button className="nav-cta">Let's talk ↗</button>
  </nav>
)

const PhotoCard = () => (
  <div className="photo-card">
    <div className="photo-inner">
      <div className="photo-bg">
        <div className="glow1" /><div className="glow2" />
        <div className="avatar">YN</div>
      </div>
      <div className="card-footer">
        <div>
          <div className="footer-label">Currently</div>
          <div className="footer-value">Building full-stack apps</div>
        </div>
        <div className="footer-tag">v.2026</div>
      </div>
    </div>
    <div className="badge-tl">
      <div className="badge-label">Shipping since</div>
      <div className="badge-year">2024</div>
    </div>
    <div className="badge-tr"><span className="open-dot" />Open to new work</div>
  </div>
)

const projects = [
  { emoji: '🛒', bg: '#0d0d1a', title: 'E-commerce Platform', tags: ['React', 'Node.js', 'MongoDB'], desc: 'Full-stack shop with cart, auth, and payments.' },
  { emoji: '📊', bg: '#0d1a0d', title: 'Data Dashboard', tags: ['React', 'D3.js', 'REST API'], desc: 'Real-time analytics with charts and live updates.' },
  { emoji: '💬', bg: '#1a0d0d', title: 'Chat App', tags: ['React', 'Socket.io', 'Express'], desc: 'Real-time messaging with rooms and auth.' },
  { emoji: '📝', bg: '#0d1a1a', title: 'Blog Platform', tags: ['React', 'Node.js', 'PostgreSQL'], desc: 'Full-featured blog with markdown and comments.' },
]

const skills = [
  ['React', 'Frontend'], ['Node.js', 'Backend'],
  ['JavaScript', 'Language'], ['MongoDB', 'Database'],
  ['PostgreSQL', 'Database'], ['Git', 'Version control'],
]

const experience = [
  { year: '2024 — now', role: 'Full-Stack Developer', company: 'Freelance', desc: 'Building web apps while studying Full Stack Open at University of Helsinki.' },
  { year: '2023', role: 'Frontend Developer', company: 'Startup Project', desc: 'Built a React dashboard handling UI and REST API integration.' },
  { year: '2022', role: 'Web Developer Intern', company: 'Local Agency', desc: 'Developed client websites using HTML, CSS, and JavaScript.' },
]

const App = () => (
  <div>
    <Navbar />

    {/* HERO */}
    <section className="hero">
      <div className="hero-left">
        <div className="status-badge"><span className="status-dot" />Available for new projects</div>
        <h1 className="headline">Software for<br />the <span className="dim">edges</span><br />of what's<br />possible.</h1>
        <p className="sub">I'm <strong>Your Name</strong> — a full-stack developer building resilient backends, thoughtful interfaces, and the developer tools that connect them.</p>
        <div className="actions">
          <button className="btn-white">See selected work ↗</button>
          <button className="btn-dark">Get in touch</button>
        </div>
        <div className="meta">
          <span className="meta-item">📍 Helsinki, Finland</span>
          <span className="meta-item">⚡ Full-Stack Developer</span>
        </div>
      </div>
      <div className="hero-right"><PhotoCard /></div>
    </section>

    {/* WORK */}
    <section className="section" id="work">
      <div className="section-label">Selected work</div>
      <div className="section-title">Projects I've built</div>
      <div className="work-grid">
        {projects.map(p => (
          <div className="work-card" key={p.title}>
            <div className="work-card-img" style={{ background: p.bg }}>{p.emoji}</div>
            <div className="work-card-body">
              <div className="work-card-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="work-card-title">{p.title}</div>
              <div className="work-card-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ABOUT */}
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-text">
          <div className="section-label">About me</div>
          <div className="section-title">I build things for the web</div>
          <p>I'm a full-stack developer currently studying at the <strong>University of Helsinki</strong>, working through the Full Stack Open course.</p>
          <p>I love building clean, fast, and thoughtful interfaces — and the backends that power them.</p>
        </div>
        <div className="skills-grid">
          {skills.map(([name, cat]) => (
            <div className="skill-item" key={name}>{name}<span>{cat}</span></div>
          ))}
        </div>
      </div>
    </section>

    {/* EXPERIENCE */}
    <section className="section" id="experience">
      <div className="section-label">Experience</div>
      <div className="section-title">Where I've worked</div>
      <div className="exp-list">
        {experience.map(e => (
          <div className="exp-item" key={e.role}>
            <div className="exp-year">{e.year}</div>
            <div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <div className="exp-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CONTACT */}
    <section className="contact" id="contact">
      <div className="section-label" style={{ textAlign: 'center', marginBottom: '16px' }}>Contact</div>
      <div className="contact-title">Let's work<br />together</div>
      <div className="contact-sub">Open to new projects and opportunities.</div>
      <div className="contact-actions">
        <button className="btn-white">Send me an email ↗</button>
        <button className="btn-dark">View GitHub</button>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="footer">
      <div>© 2026 Your Name</div>
      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </footer>
  </div>
)

export default App