import React, { PropsWithChildren } from "react";
import * as Styled from "./index.style";
import { Text } from "components/";

interface IItem {
  size: string;
  index?: number;
}

interface ICollection {
  collection: IItem[];
}

const Collection = ({ collection }: PropsWithChildren<ICollection>) =>
  collection.map((col, index) => (
    <Item key={`collectionMini${index}`} index={index} size={col.size} />
  ));

export const Item = ({ size, index }: PropsWithChildren<IItem>) => {
  return (
    <Styled.Item>
      <Styled.Background position={index} />
      <Styled.Size>
        <Text>{size}</Text>
      </Styled.Size>
    </Styled.Item>
  );
};

export default Collection;
