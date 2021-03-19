import React, { useCallback } from "react";
import ImgTextWrap from "components/_imgTextWrap/index";
import Detail from "components/_detail/index";
import Dialoghook from "hooks/dialogHook";
import "./index.css";

const Index = ({ data, children }: { data; children? }) => {
  const { backSrc, detail } = data;
  const { setDialog } = Dialoghook();

  const callDialog = useCallback(() => {
    if (detail?.hover) {
      const dialog = <Detail data={data}>{children}</Detail>;
      setDialog(dialog);
    }
    return;
  }, [detail, setDialog, data, children]);

  return (
    <div
      className={`columnList ${detail?.hover ? "pointer" : ""}`}
      onClick={callDialog}
    >
      <ImgTextWrap
        backSrc={backSrc}
        grade={detail?.grade}
        src={detail?.src}
        text={detail ? [...detail.subTitle, detail.title] : []}
      />
    </div>
  );
};

export default Index;
