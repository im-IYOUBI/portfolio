import React, { useRef } from "react";
import Slider from "react-slick"; // Assuming you are using react-slick
import { WORK_EXPERIENCE } from "../data";
import ExperienceCard from "../ui/ExperienceCard";
import "../CSS/WorkExperience.css"

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
};

const slideLeft = () => {
    sliderRef.current.slickPrev();
};

  return (
    <section className="experience-container">
      <h4 id="workexperience" >Experience & Education </h4>

      <div className="experience-content">
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined" >&lt;</span>
        </div>
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined" >&gt;</span>
        </div>
      </div>

      <div className="experience-content">
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
