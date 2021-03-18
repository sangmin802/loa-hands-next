import React from "react";
import "./index.css";
import ColumnWrap from "components/_columnWrap/index";
import _ from "utility/utility";

const Index = ({ data, type, lt = null, rt = null, children = null }) => {
  const [left, right] = _.arrayReducer(data, type);

  return (
    <div className="doubleColumnWrap">
      <ColumnWrap title={lt} arr={left} side="left">
        {children}
      </ColumnWrap>
      <ColumnWrap title={rt} arr={right} side="right">
        {children}
      </ColumnWrap>
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
