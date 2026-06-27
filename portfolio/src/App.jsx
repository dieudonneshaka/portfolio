const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-nav">ND.</div>

      <div className="nav-wrap">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <button className="nav-active">Let's Talk</button>
    </nav>
  )
}

const Work = () => {
  return (
    <section id="work" className="work">
      <button className="button">
        AVAILABLE FOR WORK
      </button>

      <h1>Designing the Extraordinary</h1>
      

      <p>
        I'm Ngororano Dieudonne, a Software Engineering student
        passionate about building modern web and mobile applications.
      </p>

      <div className="work-buttons">
        <button className="button-1">
          View Selected Work
        </button>

        <button className="button-2">
          Get in Touch
        </button>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <Work />
    </>
  )
}

export default App