import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { SliderContainerContextProvider } from "./SliderContainerContext";
import Slider from "./Slider";
import { sContainer, sGallery } from "./style.js";

const Gallereact = (props) => {
  const { images = [], inputIndex, callback } = props;
  const [index, setIndex] = useState(0);
  return (
    <SliderContainerContextProvider value={{ ...props, index }}>
      <sContainer>
        <sGallery>
          <Slider />
        </sGallery>
      </sContainer>
    </SliderContainerContextProvider>
  );
};

Gallereact.propTypes = {
  images: PropTypes.array,
  inputIndex: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Gallereact;
