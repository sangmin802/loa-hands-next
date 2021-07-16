import React, {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useCallback,
} from "react";
import { Image, Text } from "components/";
import * as Styled from "./index.style";

interface IDetail {
  src?: string;
  grade?: string;
  subTitle: string[];
  title: string;
  hover: boolean;
}

interface IData<T> {
  backSrc?: string;
  type?: string;
  detail: T;
}

interface IListItem<T> {
  children: ReactElement;
  setDialog: (T: ReactElement) => void;
  data: T;
}

const ListItem = ({
  data,
  children,
  setDialog,
}: PropsWithChildren<Partial<IListItem<IData<IDetail>>>>) => {
  const { backSrc, detail } = data;

  const setDialogHandler = useCallback(() => {
    if (!detail?.hover) return;
    const dialog = cloneElement(children, { data });
    setDialog(dialog);
  }, [children, data, setDialog, detail]);

  return (
    <Styled.Container
      data-testid="list-item"
      hover={detail?.hover}
      onClick={setDialogHandler}
      type={data.type}
    >
      <Image src={detail?.src ?? backSrc} color={`gradient${detail?.grade}`} />
      {detail && (
        <Styled.Desc type={data.type}>
          {detail.subTitle.map(text => (
            <Text
              key={text}
              color={detail.grade ? `color${detail.grade}` : "white"}
              type={"subTitle"}
            >
              {text}
            </Text>
          ))}
          <Text>{detail.title}</Text>
        </Styled.Desc>
      )}
    </Styled.Container>
  );
};

export default ListItem;
