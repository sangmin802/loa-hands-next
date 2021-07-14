import styled, { css } from "styled-components";

export const Content = styled.article<{ src: string }>`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  .img-container {
    ${({ src }) => (src ? "width: 8%; min-width: 26px;" : "")}

    img {
      ${({ theme, src }) => (src ? theme.contentBox : "")}
    }
  }
  * {
    font-size: ${({ theme }) => theme.fontSize["desc"]};
  }
`;

const textContainerType = {
  title: css<{ src: string }>`
    ${({ src }) => (src ? "width: 19%; margin: 0 0.5rem;" : "")}
  `,
  desc: css<{ src: string }>`
    ${({ src }) =>
      src
        ? "width: calc(73% - 1rem - 0.1px); min-width: calc(100% - 1rem- 26.1px);"
        : ""}
  `,
};

export const TextContainer = styled.article<{ type: string; src: string }>`
  ${({ type }) => textContainerType[type]}
`;
