import React from 'react'
import me from '../../assets/me_portfolio.jpg'
import './about.css'


const About = () => {
  return (
    <section id='about'>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <img src={me} alt="About Image"></img>
            </div>
            <div className="about__content">
        
                <p>
                Motivated 3rd year student completing Bachelor of Computer Science 
                degree at University of British Columbia with a Software development 
                specialization. Experienced in Full Stack Web development with React. 
                Passionate about contributing into innovative, disruptive, and impactful 
                Software.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About