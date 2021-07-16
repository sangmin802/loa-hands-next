import styled from "styled-components";

export const Container = styled.article<{ borderColor: string }>`
  overflow: hidden;
  position: relative;

  ${({ theme }) => theme.contentBox}
  border-color : ${({ borderColor }) => borderColor};
`;

export const Background = styled.div<{ isShow: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${({ theme }) => theme.isShow}
`;

export const Title = styled.div`
  padding: 0.1rem;
  text-align: center;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
`;

export const TimerImg = styled.div`
  width: 25%;
  position: relative;
`;

export const Lv = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.1rem;
  border-radius: 3px;
`;

export const Time = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Position = styled.div`
  text-align: center;

  background: ${({ theme }) => theme.backgroundColor.darkDeep};
`;
