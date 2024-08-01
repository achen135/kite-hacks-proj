import React from 'react'
import './Impact.css'

const Impact = () => {
  return (
    <div className='impact-bg' id='impact'>
    <section className='impact-container'>
        <h1>Our Impact</h1>
        <div className='impact-card-container'>
        <div className='impact-card' id='card1'>
            <h1>Helping the Climate</h1>
            <p>Food waste accounts for about 8-10% of global greenhouse gas emissions. 
            Reducing food waste could mitigate up to 4.4 gigatons of CO2 equivalent annually.</p>
        </div>
        <div className='impact-card' id='card2'>
            <h1>Solving the food crisis</h1>
            <p>In developed countries, up to 40% of food is wasted, which, if redistributed, could feed around 2 billion people 
            , more than twice the number of undernourished individuals worldwide.</p>
        </div>
        <div className='impact-card' id='card3'>
            <h1>The Price of Food Waste</h1>
            <p>The annual economic cost of food waste is estimated to be about $1 trillion globally. 
            Reducing food waste through efficient distribution can save substantial amounts of money for businesses and governments.</p>
        </div>
        </div>
    </section>
    </div>
  )
}

export default Impact