import React from 'react'
import './about.css'
import me from '../../assets/mcm-eng-mgmt_left-col_jpg.jpg'
import {FaAward} from 'react-icons/fa'
import {BiFolder} from 'react-icons/bi'

const about = () => {
  return (
    <section id = "about">
      <h5>Get To Know Me!</h5>
      <h2>About Me</h2>
      <div className = "container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {me} alt = "About Image"/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className = 'about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Experience</h5>
              <small>Technical and Volunteer Experience</small>
            </article>
            <article className = 'about__card'>
              <BiFolder className = 'about__icon'/>
              <h5>Projects</h5>
              <small>Variety of Projects Showcasing My Skills</small>
            </article>
          </div>
          <p>
            Hello! I am a software engineering and management student
            at McMaster University, and thank you for taking the time to
            read over my portfolio! I am skilled in python, java, html, css, and 
            javascript as showcased in my work and I also carry vast leadership
            experience. I am currently seeking opportunities in software development for summer 2024!
          </p>
          <a href = "#content" className = 'btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
      </section>
  )
}

export default about
