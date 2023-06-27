import React from 'react'
import resume from '../../assets/Arjun_Karthik_Resume_June_2023.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
         <a href = {resume} download className = 'btn'>Download Resume</a>
         <a href = "#contact" className = 'btn btn-primary'>Let's Chat!</a>
    </div>
  )
}

export default CTA