import styled from "styled-components";

interface Props {
  type: string;
  color: string;
}

export const Text = styled.div<Partial<Props>>`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  color: ${({ color = "white", theme }) => theme.fontColor[color]};
  font-size: ${({ type = "normal", theme }) => theme.fontSize[type]};
`;
