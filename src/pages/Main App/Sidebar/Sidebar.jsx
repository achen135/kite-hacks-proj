import React from 'react'
import './Sidebar.css'

const toggleMenu = () => {
  console.log("Clicked")
  const sb = document.getElementById("sb")
  console.log(getComputedStyle(sb).transform )
  
  if(getComputedStyle(sb).transform == "matrix(1, 0, 0, 1, -78.6, 0)"){
    sb.style.transform = "translateX(0)"
  }
  else {
    sb.style.transform = "translateX(-20vw)"
  }
  
  
}

const Sidebar = () => {
  return (
    <>
      <div className='sb-hamburger-container'>
        <button onClick={toggleMenu}>
          <img src='src\assets\menu.png' alt="=" />
        </button>
      </div>
      <div className='sidebar-container' id='sb'>
        <div className='sb-account'>
            account
        </div>
        <div className='sb-map'>
            map
        </div>
      </div>
    </>

  )
}

export default Sidebar