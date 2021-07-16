import styled, { css } from "styled-components";

const titleType = {
  itemTitle: css`
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin-bottom: 0.5rem;
    padding: 0.1rem 0.3rem;

    ${({ theme }) => theme.contentBox}
    background : ${({ theme }) => theme.backgroundColor.darkLow};
  `,
};

export const Container = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  li {
    list-style: none;
    display: inline;
  }
`;

export const Item = styled.div`
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.div<{ type?: string }>`
  text-align: center;

  ${({ type }) => titleType[type]}
`;
