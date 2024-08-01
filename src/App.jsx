import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/home/Landing'
import Auth from './components/Auth'
import Account from './pages/Main App/Account/Account'
import './App.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='kite-hacks-proj' element={<Landing/>}/>
        <Route path='kite-hacks-proj/auth' element={<Auth/>}/>
        <Route path='kite-hacks-proj/account' element={<Account/>}/>
      </Routes>
    </BrowserRouter>  
  )
}

export default App