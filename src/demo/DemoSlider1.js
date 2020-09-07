import React, { useState, useEffect } from "react";
import unsplashPhotos from "../utils/unsplash";
import Gallery from "../components/slider-01/Gallery";
import "./DemoSlider1.css";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
function DemoSlider1() {
  const [images, setImages] = useState([]);
  const [autoPlay, setAutoPlay] = useState(false);
  useEffect(() => {
    unsplashPhotos("england").then((images) => images && setImages(images));
  }, []);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
    setAutoPlay(checked);
  }
  return (
    <>
      <div className="common_container">
        <h2>Slider 1</h2>
        <p>A simple implementation of React Slider.</p>
      </div>
      <div className="slider_container">
        {images.length ? (
          <Gallery images={images} autoPlay={autoPlay} />
        ) : (
          <div />
        )}
      </div>
      <div className="common_container">
        <h3>Parameters</h3>
        <Switch
          onChange={onChange}
          checkedChildren={
            <>
              AutoPlay <CheckOutlined />
            </>
          }
          unCheckedChildren={
            <>
              AutoPlay <CloseOutlined />
            </>
          }
        />
      </div>
    </>
  );
}

export default DemoSlider1;
