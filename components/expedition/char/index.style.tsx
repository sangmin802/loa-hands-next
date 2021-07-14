import styled from "styled-components";

export const Container = styled.article`
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.backgroundColor.darkLow};
  }

  button {
    width: 100%;
    text-align: left;
  }
`;
