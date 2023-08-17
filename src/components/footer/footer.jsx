/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

export const footer = () => {
  return (
    <footer>
      <a href = "#" className = 'footer__logo'>ARJUN KARTHIK</a>
      <u1 className = 'permalinks'>
        <li><a href = "#">Home</a></li>
        <li><a href = "#about">About</a></li>
        <li><a href = "#experience">Experience</a></li>
        <li><a href = "#portfolio">Portfolio</a></li>
        <li><a href = "#contact">Contact</a></li>
      </u1>
    </footer>
  )
}

export default footer