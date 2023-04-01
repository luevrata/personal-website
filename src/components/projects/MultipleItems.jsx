import React from "react";
import Slider from "react-slick";
import taskSchedulerImg from "../../assets/taskScheduler.png";
import personalWebsiteImg from "../../assets/personalWebsite.png";
import votingSystemImg from "../../assets/votingSystem.png";
import snakeGameImg from "../../assets/snakeGame.png";
import collegeManagementImg from "../../assets/collegeManagement.png";
import pumpkinSeedsImg from "../../assets/pumpkinSeeds.png";

import "./projects.css";
import "../../styles/cardStyles.css";

const MultipleItems = () => {
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
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
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
    ),
  };

  const projectImages = [
    taskSchedulerImg,
    personalWebsiteImg,
    votingSystemImg,
    snakeGameImg,
    collegeManagementImg,
    pumpkinSeedsImg,
  ];

  const carouselContentElems = [
    "card_content one",
    "card_content six",
    "card_content five",
    "card_content two",
    "card_content three",
    "card_content four",
  ];
  const linkRefs = [
    "https://github.com/luevrata/Task_Scheduler",
    "https://github.com/luevrata/personal-website",
    "https://github.com/luevrata/Voting-System",
    "https://github.com/luevrata/SnakeGame",
    "https://github.com/luevrata/CollegeAttendance",
    "https://github.com/luevrata/pumpkin_seeds_data",
  ];

  const cardContent = [
    <ul>
      <li>
        Developed an application in Java using IntelliJ IDEA to schedule user’s
        tasks for a specific time
      </li>
      <li>
        Created JSON classes to provide user an opportunity to write/read
        schedule to/from a file{" "}
      </li>
      <li>Created JUnit tests to test JSON and base classes</li>
      <li>Designed GUI using Java Swing</li>
    </ul>,
    <ul>
      <li>
        Developed a WEB based Personal Website in JavaScript using VS Code{" "}
      </li>
      <li>Designed and developed UI Web forms using React, HTML, and CSS</li>
      <li>Deployed website using GitHub pages</li>
    </ul>,
    <ul>
      <li>Developed Voting System in C++ using Visual Studio</li>
      <li>
        This project provides voters accurate and live statistics of the
        percentage of the votes for each candidate, as well as the percentage of
        each candidate from each province of Canada
      </li>
      <li>Makes sure that each user got one vote in</li>
    </ul>,
    <ul>
      <li>
        Developed a game in Java using Android Studio which allowed user to
        control the snake and let it to consume food units
      </li>
      <li>Designed and programmed Java graphical user interface using XML </li>
      <li>
        Used handlers to allow user to interact with the game using touch screen
      </li>
    </ul>,
    <ul>
      <li>
        Built a database in SQL Server that stored information about users and
        student’s attendance
      </li>
      <li>Developed user interface in Python using Visual Studio</li>
      <li>Programmed triggers to change, update, delete data from database</li>
    </ul>,
    <ul>
      <li>
        Built classification model for pumpkin seeds based on their
        characteristics
      </li>
      <li>Read the data from web into R and tided it</li>
      <li>
        Calculated the accuracy of predictions in general and accuracy of
        predictions by class
      </li>
    </ul>,
  ];

  const projectNames = [
    <h3>Task Scheduler</h3>,
    <h3>Personal Website</h3>,
    <h3>Hackathon cmd-f 2022</h3>,
    <h3>Snake Game</h3>,
    <h3>College Attendance Management System</h3>,
    <h3>Pumpkin Seeds Data Analysis</h3>,
  ];
  const projectSkills = [
    <h4>Skills: Java, OOP, JSON, JUnit</h4>,
    <h4>Skills: JavaScript, React, CSS, HTML</h4>,
    <h4>
      Voting System <br /> Skills: C++, OOP
    </h4>,
    <h4>Skills: Java, XML</h4>,
    <h4>Skills: SQL, Python</h4>,
    <h4>Skills: R, Data Analysis</h4>,
  ];
  return (
    <div className="container">
      <Slider {...settings}>
        {carouselContentElems.map((contentElem, index) => (
          <div>
            <div className="carousel_card">
              <div
                className={contentElem}
                style={{
                  backgroundImage: `url(${projectImages[index]})`,
                }}
              >
                <div className="carousel_card_text">
                  <a
                    className="projects__link"
                    href={linkRefs[index]}
                    target="_blank"
                  >
                    GitHub Link
                  </a>
                  {cardContent[index]}
                </div>
              </div>
              <div className="carousel_card_description">
                <h3>{projectNames[index]}</h3>
                <h4>{projectSkills[index]}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
