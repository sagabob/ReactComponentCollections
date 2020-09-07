import React, { useContext } from "react";
import SliderContainerConsumer from "./SliderContainerContext";

import { DotsContainer, DotComp } from "./style.js";

const Dots = () => {
  const {
    index,
    images,
    goToSlide,
    displayDot = true,
    primaryColor = "#CCC",
    secondaryColor = "#333",
  } = useContext(SliderContainerConsumer);

  const handleDotClick = (i) => {
    i === index || goToSlide(i);
  };

  return (
    <DotsContainer displayDot={displayDot}>
      {images.map((_, id) => (
        <DotComp
          key={id}
          active={id === index}
          colors={{ a: primaryColor, b: secondaryColor }}
          onClick={() => handleDotClick(id)}
        />
      ))}
    </DotsContainer>
  );
};

export default Dots;
