import React, { useState } from 'react'
import './Heading.css'

const Heading = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setSidebarOpen(!sidebarOpen);
    }


  return (
    <div className='header-container'>
        <a href="../"><img src="./images/f4elogo.png" alt="logo" width='65' height='65'/></a>

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
              <img src="./icons/close.png" alt="close" />
            </button>
        </div>
        <button className='header-menu' onClick={toggleMenu}>
            <img src="./icons/menu.png" alt="menu"/>
        </button>


    </div>   
  )
}

export default Heading