import React from 'react'
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io'
import './header.css'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/evrata/" target='_blank'>
            <IoLogoLinkedin/>
        </a>
        <a href="https://github.com/luevrata" target='_blank'>
            <IoLogoGithub/>
        </a>
        {/* <a href="https://www.linkedin.com/in/evrata/" target='_blank'> </a> */}
    </div>
  )
}

export default HeaderSocials