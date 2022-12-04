import React from 'react'
import me from '../../assets/me_portfolio.jpg'
import './about.css'


const About = () => {
  return (
    <section id='about'>
        <h2>About Me</h2>
        <div className="container about__container">
            <div >
                <img src={me} alt="About Image" className="about__me"></img>
            </div>
            <div className="about__content">
        
                <p>
                Motivated 3rd year student completing Bachelor of Computer Science 
                degree at University of British Columbia with a Software development 
                specialization. Experienced in Full Stack Web development with React. <br/><br/>
                A team player with conflict resolution skills who feels comfortable to 
                communicate and negotiate solutions with various groups of people. <br/><br/>
                Passionate about contributing into innovative, disruptive, and impactful 
                Software.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About