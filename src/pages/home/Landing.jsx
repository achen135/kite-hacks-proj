import React from 'react'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Impact from './Impact/Impact'
import Contact from './Contact/Contact'
import Heading from './Header/Heading'

const Landing = () => {
  return (
    <>
     <Heading/>
     <Hero/>
     <Mission/> 
     <Impact/>
     <Contact/>
    </>
  )
}

export default Landing