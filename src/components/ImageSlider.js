import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";

const ImageSlider = ({ slides }) => {
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
    <SliderStyled className="slider">
      <FaArrowAltCircleLeft
        className="slider__arrow slider__arrow--left left-arrow"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="slider__arrow slider__arrow--right right-arrow"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "slider__slide slider__slide--active slide active"
                : "slider__slide slide"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.url}
                alt="travel image"
                className="slider__image image"
              />
            )}
          </div>
        );
      })}
    </SliderStyled>
  );
};
const SliderStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 0.875rem + 8.333vw, 3.5rem);

  @media (min-width: 37.5em) {
    .image {
      width: 100%;
      border-radius: 5px;
      /* width: 100%; */
      height: 60vh;
      object-fit: cover;
    }
  }

  @media (max-width: 37.6em) {
    .image {
      border-radius: 5px;
      width: 100%;
      height: 40vh;
      object-fit: cover;
    }
  }

  .right-arrow {
    position: absolute;
    right: 32px;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .left-arrow {
    position: absolute;
    left: 32px;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    opacity: 0.55;
    transition-duration: 1s ease;
  }

  .slide.active {
    width: 100%;
    opacity: 1;
    transition-duration: 1s;
    /* transform: scale(1.08); */
  }
`;

export default ImageSlider;
