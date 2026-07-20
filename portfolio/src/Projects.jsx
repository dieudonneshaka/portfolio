import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    category: "PRODUCER DESIGN",
    tittle: "LUMEN  ANALYTICS",
    discraption: "A dark-mode analytics dashboard turning dense data into calm, legible insight",
    imageUrl: "favicon.svg"

  },
  {
    id: 2,
    category: "BAND IDENTINTY",
    tittle: " MAISON NOIR ",
    discraption: "Foil-stamped identity system for a boutique fragrance house rooted in restraint",
    imageUrl: "3e6d367322bd5ef511216c3576dfa4e0.png"
  },
  {
    id: 3,
    category: "WEB EXPERIANCE",
    tittle: "VOLAIR STORE",
    discraption: "an immersive e-commerce flagship balancing auditorial storytelling with conversion",
    imageUrl: "3e6d367322bd5ef511216c3576dfa4e0.png"
  },
  {
    id: 4,
    category: "MOBILE APP",
    tittle : "AURUM Finance",
    discraption: "A weather app that makes every interaction feel considired  private premium",
    imageUrl: "3e6d367322bd5ef511216c3576dfa4e0.png"

  }
];


const Projects = () => {
  return (
    <div className="projects">
      <div className="project">  
      <p className='jay'>SELECTED PROJECTS</p>  
      <h2 className='left'>FEATURED WORK</h2>

      </div>
      <a href="#all" className="right"> All projects</a>
    </div>
   
  );
};



export default Projects;