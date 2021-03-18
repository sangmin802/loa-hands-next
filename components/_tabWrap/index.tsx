import React from "react";
import Tab from "./tab/index";
import _ from "utility/utility";

import "./index.css";

const Index = ({ tabClass, arr, isActive, selectedTab, setTab }) => {
  const memoIsActive = React.useMemo(() => isActive, [isActive]);
  return (
    <nav
      className={`${tabClass}TabWrap tabWrap ${
        memoIsActive ? "" : "displayNone"
      }`}
    >
      {arr.map((tab, index) => {
        const active = memoIsActive && selectedTab === index ? true : false;

        return (
          <Tab
            key={`${tabClass}Tab${index}`}
            tabName={tab}
            setTab={setTab}
            selected={active}
            index={index}
          />
        );
      })}
    </nav>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
