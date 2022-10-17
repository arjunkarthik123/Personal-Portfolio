import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import { useRef } from "react"
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_fa1rsph', 'template_nwnzjf7', form.current, 'lZJFWn9UfuHR5XYWw')
    
    e.target.reset()
  }
  
  return (
    <section id ="contact">
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>

      <div className = "container contact__container">
        <div className="contact__options">
           <article className = "contact__option">
              <MdEmail className = 'contact__option-icon'/>
              <h4>Email</h4>
              <h5>kartha4@mcmaster.ca</h5>
              <a href ='mailto:kartha4@mcmaster.ca'>Send a Message!</a>
            </article>
            <article className = "contact__option">
              <AiFillPhone className = 'contact__option-icon'/>
              <h4>Phone Number</h4>
              <h5>647-545-4019</h5>
            </article>
        </div>
        <form ref = {form} onSubmit = {sendEmail} >
          <textarea type = 'text' name = 'name' placeholder = 'Your Full Name'required/>
          <textarea type = 'email' name = 'email' placeholder = 'Your Email'required/>
          <textarea name = "message" rows = "7" placeholder= 'Your Message' required></textarea>
          <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact