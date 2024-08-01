import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-bg'>
       <div className='hero-content-container'>
          <h1>EVERYONE DESERVES TO EAT</h1>
          <div className='hero-cta'> 
          <p>Help solve our worldwide food distribution crisis today</p>
          <Link to='auth' className='hero-sign-in'>
              <button>Start Helping</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero