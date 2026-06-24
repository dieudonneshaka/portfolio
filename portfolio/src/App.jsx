import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Navbar = () => {
  
  return(
        <nav className="navbar">
          <div className="log">
          </div>
          
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#speaking">Speaking</a></li>
        <li><a href="#writing">Writing</a></li>
        <li><a href="#uses">Uses</a></li>
        <button> 
        <li><a href="#work">Work</a></li>
        <li><a href="#about">Abouut</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#contact">Contact</a></li>
        </button>
      </ul>
    </nav>


    
  )
}

const App = () => {
  return (

    <div className= "page" >
      <Navbar />

      <h1>welcome home</h1>
      <section className="yeye">
        <div className="hero"></div>
        <ul className="socials">
          <li><a href="#We">we</a></li>
          <li><a href="#DE">DE</a></li>
          <li><a href="#LI">LI</a></li>

        </ul>


      </section>
      

    </div>
  )
}



export default App