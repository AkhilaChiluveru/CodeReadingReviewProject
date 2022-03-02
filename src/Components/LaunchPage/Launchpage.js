/* In this file, Carousel and video background are implemented using
relevant files to capture data. as in, Sliding images from slierdata file and 
Video as background from mp4 file.
 */
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./launchpage.css";
import video from "./BackgroundVideo.mp4";
const LaunchPage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  /* ....
  ..returning different background image above icons when user click on left or right arrow
  ...*/

  return (
    <div>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={video} type="video/mp4" />
      </video>

      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="stressreliefjumbotronimage"
                  className="image"
                />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LaunchPage;
