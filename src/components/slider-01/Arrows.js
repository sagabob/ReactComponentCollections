import React, { useContext } from "react";
import SliderContainerConsumer from "./SliderContainerContext";

import Arrow from "./Arrow";

import { ArrowLayer } from "./style.js";

const Arrows = () => {
  const {
    displayArrows = true,
    arrowOnHover = true,
    primaryColor = "#CCC",
    goToPreviousSlide,
    goToNextSlide,
    swipe = false,
    images,
    index,
  } = useContext(SliderContainerConsumer);

  return (
    !swipe && (
      <ArrowLayer>
        {index > 0 ? (
          <Arrow
            {...{
              displayArrows,
              arrowOnHover,
              callToAction: goToPreviousSlide,
              primaryColor,
              direction: "left",
            }}
          />
        ) : (
          <div />
        )}
        {index < images.length - 1 ? (
          <Arrow
            {...{
              displayArrows,
              arrowOnHover,
              callToAction: goToNextSlide,
              primaryColor,
              direction: "right",
            }}
          />
        ) : (
          <div />
        )}
      </ArrowLayer>
    )
  );
};

export default Arrows;
