

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
        <span className="dieu">.</span> AVAIBLE FOR WORK
      </button>

      <h1 className="h1">Designing the <br/> Extraordinary</h1>

      <p className="p">
        I'm  Ngororano Dieudonne, a Software Engineering student <br/>
        at Metropolia building code, products, and digital <br/>
        experiences with precision and a touch of light.
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

const Pic = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-card">
        <img 
          src="favicon.svg" 
          alt="Portrait of woman" 
          className="hero-img"
        />
        <div className="hero-card-overlay"></div>
      </div>
    </section>
  )
}




const App = () => {
  return (
    <>
      <Navbar />
      <Work />
      <Pic />
      
      
    </>
  )
}

export default App


