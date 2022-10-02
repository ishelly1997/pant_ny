import React from 'react';
import logo1 from '../../assets/diner-pets.png'

import logo2 from '../../assets/let-it-ring.png'
import '../../assets/style.css'

function Projects() {

  return (
    <div className='project-container'><div id='project-card'>
      <h1>Diner Pets</h1>
      <img id="logo1"src={logo1} alt='logo'/>
      <div/>
        <div/>
    </div>
    <div id='project-card'>

    <h1>Let It Ring</h1>
    <img id="logo3" src={logo2} alt="logo"/>
    <div/>
    <div/>
    </div>    
    <div id='project-card'>

        <h1>More to Come</h1>
      </div></div>
      
    );
}

export default Projects;