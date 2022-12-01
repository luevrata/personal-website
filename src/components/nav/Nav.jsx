import React from 'react'
import './nav.css'
import {HiUserCircle, HiHome} from "react-icons/hi"
import {MdHomeRepairService} from "react-icons/md"
import {RiServiceFill, RiMessage2Fill} from "react-icons/ri"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}> <HiHome/> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}> <HiUserCircle/> </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}> <MdHomeRepairService/> </a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects'?'active':''}> <RiServiceFill/> </a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}> <RiMessage2Fill/> </a>
    </nav>
  )
}

export default Nav