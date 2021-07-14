import styled from "styled-components";

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.desc};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Content = styled.article`
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
