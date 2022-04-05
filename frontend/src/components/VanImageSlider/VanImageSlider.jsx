import React, { useState } from "react";
import { VanImagesData } from "../../data/VanImagesData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./VanImageSlider.scss";

const VanImageSlider = ({ slides }) => {
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

  return (
    <section className="image-slider__container">
      <h2 className="image-slider__subtitle">brandi in the wild</h2>
      <div className="slider">
        <div className="arrows">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
        {VanImagesData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.title}
                  className="image"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VanImageSlider;
