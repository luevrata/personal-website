import React from "react";
import Forest from "../../assets/hikesGallery/FOREST.jpg";
import Moraine from "../../assets/hikesGallery/moraine3.jpg";
import Waterfall from "../../assets/hikesGallery/waterfall.jpg";
import Bears from "../../assets/hikesGallery/bears.jpg";
import Kanyon from "../../assets/hikesGallery/kanyon.jpg";
import Mounts from "../../assets/hikesGallery/mounts.jpg";
import Lake from "../../assets/hikesGallery//lake.jpg";
import Primorye from "../../assets/hikesGallery/primorye.jpg";
import Lions from "../../assets/hikesGallery/lionsBay.jpg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HikeGallery = () => {
  const images = [
    Forest,
    Moraine,
    Waterfall,
    Bears,
    Kanyon,
    Mounts,
    Lake,
    Primorye,
    Lions,
  ];
  return (
    <div className="container">
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h2>Hike Gallery</h2>
        {/* {images.map((image) => (
          <img src={image} />
        ))} */}
        <Fade>
          {images.map((image) => (
            <div className="each-fade">
              <img src={image}></img>
            </div>
          ))}
        </Fade>
      </section>
    </div>
  );
};

export default HikeGallery;
