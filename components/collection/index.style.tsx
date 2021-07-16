import styled from "styled-components";
import { BACKGROUND } from "constants/index";

const positionX = [
  "720px",
  "673px",
  "767px",
  "787px",
  "652px",
  "627px",
  "741px",
  "696px",
];

export const Item = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

export const Background = styled.div<{ position: number }>`
  width: 20px;
  height: 24px;
  background: url("${BACKGROUND}");
  background-size: 1250px 1209px;
  background-position: ${({ position }) => positionX[position]} 50px;
  margin-right: 0.3rem;
`;

export const Size = styled.div`
  line-height: 24px;
`;
