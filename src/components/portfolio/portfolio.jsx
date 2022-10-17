import React from 'react'
import './portfolio.css'
import PongIMG from '../../assets/pong demo.png'
import gpaIMG from '../../assets/gpa demo.png'
import webIMG from '../../assets/webdev.png'


const portfolio = () => {
  return (
    <section id ="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className = "portfolio__item">
          <div className = "portfolio__item-image">
            <img src = {PongIMG} alt = ""/>
          </div>
          <h3>Pong</h3>
          <a href = "https://github.com/arjunkarthik123/Pong" classname = 'btn' target = '_blank'>Github</a>
        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image">
            <img src = {gpaIMG} alt = ""/>
          </div>
          <h3>GPA Calculator</h3>
          <a href = "https://github.com/arjunkarthik123/GPA-Calculator" classname = 'btn' target = '_blank'>Github</a>
        </article>
        <article className = "portfolio__item">
          <div className = "portfolio__item-image">
            <img src = {webIMG} alt = ""/>
          </div>
          <h3>My React Portfolio</h3>
          <a href = "https://github.com/arjunkarthik123/Personal-Portfolio" classname = 'btn' target = '_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default portfolio