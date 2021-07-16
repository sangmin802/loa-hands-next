import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
} from "react";
import * as Styled from "./index.style";

interface IDialog {
  dialog: ReactElement;
  setDialog: (T: null) => void;
}

const Dialog = ({ dialog, setDialog }: PropsWithChildren<IDialog>) => {
  const closeDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  useEffect(() => {
    // body에 overflow-y hidden 주는방식은 ios에서 적용 안됨
    const body = document.querySelector("body");
    const top = window.pageYOffset;
    if (dialog) {
      const style = `
        position: fixed;
        top: -${top}px;
        left: 0px;
        right: 0px;
      `;
      body.setAttribute("style", style);
    }
    return () => {
      if (dialog) {
        body.setAttribute("style", "");
        window.scrollTo(0, top);
      }
    };
  }, [dialog]);

  return (
    <>
      {dialog && (
        <>
          <Styled.Background
            onClick={closeDialog}
            data-testid="close-dialog"
          ></Styled.Background>
          <Styled.Container data-testid="dialog-content">
            {dialog}
          </Styled.Container>
        </>
      )}
    </>
  );
};

export default Dialog;
