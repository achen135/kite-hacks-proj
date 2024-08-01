import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-bg'>
       <div className='hero-content-container'>
          <h1>EVERYONE DESERVES TO EAT</h1>
          <div className='hero-cta'> 
          <p>Help solve our worldwide food distribution crisis today</p>
          <button>Start Helping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero