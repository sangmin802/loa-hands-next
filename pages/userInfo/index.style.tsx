import styled from "styled-components";

export const Top = styled.section`
  position: relative;
  border-radius: 3px;
  padding: 1rem 0.5rem 1rem;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

export const Bottom = styled.section`
  margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
  float: right;
  padding: 0.3rem;

  ${({ theme }) => theme.contentBox}
  background: ${({ theme }) => theme.backgroundColor.darkLow};
`;

export const Container = styled.section`
  padding: 0.5rem;
  border-radius: 0 0 5px 5px;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;
