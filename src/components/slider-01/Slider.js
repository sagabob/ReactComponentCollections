import React, { useRef, useContext } from "react";

import SliderContainerConsumer from "./SliderContainerContext";

import { SlideComp, SliderComp } from "./style.js";

const Slider = () => {
  const { index, images, goToNextSlide } = useContext(SliderContainerConsumer);
  const slider = useRef();

  const sliderWidth =
    slider.current && slider.current.getBoundingClientRect().width;

  const renderSlides = images.map((curr, i) => (
    <SlideComp key={i} image={curr.image}></SlideComp>
  ));

  return (
    <SliderComp
      width={sliderWidth}
      index={index}
      ref={slider}
      transition={true}
      onClick={() => goToNextSlide()}
    >
      {renderSlides}
    </SliderComp>
  );
};
export default Slider;
