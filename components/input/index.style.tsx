import styled from "styled-components";

export const Input = styled.input`
  background: none;
  width: 100%;
  padding: 0.3rem;
  outline : none;
  border : 0;
  &:focus {
    outline: none;
    background: none;
  };

  color : ${({ theme }) => theme.fontColor.white};
}
`;
