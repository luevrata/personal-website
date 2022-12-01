import React from 'react'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h1>Elizaveta Firsova</h1>
            <h5 className="text-dark">Software Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header