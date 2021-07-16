import styled from "styled-components";

export const Content = styled.article`
  margin-top: 0.5rem;

  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;
