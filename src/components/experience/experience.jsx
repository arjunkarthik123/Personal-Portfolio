import React from 'react'
import './experience.css'
import {BiCheck} from 'react-icons/bi'
import {BsClipboardData} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {GiFlute} from 'react-icons/gi'

export const experience = () => {
  return (
    <section id ="experience">
    <h5>My Qualifications</h5>
    <h2>My Experience</h2>
    <div className="experience__container">
      <div className="experience__programming">
        <h3>Programming Langauges</h3>
        <div className = "experience__content">
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>   
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>  
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>  
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>
          <article className = 'experience__details'>
            <BiCheck className = 'experience__details-icon' />
            <div>
              <h4>Java</h4>
              <small className = 'text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__general">
        <h3>My Involvement</h3>
        <div className = "experience__content">
        <article className = 'experience__details'>
            <BsClipboardData className = 'experience__details-icon'/>
            <div>
              <h4>Data Coordinator at McMaster Engineering Society</h4>
              <small className = 'text-light'>Process and interpret student data to improve society initiatives.</small>
            </div>
          </article>
          <article className = 'experience__details'>
            <AiOutlineMessage className = 'experience__details-icon'/>
            <div>
              <h4>Outreach Team Lead at McMaster Medical Engineering Design Team</h4>
              <small className = 'text-light'>Plan and execute events to educate students in the fields of computer science and biomedical engineering.</small>
           </div>
          </article>
          <article className = 'experience__details'>
            <GiFlute className = 'experience__details-icon'/>
            <div>
              <h4>Flute Player at McMaster Flute Ensemble</h4>
              <small className = 'text-light'>Attends weekly practices in preparation for ensemble performances.</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default experience