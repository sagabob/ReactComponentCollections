import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [close, setClose] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
    return () => window.removeEventListener("scroll", resizeHeaderOnScroll);
  });

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    if (distanceY < 80) setClose(false);
    else if (!close) setClose(true);
  };

  return (
    <div className={`navbar ${close ? "navbar--close" : ""}`}>
      <div className="navbar_title">Collection of REACT COMPONENTS</div>
    </div>
  );
};

export default Navbar;
