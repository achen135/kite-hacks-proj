import React from 'react'
import './Account.css'

// Future Implementation: pulling user info (similar to how its done in info.jsx) needs to be done here
// Info only accessible after a successful sign in
// have sign in option available on landing page
// get react-router installed and have it so that accessing the app is only done through signing in


const Account = () => {
  return (
    <div className='account-container'>
      <div className='account-info-container'>
        <h1>Account Information</h1>
        <p>Name: Test</p>
      </div>
      <div className='account-stats-container'>
        
      </div>
    </div>
  )
}

export default Account