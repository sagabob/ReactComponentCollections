import styled from "styled-components";

export const SliderContainerStyle = styled.div`
  margin: 0;
  box-sizing: border-box;
  width: ${({ sliderWith }) => (sliderWith ? sliderWith : "96%")};
  overflow-x: hidden;
  overflow-y: hidden;
  color: white;
  padding: 20px;
`;

export const SliderAreaStyle = styled.div`
  white-space: nowrap;
  margin-left: 50px;
  margin-top: 20px;
`;

export const SliderStyle = styled.div`
  overflow: hidden;
  position: relative;
  color: #fff;
  height: ${({ sliderHeight }) => (sliderHeight ? sliderHeight : "500px")};
  background-color: #ebe4d3;
`;

export const SlidesStyle = styled.div`
  position: relative;
  height: 100%;
`;

export const SlideStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  .s--active {
    pointer-events: auto;
    opacity: 1;
  }
  .s--prev {
    pointer-events: auto;
    opacity: 1;
  }
  .s--active .slider__slide-part-inner {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;
  }
  .s--active
    .slider__slide-part
    &:nth-child(${({ slideIndex }) => slideIndex})
    .slider__slide-part-inner {
    -webkit-transition-delay: ${({ slideIndex }) =>
      0.3 + slideIndex * 0.08 + "s"};
    transition-delay: ${({ slideIndex }) => 0.3 + slideIndex * 0.08 + "s"};
  }
`;

export const SlidePartsStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SlidePartInnerStyle = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  -webkit-transition: -webkit-transform 0.5s ease-in-out;
  transition: -webkit-transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
  object-fit: cover;
`;

export const SlidePartStyle = styled.div`
  position: relative;
  width: 25%;
  height: 100%;
  &:nth-child(${({ slideIndex }) => slideIndex}) .slider__slide-part-inner {
    z-index: ${({ slideIndex }) => 5 - slideIndex};
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition-delay: ${({ slideIndex }) =>
      0.2 + slideIndex * 0.08 + "s"};
    transition-delay: ${({ slideIndex }) => 0.2 + slideIndex * 0.08 + "s"};
  }
`;

export const SliderControlStyle = styled.div`
  z-index: 100;
  position: absolute;
  left: 50px;
  top: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  -webkit-transform: translateX(-50px);
  transform: translateX(-50px);
  opacity: 0;
  -webkit-transition: all 0.5s 1s;
  transition: all 0.5s 1s;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    border: 2px solid #000;
    border-bottom: none;
    border-right: none;
    -webkit-transform: translateX(5px) rotate(-45deg);
    transform: translateX(5px) rotate(-45deg);
  }

  .
`;
