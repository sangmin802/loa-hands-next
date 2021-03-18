import React from "react";
import "./index.css";

const Index = ({ text, grade }: { text; grade? }) => {
  return (
    <div className="textWrap">
      {text.map((res, index) => {
        return (
          <div
            key={`text${index}`}
            className={`overflowDot ${
              index === 0 && grade ? `color${grade}` : ""
            }`}
          >
            {res}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
