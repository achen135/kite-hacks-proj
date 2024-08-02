import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/home/Landing'
import Auth from './components/Auth'
import Account from './pages/Main App/Account/Account'
import MapPage from './pages/Main App/Map/MapPage'
import MainLayout from './components/MainAppLayout/MainLayout'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='kite-hacks-proj' element={<Landing/>}/>
        <Route path='kite-hacks-proj/auth' element={<Auth/>}/>

        <Route element={<MainLayout/>}>
          <Route path='kite-hacks-proj/account' element={<Account/>}/>
          <Route path='kite-hacks-proj/map' element={<MapPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>  
  )
}

export default App