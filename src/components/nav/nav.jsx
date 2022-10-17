import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiBriefcase} from 'react-icons/bi'
import {BiMessage} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
      <a href ="#"><BiHome/></a>
      <a href ="#about"><BiUser/></a>
      <a href ="#experience"><BiBook/></a>
      <a href ="#portfolio"><BiBriefcase/></a>
      <a href ="#contact"><BiMessage/></a>
    </nav>
  )
}

export default nav