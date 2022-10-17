import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const CTAcopy = () => {
  return (
    <div className = 'header__socials'>
         <a href = "https://www.linkedin.com/in/arjun-karthik-a931681b4/" target ="_blank"><BsLinkedin/></a>
         <a href = "https://github.com/arjunkarthik123" target ="_blank"><FaGithub/></a>
    </div>
  )
}

export default CTAcopy