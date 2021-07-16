import styled from "styled-components";

export const Image = styled.img<{ color: string }>`
  display: block;
  width: 100%;

  background: ${({ color, theme }) => theme.gradientColor[color]};
`;
