import React from 'react';
import avatar from '../../assets/pant-circle-icon.png';
import '../../assets/style.css'
function About() {

    return (
      <section>
          <h1>About</h1>
          {/* avatar image */}
          <img className='avatar' src={avatar} alt='PANT'/>
          <h4>bio</h4>
          <p>
          </p>
          <p>Pant is a New York based rock band made up by members Lucien Shelly, Morgan Davis, and Maddy Edwards.</p>
          <p>Pant's mission is take the great leap forward in rock and roll, creating a familiar, but unique, modern sound.</p>
          <p>More to pantics to come</p>
          <p>Peace, Love, and Pant </p>
      </section>
      );
  }
  
  export default About;