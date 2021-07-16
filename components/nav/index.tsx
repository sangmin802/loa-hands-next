import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
} from "react";
import Lodash from "lodash";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

interface INavigation {
  navType: string;
  arr: (string | ReactElement)[];
  isShow: boolean;
  selectedNav: number;
  setNav: (T: number) => void;
}

const Navigation = ({
  navType,
  arr,
  isShow,
  selectedNav,
  setNav,
}: PropsWithChildren<INavigation>) => {
  return (
    <Styled.Container
      role={`${navType}-nav-container`}
      isFlex={isShow}
      type={navType}
    >
      {arr.map((tab, index) => {
        return (
          <Styled.Content key={`${navType}Nav${index}`}>
            <Item
              navName={tab}
              setNav={setNav}
              selected={isShow && selectedNav === index ? true : false}
              index={index}
              testid={`${navType}-nav-${index}`}
            />
          </Styled.Content>
        );
      })}
    </Styled.Container>
  );
};

interface IItem {
  navName: string | ReactElement;
  setNav: (T: number) => void;
  selected: boolean;
  index: number;
  testid: string;
}
export const Item = ({
  navName,
  setNav,
  selected,
  index,
  testid,
}: PropsWithChildren<IItem>) => {
  const navClickHandler = useCallback(() => {
    setNav(index);
  }, [index, setNav]);

  const fontColor = useMemo(() => (selected ? "white" : "#666"), [selected]);

  return (
    <Button data-testid={testid} onClick={navClickHandler}>
      <Text color={fontColor}>{navName}</Text>
    </Button>
  );
};

export default React.memo(Navigation, (left, right) =>
  Lodash.isEqual(left, right)
);
