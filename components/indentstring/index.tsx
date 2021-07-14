import React, { PropsWithChildren } from "react";
import Lodash from "lodash";
import { DangerousHTML } from "../";
import * as Styled from "./index.style";

interface IHTML {
  val: string;
}

interface IData<T> {
  title: T;
  desc: T[];
}

interface IIndengString<T> {
  data?: T[];
}

const IntentString = ({
  data,
}: PropsWithChildren<IIndengString<IData<IHTML>>>) => {
  return (
    <>
      {data.map(({ title: { val }, desc }, index) => {
        return (
          <Styled.Content key={index}>
            <DangerousHTML html={val} />
            {desc.map(({ val }, index) => (
              <DangerousHTML key={index} html={val} />
            ))}
          </Styled.Content>
        );
      })}
    </>
  );
};

export default React.memo(IntentString, (left, right) =>
  Lodash.isEqual(left, right)
);
