import React from 'react'
import './footer.css'
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Elizaveta Firsova</a>

        <ul className='permlinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience and Education</a></li>
            <li><a href='#projects'>Projects & Hackathons</a></li>
            <li><a href='#contacts'>Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href='https://github.com/luevrata' target='_blank'>
                <IoLogoGithub/>
            </a>
            <a href='https://www.linkedin.com/in/evrata/' target='_blank'>
                <IoLogoLinkedin/>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100082183097016' target='_blank'>
                <BsFacebook/>
            </a>
        </div>
    </footer>
  )
}

export default Footer