import React, { PropsWithChildren } from "react";
import Lodash from "lodash";
import { DangerousHTML, Text } from "../";
import * as Styled from "./index.style";

interface IContent {
  title: string[];
  desc: string;
}

interface IData {
  title: string;
  content: IContent[];
}

interface ICharacteristic<T> {
  data: T[];
}

const Chararteristic = <T extends IData>({
  data,
}: PropsWithChildren<ICharacteristic<T>>) => {
  return (
    <>
      {data.map(({ title, content }) => {
        return (
          <Styled.Container key={title}>
            <Styled.Title>
              <Text type="title">{title}</Text>
            </Styled.Title>
            <Item content={content} />
          </Styled.Container>
        );
      })}
    </>
  );
};

interface IItem<T> {
  content: T[];
}

const Item = <T extends IContent>({ content }: PropsWithChildren<IItem<T>>) => {
  return (
    <>
      {content.map(({ title, desc }) => (
        <Styled.Item key={title[0]}>
          <Styled.Title type="itemTitle">
            <Text>
              {title[0]} {title[1]}
            </Text>
          </Styled.Title>
          <DangerousHTML html={desc} />
        </Styled.Item>
      ))}
    </>
  );
};

export default React.memo(Chararteristic, (left, right) =>
  Lodash.isEqual(left, right)
);
