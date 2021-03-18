import React from "react";
import _ from "utility/utility";
import TabHook from "hooks/tabHook";
import TabWrap from "components/_tabWrap/index";
import "./index.css";

const Index = () => {
  const mainTabs = ["능력치", "스킬", "수집형포인트"];
  const { tab, setTab } = TabHook("main");

  return (
    <TabWrap
      arr={mainTabs}
      isActive={true}
      selectedTab={tab}
      setTab={setTab}
      tabClass="main"
    />
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
