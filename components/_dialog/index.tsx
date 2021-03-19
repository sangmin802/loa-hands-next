import React, { useCallback } from "react";
import DialogHook from "hooks/dialogHook";
import DialogOpen from "hooks/dialogOpen";
import "./index.css";

const Index = () => {
  const { dialog, setDialog } = DialogHook();
  const closeDialog = useCallback(() => {
    setDialog(null);
  }, [setDialog]);

  DialogOpen(dialog);

  return (
    <>
      {dialog && (
        <>
          <div className="dialogBack" onClick={closeDialog}></div>
          <div className="dialogContent">{dialog}</div>
        </>
      )}
    </>
  );
};

export default React.memo(Index, () => true);
