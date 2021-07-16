import styled, { css } from "styled-components";

const contentType = {
  left: css`
    margin-right: 0.5rem;
  `,
  right: css``,
};

export const Container = styled.article`
  display: flex;
`;

export const Content = styled.article<{ type: string }>`
  width: calc((100% - 0.5rem -0.1px) / 2);

  ${({ type }) => contentType[type]}
`;
