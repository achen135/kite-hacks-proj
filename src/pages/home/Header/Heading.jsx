import React, { useState } from 'react'
import './Heading.css'

const Heading = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setSidebarOpen(!sidebarOpen);
    }


  return (
    <div className='header-container'>
        <ul className='header-sitemap'>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={`sidebar ${sidebarOpen ? 'Open' : ''}`}>
            <a href="#mission" onClick={toggleMenu}>MISSION</a>
            <a href="#impact" onClick={toggleMenu}>STORY</a>
            <a href="#contact" onClick={toggleMenu}>STATS</a>
            <button onClick={toggleMenu}>
              <img src="src\assets\icons\close.png" alt="close" />
            </button>
        </div>
        <button className='header-menu' onClick={toggleMenu}>
            <img src="src\assets\icons\menu.png" alt="menu"/>
        </button>


    </div>   
  )
}

export default Heading