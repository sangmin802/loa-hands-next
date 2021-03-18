import React from "react";
import "./index.css";

const Index = ({ backSrc = null, src = null, grade = "" }) => {
  return (
    <div className="imgWrap">
      {backSrc && (
        <img
          className={`imgWidth contentBoxBorder gradient${grade}`}
          src={backSrc}
          alt="partImg"
        />
      )}
      {src && (
        <img
          className={`equipMainImg absolute imgWidth gradient${grade}`}
          src={src}
          alt={src}
        />
      )}
    </div>
  );
};

export default Index;
