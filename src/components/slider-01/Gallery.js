import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SliderContainerContextProvider } from "./SliderContainerContext";
import Slider from "./Slider";
import { SliderContainer, SliderGalleryComp } from "./style.js";
import Arrows from "./Arrows";
import Dots from "./Dots";

const Gallery = (props) => {
  const {
    duration = 2000,
    inputIndex = 0,
    images = [],
    autoPlay = true,
    displayPreview = true,
  } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const play = autoPlay && setTimeout(goToNextSlide, duration);
    return () => clearTimeout(play);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, duration]);

  useEffect(() => {
    goToSlide(inputIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputIndex]);

  const goToSlide = (i) => {
    if (i >= 0 && i < images.length) {
      setIndex(i);
    }
  };
  const goToPreviousSlide = () => {
    let i = index;
    if (index > 0) i = index - 1;
    goToSlide(i);
  };

  const goToNextSlide = () => {
    let i = index;
    console.log("pre: " + i);
    i = (index + 1) % images.length;
    goToSlide(i);
    console.log("next: " + i);
  };

  if (!images.length) return null;

  return (
    <SliderContainerContextProvider
      value={{ ...props, index, goToPreviousSlide, goToNextSlide, goToSlide }}
    >
      <SliderContainer>
        <SliderGalleryComp>
          <Slider />
          <Arrows />
        </SliderGalleryComp>
        {displayPreview ? <Dots /> : <div />}
      </SliderContainer>
    </SliderContainerContextProvider>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  autoPlay: PropTypes.bool,
  displayPreview: PropTypes.bool,
};

export default Gallery;
