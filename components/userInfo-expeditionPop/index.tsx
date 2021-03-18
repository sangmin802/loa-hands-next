import React from "react";

import "./index.css";

const Index = ({ expeditionPopToggle }) => {
  return (
    <div className="showExpeditionWrap" onClick={expeditionPopToggle}>
      원정대 캐릭터 보기
    </div>
  );
};

export default React.memo(Index, () => true);
