import styled from "styled-components";

export const SliderContainer = styled.div`
  margin: 0;
  box-sizing: border-box;
  width: ${({ sliderWith }) => (sliderWith ? sliderWith : "96%")};
  overflow-x: hidden;
  overflow-y: hidden;
  color: white;
  padding: 20px;
`;
