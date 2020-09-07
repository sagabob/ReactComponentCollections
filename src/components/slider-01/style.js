import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SliderGalleryComp = styled.div`
  overflow: hidden;
  white-space: nowrap;
  flex: 0 1 auto;
  width: 100%;
  height: 100%;
`;

export const SliderComp = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateX(
    ${({ width, index, translateDrag = 0 }) =>
      `${-(index * 100) + (translateDrag / width) * 100}%`}
  );
  transition: ${({ transition, translateDuration = 0.5 }) =>
    transition
      ? `transform cubic-bezier(0,.59,.46,1) ${translateDuration * 1.0}s`
      : "none"};
`;

export const SlideComp = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ArrowLayer = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, -100%);
  user-select: none;
`;

export const ArrowComp = styled.div`
  width: 40%;
  height: 100%;
  cursor: pointer;
  align-items: center;
  display: flex;
  opacity: ${({ hover }) => (hover ? "0" : "1")};
  justify-content: ${({ direction }) =>
    direction === "left" ? "flex-start" : "flex-end"};
  img {
    width: 40px;
    transform: translate(0, -50%);
    transition: opacity 0.4s;
  }
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

export const ArrowIcon = styled.div`
  border: solid #ccc;
  border-width: 0 4px 4px 0;
  display: ${({ displayArrows }) => (displayArrows ? "flex" : "none")};
  margin: 20px;
  padding: 7px;
  transform: rotate(
    ${({ direction }) => (direction === "left" ? "135deg" : "-45deg")}
  );
`;

export const DotsContainer = styled.div`
  flex: 1;
  bottom: 0;
  width: 100%;
  height: 10%;
  margin: auto;
  display: ${({ displayDot }) => (displayDot ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  transform: translate(0, -0%);
  padding: 10px;
`;

export const DotComp = styled.div`
  background: ${({ active, colors }) => (active ? colors.b : colors.a)};
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50%;
`;
