import React from "react";
import _ from "utility/utility";

const IntentString = ({ data }: { data? }) => {
  return (
    <div className="indentStrings">
      {data.map(({ title: { val, active }, desc }, index) => {
        return (
          <div key={index} className="indentString">
            <div className={`color${active}`}>{val}</div>
            <div>
              {desc.map(({ val, active }, index) => (
                <div key={index} className={`color${active}`}>
                  {val}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(IntentString, (left, right) =>
  _.compareObj(left, right)
);
