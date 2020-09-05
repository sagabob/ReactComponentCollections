import styled from "styled-components";

export const sContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const sGallery = styled.div`
  overflow: hidden;
  white-space: nowrap;
  flex: 0 1 auto;
  width: 100%;
`;

export const sSlider = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const slide = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ cover }) => (cover ? "cover" : "contain")};
`;
