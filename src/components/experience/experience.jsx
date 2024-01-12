import React from 'react'
import './experience.css'
import {BiCheck} from 'react-icons/bi'
import {BsClipboardData} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {MdOutlineComputer} from "react-icons/md"
import {GiTeacher} from "react-icons/gi"

export const experience = () => {
  return (
    <section id ="experience">
    <h5>My Qualifications</h5>
    <h2>My Experience</h2>
    <div className="experience__container">
      <div className="experience__programming">
        <h3>Key Programming Skills</h3>
        <div className = "experience__content">
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>HTML</h4>
            </div>   
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>CSS</h4>
            </div>  
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
            </div>  
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>Python</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>Java</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>C++</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>TypeScript</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>SQL</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>Flutter</h4>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>React.js</h4>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__general">
        <h3>University Involvement</h3>
        <div className = "experience__content">
        <article className = 'experience__details'>
            <BsClipboardData className = 'experience__details-icon'/>
            <div>
              <h4>Industry Night Co-Chair at McMaster Engineering and Management Society</h4>
              <small className = 'text-light'>Organizing and executing the 7th Annual Engineering and Management Industry Night</small>
            </div>
          </article>
          <article className = 'experience__details'>
            <AiOutlineMessage className = 'experience__details-icon'/>
            <div>
              <h4>Software Team Member at McMaster Medical Engineering Design Team</h4>
              <small className = 'text-light'>Write and maintain C++ software to control mobility of a prosthetic arm, incorporating good object-oriented design.</small>
           </div>
          </article>
        </div>
      </div>
      <div className="experience__general">
        <h3>Work Experience</h3>
        <div className = "experience__content">
        <article className = 'experience__details'>
            <GiTeacher className = 'experience__details-icon'/>
            <div>
              <h4>Undergraduate Teaching Assistant - Cornerstone Design Projects</h4>
              <small className = 'text-light'>I lead weekly lab sessions introducing students to the fundamentals of Python programming, modelling with AutoDesk Inventor, and material science.</small>
            </div>
          </article>
          <article className = 'experience__details'>
            <MdOutlineComputer className = 'experience__details-icon'/>
            <div>
              <h4>Software Developer Co-op at Transpire Technologies</h4>
              <small className = 'text-light'>Mobile application development using Flutter. Conducted unit testing in TypeScript using the Playwright Framework.</small>
           </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default experience