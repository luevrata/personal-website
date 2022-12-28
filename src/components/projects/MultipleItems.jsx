import React, { Component } from "react";
import Slider from "react-slick";

import './projects.css'

const MultipleItems = ()=> {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 1650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }

      ],
      appendDots: dots => (
        <div
          style={{
            // backgroundColor: "#ddd",
            // borderRadius: "10px",
            position: "relative",
            // padding: "10px"
            marginBottom: "2rem",
            display: "block",
            // color: "white"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      )
    };
    return (
      <div className="container">
            <Slider {...settings}>
            <div className="projects__card">
                <div className="projects__card_content one">
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
                    <h4>Skills: Java, OOP, JSON, JUnit</h4>

                </div>


            </div>


            {/* <div className="slick-slide"> */}
            <div className="projects__card">
                <div className="projects__card_content two">
                    {/* <div className="projects__card_layer"/> */}
                    <div className="projects__card_text ">
                    <a className='projects__link' href='https://github.com/luevrata/SnakeGame' target='_blank'>GitHub Link</a>
                        <ul>
                            <li>Developed a game in Java using Android Studio which allowed user to 
                                control the snake and let it to consume food units</li>
                            <li>Designed and programmed Java graphical user interface using XML </li>
                            <li>Used handlers to allow user to interact with the game using touch screen</li>
                        </ul>
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>Snake Game</h3>
                    <h4>Skills: Java, XML</h4>

                </div>
            </div>
            {/* </div> */}

            <div className="projects__card">
                <div className="projects__card_content three">
                    {/* <div className="projects__card_layer"/> */}
                    <div className="projects__card_text">
                    <a className='projects__link' href='https://github.com/luevrata/CollegeAttendance' target='_blank'>GitHub Link</a>
                        <ul>
                            <li>Built a database in SQL Server that stored information about users and student’s attendance</li>
                            <li>Developed user interface in Python using Visual Studio</li>
                            <li>Programmed triggers to change, update, delete data from database</li>
                        </ul>
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>College Attendance Management System</h3>
                    <h4>Skills: SQL, Python</h4>

                </div>
            </div>


            <div className="projects__card">
                
                <div className="projects__card_content four">
                    <div className="projects__card_text">
                    <a className='projects__link' href='https://github.com/luevrata/pumpkin_seeds_data' target='_blank'>GitHub Link</a>
                        <ul>
                            <li>Built classification model for pumpkin seeds based on their characteristics</li>
                            <li>Read the data from web into R and tided it</li>
                            <li>Calculated the accuracy of predictions in general and accuracy of predictions by class</li>
                        </ul>
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>Pumpkin Seeds Data Analysis</h3>
                    <h4>Skills: R, Data Analysis</h4>

                </div>

                
            </div>


             <div className="projects__card">
                <div className="projects__card_content five">
                    {/* <div className="projects__card_layer"/> */}
                    <div className="projects__card_text">
                    <a className='projects__link' href='https://github.com/luevrata/Voting-System' target='_blank'>GitHub Link</a>
                        <ul>
                            <li>Developed Voting System in C++ using Visual Studio</li>
                            <li>This project provides voters accurate and live statistics of the percentage of the votes for each 
                                candidate, as well as the percentage of each candidate from each province of Canada</li>
                            <li>Makes sure that each user got one vote in</li>
                        </ul>
                    </div>
                </div>

                <div className="projects__card_description">

                    <h3>Hackathon cmd-f 2022</h3>
                    <h4>Voting System</h4>
                    <h4>Skills: C++, OOP</h4>

                </div>
            </div> 
            
            </Slider>
      </div>
    );
}

export default MultipleItems