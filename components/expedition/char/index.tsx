import React, { PropsWithChildren, useCallback } from "react";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

interface IData {
  lv: string;
  name: string;
}

interface IChar<T> {
  setUserData: (T: string) => void;
  char: T;
}

const Char = ({ setUserData, char }: PropsWithChildren<IChar<IData>>) => {
  const setUserDataEvent = useCallback(() => {
    setUserData(char.name);
  }, [char.name, setUserData]);

  return (
    <Styled.Container>
      <Button onClick={setUserDataEvent} aria-label="expedition-char">
        <Text type="desc">
          {char.lv} {char.name}
        </Text>
      </Button>
    </Styled.Container>
  );
};

export default Char;
