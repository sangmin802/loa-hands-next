import React from "react";
import TextWrap from "components/_textWrap/index";

const Index = ({ content }) => {
  return (
    <>
      {content.map(({ title, desc }) => {
        return (
          <div className="characteristic" key={title[0]}>
            <TextWrap text={title} />
            <div>{desc}</div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
