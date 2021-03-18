import React, { useCallback } from "react";
import _ from "utility/utility";

const Index = ({ tabName, setTab, selected, index }) => {
  const tabClickEvent = useCallback(() => {
    setTab({ tab: index });
  }, [index, setTab]);

  return (
    <div
      className={`tab textCenter ${selected ? "white" : ""}`}
      onClick={tabClickEvent}
    >
      {tabName}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
