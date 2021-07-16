import styled, { css } from "styled-components";

const contentType = {
  title: css`
    margin-right: 0.3rem;
    padding: 0.2rem 0.6rem;
    overflow: initial;

    ${({ theme }) => theme.contentBox}
    background : ${({ theme }) => theme.backgroundColor.darkLow};
  `,
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  width: calc((100% - 0.5rem) / 2 - 0.1px);
  margin-right: 0.5rem;
`;

export const Content = styled.div<{ type?: string }>`
  width: fit-content;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-right: 0.5rem;

  & .img-container {
    width: 12%;
    min-width: 40px;
    margin-right: 0.5rem;
  }

  ${({ type }) => (type ? contentType[type] : "")}
`;

export const Collection = styled.div`
  display: flex;
  margin-top: 15px;
`;
