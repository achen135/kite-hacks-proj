import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-container'>
        <div className='sidebar-content'>
          <div className='sidebar-account'>
            <Link to='/kite-hacks-proj/account'><img className='sidebar-icon' id='sidebar-account' src="src\assets\icons\account.png" alt="Account"/></Link>
          </div>
          <div className='sidebar-map'>
            <Link to='/kite-hacks-proj/map'><img className='sidebar-icon' id='sidebar-map' src="src\assets\icons\map.png" alt="Map" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar