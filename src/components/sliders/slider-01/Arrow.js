import React from "react";
import PropTypes from "prop-types";

import { ArrowComp, ArrowIcon } from "./style.js";

const Arrow = ({
  callToAction,
  direction,
  arrowStyle,
  displayArrows,
  arrowOnHover,
  primaryColor,
}) => {
  return (
    <ArrowComp
      direction={direction}
      hover={arrowOnHover}
      onClick={callToAction}
    >
      <ArrowIcon
        displayArrows={displayArrows}
        direction={direction}
        style={arrowStyle}
        primaryColor={primaryColor}
      ></ArrowIcon>
    </ArrowComp>
  );
};

Arrow.propTypes = {
  callToAction: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  displayArrows: PropTypes.bool.isRequired,
  arrowOnHover: PropTypes.bool.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default Arrow;
