import React, { PropsWithChildren, ReactElement, useCallback } from "react";
import Lodash from "lodash";
import ExpeditionServer from "./server/index";
import { Button, Text } from "components/";
import * as Styled from "./index.style";

interface IUserData {
  expeditionInfo: { expeditionUserWrap: any[] };
}

interface IUserExpedition<T> {
  setDialog: (T: ReactElement) => void;
  setUserData: (T: string) => void;
  userData: T;
}

const UserExpedition = ({
  userData,
  setUserData,
  setDialog,
}: PropsWithChildren<IUserExpedition<IUserData>>) => {
  const {
    expeditionInfo: { expeditionUserWrap },
  } = userData;

  const closeHandler = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  return (
    <>
      <Styled.ButtonContainer>
        <Button onClick={closeHandler}>
          <Text>닫기</Text>
        </Button>
      </Styled.ButtonContainer>
      {expeditionUserWrap.map((wrap, index) => {
        return (
          <ExpeditionServer
            key={`userExpedition${index}`}
            wrap={wrap}
            setUserData={setUserData}
          />
        );
      })}
    </>
  );
};

export default React.memo(UserExpedition, (left, right) =>
  Lodash.isEqual(left, right)
);
