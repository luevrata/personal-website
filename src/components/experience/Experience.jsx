import React from 'react'
import './experience.css'
import WorkdayIcon from '../../assets/Workday-Emblem.png'
import UBCIcon from '../../assets/ubc.png'

const Experience = () => {
  return (
    <section id = 'experience'>
        <h2>Experience & Education</h2>
        <div className="container experience__container">
            <div className="experience__card">
                <div className="experience__card_header">
                    <div>
                        <h3>Workday </h3>
                        <h4>Software Application Engineer Co-op</h4>
                        <h5>09/2022 - present</h5>
                    </div>
                    <div >
                        <img src={WorkdayIcon} className="experience__card-img"></img>
                    </div>

                </div>

                <div className="experience__card_description">

                    <ul>
                        <li>Collaborated with the team to build customer-facing web-based business application using JavaScript/React alongside additional backend tools</li>
                        <li>Configured RESTful APIs and proxy endpoints</li>
                        <li>Deployed application to Linux based Node.js Web server</li>
                        <li>Actively participated in code reviews and software development using Agile/Scrum process</li>
                    </ul>

                </div>
            </div>

            <div className="experience__card">
                <div className="experience__card_header">
                    <div>
                        <h3>UBC</h3>
                        <h4>Undergraduate student</h4>
                        <h5>09/2021 - present</h5>

                    </div>
                    <div >
                        <img src={UBCIcon} className="experience__card-img"></img>
                    </div>

                </div>

                <div className="experience__card_description">

                    <ul>
                        <li>3rd year Undergraduate student majoring in Computer Science with specialization in Software development and minor in Commerce</li>
                        <li>Cumulative GPA: 88.3%</li>
                        <li>Expected to graduate May 2025</li>
                    </ul>

                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Experience