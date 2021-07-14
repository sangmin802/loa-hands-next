import React, { cloneElement, PropsWithChildren, ReactElement } from "react";
import { Text } from "components/";
import * as Styled from "./index.style";

interface IListContainer {
  title: string;
  arr: any[];
  children: ReactElement;
}

const ListContainer = ({
  title,
  arr,
  children,
}: PropsWithChildren<IListContainer>) => {
  return (
    <>
      <Styled.Title>
        <Text>{title}</Text>
      </Styled.Title>
      <>
        {arr.map((res, index) => (
          <Styled.Content key={`item${index}`}>
            {cloneElement(children, { data: res })}
          </Styled.Content>
        ))}
      </>
    </>
  );
};

export default ListContainer;
