import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-bg' id='contact'>
        <section className='contact-container'>
            <div className='contact-info-container'>
                <h1>Get In Contact</h1>
                <p>Got questions or having any issues? Get in contact with us!</p>
                <div className='contact-option'>
                    <img className='contact-icon' src="./icons/email.png"/>
                    <p>contact.us.food4everyone@gmail.com</p>
                </div>
                <div className='contact-option'>
                    <img className='contact-icon' src="./icons/phone.png"/>
                    <p>(609) 813-0834</p>
                </div>
            </div>
            <div className='contact-form-container'>
                <h1>Write Us A Message</h1>
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="43bee1f5-97cf-4b22-bd84-d85663d1d921"></input>
                <div className='contact-input'>
                    <p>Email</p>
                    <input type="email" name='email' placeholder='Enter your email'/>
                </div>
                <div className='contact-input'>
                    <p>Name</p>
                    <input name='name' placeholder='Enter a name'/>
                </div>
                <div className='contact-input'>
                    <p>Message</p>
                    <textarea name='message' placeholder='Write a message' rows={4}/>
                </div>
                <div className='contact-submit-container'>
                    <button type="submit">Send</button>
                </div>
                </form>
            </div>
        </section>
    </div>

  )
}

export default Contact