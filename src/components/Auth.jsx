import React, { useState, useEffect } from 'react'
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import './Auth.css'

const Auth = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formValidity, setFormValidity] = useState(false)

    const handlePasswordChange = (pw) => {
      if(pw.length < 8) {
        document.getElementById("auth-pw-short").style.display = "block"
        document.getElementById("auth-pw").style.border = "1px Solid rgb(255, 145, 145)"
      }
      else {
        document.getElementById("auth-pw-short").style.display = "none"
        document.getElementById("auth-pw").style.border = "none"
      }
      setPassword(pw)
    }

    const handleConfirmPassword = (pw) => {
      if(pw != password) {
        document.getElementById("auth-pw-diff").style.display = "block"
        document.getElementById("auth-pw-confirm").style.border = "1px Solid rgb(255, 145, 145)"       
      }
      else {
        document.getElementById("auth-pw-diff").style.display = "none"
        document.getElementById("auth-pw-confirm").style.border = "none"      
      }
      setConfirmPassword(pw) 
    }

    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password, )
        await updateProfile(auth.currentUser, {displayName : name})
        console.log(auth.currentUser.displayName)
      } catch(err) {
        console.error(err)
      }
    }

    const isValid = () => {
      const nameValid = name.trim() != ""
      const emailValid = email.includes("@")
      const passwordValid = password.length >= 8
      const confirmPasswordValid = confirmPassword === password

      setFormValidity(nameValid && emailValid && passwordValid && confirmPasswordValid)
    }

    useEffect(() => {
      isValid();
    }, [name, email, password, confirmPassword]);

    const signIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user
          })
      } catch(err) {
        console.error(err)
      }
    }

    const swap = () => {
      const signInSide = document.getElementById("signIn")
      const signUpSide = document.getElementById("signUp")
      const sideCover = document.getElementById("auth-side-cover")
      const coverSignIn = document.getElementById("cover-signIn")
      const coverSignUp = document.getElementById("cover-signUp")

      let signInDisplayType = getComputedStyle(signInSide).display
      let sideCoverLeft = getComputedStyle(sideCover).left

      console.log("Button Clicked")
      
      if(screen.width < 1000) {
        if(signInDisplayType == "none")
          {
            signInSide.style.display = "flex"
            signUpSide.style.display = "none"
          }
          else {
            signInSide.style.display = "none"
            signUpSide.style.display = "flex"
          }
      }
      else {
        if(sideCoverLeft == "0px") {
            sideCover.style.left = "50%"
            coverSignIn.style.display = "none"
            coverSignUp.style.display = "flex"
        }
        else {
          sideCover.style.left = "0px"
          coverSignIn.style.display = "flex"
          coverSignUp.style.display = "none"
        }
      }
    }

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 1000) {
              document.getElementById("signIn").style.display = "flex";
              document.getElementById("signUp").style.display = "flex";
          }
          else {
            document.getElementById("signUp").style.display = "none"
          }
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className='auth-screen-wrapper'>
      <div className='circle' id='circle1'>empty</div>
      <div className='circle' id='circle2'>empty</div>
      <div className='auth-modal-container'>

        <div id='auth-side-cover'>
          <div className='auth-cover-container' id='cover-signIn'>
            <h1>Welcome back!</h1>
            <h2>Sign back in to begin saving the world!</h2>
          </div>
          <div className='auth-cover-container' id='cover-signUp'>
            <h1>Let's Get Started!</h1>
            <h2>Begin your journey to awesomeness</h2>
          </div>
        </div>

        <div className='auth-side-container' id='signUp'>
          <h1>Create an Account</h1>
          <div className='auth-text-field'>
            <p>Name:</p>
            <input placeholder='Enter a username' onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className='auth-text-field'>
            <p>Email:</p>
            <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='auth-text-field'>
            <p>Password:</p>
            <input id='auth-pw' type="password" placeholder='Enter your password' onChange={(e) => handlePasswordChange(e.target.value)} required/>
            <p id='auth-pw-short'>*The password has to be at least 8 characters</p>
          </div>
          <div className='auth-text-field'>
            <p>Confirm Password:</p>
            <input id="auth-pw-confirm" type="password" placeholder='Reenter your password' onChange={(e) => handleConfirmPassword(e.target.value)} required/>
            <p id='auth-pw-diff'>*The passwords do not match</p>
          </div>
          <div className='auth-button-container'>
            <button disabled={!formValidity} onClick={signUp}>Sign Up</button>
          </div>     
          <div className='auth-swap-side-container'>
            <p>Already have an account?</p>
            <button onClick={swap}>Sign In</button>
          </div>

        </div>
       
        <div className='auth-side-container' id='signIn'>
          <h1>Sign In</h1>
          <div className='auth-text-field'>
            <p>Enter your email</p>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='auth-text-field'>
            <p>Enter a password</p>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='auth-button-container'>
            <button onClick={signIn}>Sign In</button>
          </div>
          <div className='auth-swap-side-container'>
            <p>Don't have an account?</p>
            <button onClick={swap}>Sign Up</button>
          </div>
        </div>
   
      </div>
    </div>
  )
}

export default Auth