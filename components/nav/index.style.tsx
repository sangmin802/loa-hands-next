import styled, { css } from "styled-components";

const containerType = {
  main: css`
    border-radius: 5px 5px 0 0;

    > article {
      margin-right: 2rem;
    }
  `,

  sub: css<{ isFlex: boolean }>`
    width: 100%;
    border-radius: 0 5px 0 0;

    ${({ theme }) => theme.isFlex}

    &:nth-of-type(4) article {
      flex-grow: 1;
      margin-right: 0;
    }
  `,
};

export const Container = styled.article<{ isFlex: boolean; type: string }>`
  padding: 0.5rem;
  display: flex;
  width: fit-content;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
  ${({ type }) => containerType[type]}
`;

export const Content = styled.article`
  width: fit-content;
  margin-right: 1rem;
  color: #666;
`;
