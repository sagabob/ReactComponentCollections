import React, { useRef } from "react";
import {
  SliderContainerStyle,
  SliderAreaStyle,
  SliderStyle,
  SlidesStyle,
  SlidePartsStyle,
} from "./style.js";
import { SliderContainerContextProvider } from "./SliderContainerContext";

const Slider = ({ sliderWith, sliderHeight, title, images }) => {
  const slider = useRef();

  return (
    <SliderContainerContextProvider
      value={{ sliderWith, sliderHeight, title, images }}
    >
      <SliderContainerStyle sliderWith={sliderWith}>
        <h2>{title}</h2>
        <SliderAreaStyle>
          <SliderStyle sliderHeight={sliderHeight}>
            <SlidesStyle>
              <SlidePartsStyle></SlidePartsStyle>
            </SlidesStyle>
          </SliderStyle>
        </SliderAreaStyle>
      </SliderContainerStyle>
    </SliderContainerContextProvider>
  );
};

export default Slider;
