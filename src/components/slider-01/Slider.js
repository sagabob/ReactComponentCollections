import React, { useRef, useContext } from "react";

import SliderContainerConsumer from "../SliderContainerContext";

import { sSlide, sSlider } from "./style.js";

const Slider = () => {
  const { index, images } = useContext(SliderContainerConsumer);
  const slider = useRef();

  const sliderWidth =
    slider.current && slider.current.getBoundingClientRect().width;

  const renderSlides = images.map((curr, i) => (
    <sSlide key={i} image={curr.image}></sSlide>
  ));
  return (
    <sSlider width={sliderWidth} index={index} ref={slider}>
      {renderSlides}
    </sSlider>
  );
};
export default Slider;
