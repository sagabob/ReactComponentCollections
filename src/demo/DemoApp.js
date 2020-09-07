import React, { useState, useEffect } from "react";
import unsplashPhotos from "../utils/unsplash";
import Gallery from "../components/slider-01/Gallery";
import "./DemoApp.css";

function DemoApp() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    unsplashPhotos("italy").then((images) => images && setImages(images));
  }, []);

  return (
    <div>
      <div className="slider_container">
        {images.length ? <Gallery images={images} /> : <div />}
      </div>
    </div>
  );
}

export default DemoApp;
