import React from 'react'
import './Mission.css'

const Mission = () => {
  return (
    <div className='mission-section-wrapper' id='mission'>
      <section className='mission-container'>
        <div class="custom-shape-divider-top-1722479496">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
            </svg>
          </div>
          <div className='mission-img-container'>
              <img src="./images/missionpic.jpg"/>
          </div>
          <div className='mission-text-container'>
              <h1>Our Mission</h1>
              <p>At Food For Everyone, we aim to create a more equitable and sustainable food distribution system. 
                We strive to bridge the gap between surplus food from local businesses—such as restaurants 
                and grocery stores—and the critical needs of food donation centers, homeless shelters, and food banks in our communities.</p>
          </div>
      </section>
    </div>
  )
}

export default Mission