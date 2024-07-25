import React, { useState } from 'react'
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";
import './Auth.css'

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = async () => {
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      } catch(err) {
        console.error(err)
      }
    }

  return (
    <div className='auth-screen-wrapper'>
      <div className='auth-modal-container'>
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Auth