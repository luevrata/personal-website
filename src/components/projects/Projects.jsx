import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>My Projects</h2>
        <div className="container projects__container">
            <div className="projects__card">
                <div className="projects__card_content">
                    {/* <div className="projects__card_layer"/> */}
                    <div className="projects__card_text">
                    <a className='projects__link' href='https://github.com/luevrata/Task_Scheduler' target='_blank'>GitHub Link</a>
                        <ul>
                            <li>Developed an application in Java using IntelliJ IDEA to schedule user’s tasks for a specific time</li>
                            <li>Created JSON classes to provide user an opportunity to write/read schedule to/from a file </li>
                            <li>Created JUnit tests to test JSON and base classes</li>
                            <li>Designed GUI using Java Swing</li>
                        </ul>
                        
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>Task Scheduler</h3>
                    <h4>Skills: </h4>
                    <h5>09/2022 - present</h5>

                </div>


            </div>

            <div className="projects__card">
                <div className="projects__card_content">
                    {/* <div className="projects__card_layer"/> */}
                    <div className="projects__card_text">
                        <ul>
                            <li>Developed an application in Java using IntelliJ IDEA to schedule user’s tasks for a specific time</li>
                            <li>Created JSON classes to provide user an opportunity to write/read schedule to/from a file </li>
                            <li>Created JUnit tests to test JSON and base classes</li>
                            <li>Designed GUI using Java Swing</li>
                        </ul>
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>Task Scheduler</h3>
                    <h4>Skills: </h4>
                    <h5>09/2022 - present</h5>

                </div>


            </div>


        </div>
    </section>
  )
}

export default Projects