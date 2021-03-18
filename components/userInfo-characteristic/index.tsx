import React from "react";
import _ from "utility/utility";
import Chararteristic from "./characteristic/index";
import "./index.css";

const Index = ({ data }) => {
  return (
    <div className="characteristicWrap">
      {data.map(({ title, content }) => {
        return (
          <div className="characteristics" key={title}>
            <div className="title textCenter">{title}</div>
            <Chararteristic content={content} />
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
