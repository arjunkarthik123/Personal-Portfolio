import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/headshot arjun_prev_ui.png'
import CTAcopy from './CTAcopy'

const header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello, I am</h5>
      <h1>Arjun Karthik</h1>
      <h5 className = "text-white">Software Engineering Student</h5>
      <CTA />
      <CTAcopy />      
      <div className = "me">
        <img src ={me}alt = "me"/>
      </div>
    </div>
   </header>
  )
}

export default header