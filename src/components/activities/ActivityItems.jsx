import React from "react";
import Slider from "react-slick";

import DancingImg from "../../assets/activityIllustrations/dancing.png";
import DrawingImg from "../../assets/activityIllustrations/drawing.png";
import PhotoshopImg from "../../assets/activityIllustrations/photoshop.png";
import HikingImg from "../../assets/activityIllustrations/hiking.png";
import SnowImg from "../../assets/activityIllustrations/snow.png";
import TechnoImg from "../../assets/activityIllustrations/techno.png";
import { Link } from "react-router-dom";

const ActivityItems = () => {
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
          position: "relative",
          marginBottom: "2rem",
          display: "block",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const activityImages = [
    HikingImg,
    PhotoshopImg,
    DrawingImg,
    DancingImg,
    SnowImg,
    TechnoImg,
  ];

  const linkRefs = [
    "https://github.com/luevrata/Task_Scheduler",
    "https://github.com/luevrata/personal-website",
    "https://github.com/luevrata/Voting-System",
    "https://github.com/luevrata/SnakeGame",
    "https://github.com/luevrata/CollegeAttendance",
    "https://github.com/luevrata/pumpkin_seeds_data",
  ];

  const activityNames = [
    <h3>Hiking</h3>,
    <h3>Photoshop</h3>,
    <h3>Drawing</h3>,
    <h3>Dancing</h3>,
    <h3>Snowboarding and Skating</h3>,
    <h3>Techno Concerts</h3>,
  ];

  return (
    <div className="container">
      <Link to="/hikeGallery">Hike</Link>
      <Slider {...settings}>
        {activityNames.map((activityName, index) => (
          <div>
            <div
              className="carousel_card"
              style={{ backgroundColor: "var(--color-primary-variant)" }}
            >
              <div
                className="card_content"
                style={{
                  backgroundImage: `url(${activityImages[index]})`,
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
                </div>
              </div>
              <div
                className="carousel_card_description"
                style={{
                  color: "var(--color-dark)",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h3> {activityName} </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ActivityItems;
