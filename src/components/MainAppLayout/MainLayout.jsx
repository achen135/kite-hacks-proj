import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/Main App/Sidebar/Sidebar'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className='mainapp-navbar'>
      <Sidebar />
      <div className='main-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
