import React, { useState, useEffect } from "react";
import Slider from "../../../components/sliders/slider-02/Slider";
import unsplashPhotos from "../../../utils/unsplash";

import "./DemoSlider.css";

function DemoSlider() {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 5000;

  const [images, setImages] = useState([]);

  useEffect(() => {
    unsplashPhotos("austria").then((images) => images && setImages(images));
  }, []);

  const sliderProps = {
    sliderWith: "95%",
    sliderHeight: "400px",
    title: "Multiple tile slider",
    images: images,
  };
  return (
    <>
      <div className="common_container">
        <h2>Slider 2</h2>
        <p>A simple implementation of React Slider.</p>
      </div>
      <div className="slider_container">
        <Slider {...sliderProps}></Slider>
      </div>
    </>
  );
}

export default DemoSlider;
