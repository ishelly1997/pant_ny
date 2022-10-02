import React, { useState } from 'react';
import '../../assets/style.css'
function Nav() {
/* const [tabs] = useState([
  {
    name: 'about', description: 'Get to know us'},
  { name: 'music', description: 'Check out our tunes' },
  { name: 'tour', description: 'See where we play next' },
  { name: 'contact', description: 'Fill out a contact form to get in touch with us' },
]);
const [currentTab, setCurrentTab] = useState(tabs[0]); */


  return (

  <nav className='nav-bar'>
  
      <li className="about">
        <a href="About">About</a>
      </li>
      <li>
        <a href="Music">Music</a>
        </li>
        <li>
          <a href="Events">Events</a>
        </li>
  
  </nav>

  );
}

export default Nav;