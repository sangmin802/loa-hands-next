import styled from "styled-components";

export const BackgroundContainer = styled.article`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
`;
