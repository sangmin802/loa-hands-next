import React, { useCallback } from "react";
import "./index.css";

const Index = ({ setUserData, char }) => {
  const setUserDataEvent = useCallback(() => {
    setUserData(char.name);
  }, [char.name, setUserData]);

  return (
    <div
      className="userExpeditionChar rem09 overflowDot"
      onClick={setUserDataEvent}
    >
      {char.lv} {char.name}
    </div>
  );
};

export default Index;
