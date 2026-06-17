import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GE</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#speaking">Speaking</a></li>
        <li><a href="#writing">Writing</a></li>
        <li><a href="#uses">Uses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <div className="page">
      <Navbar />

      <section className="hero">
        <div className="hero-text">
          <h1>Hello, I'm Dieudonne</h1>
          <p>I'm a software engineer based in Finland.</p>
          <ul className="socials">
            <li><a href="#">TW</a></li>
            <li><a href="#">GH</a></li>
            <li><a href="#">IG</a></li>
            <li><a href="#">LI</a></li>
          </ul>
        </div>

        <img
          src="."
          alt="Dieudonne"
          className="hero-image"
        />
      </section>
    </div>
  )
}



export default App