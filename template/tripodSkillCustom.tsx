import React from "react";
import _ from "utility/utility";
import ImgTextWrap from "components/_imgTextWrap/index";

const Index = ({ data }) => {
  return (
    <div className="tripodSkillCustoms">
      {data.map((ts, index) => {
        const { name = null, desc = null, grade = null, src = null } = ts;
        return (
          <ImgTextWrap
            key={`ts${index}`}
            backSrc={src}
            text={[name, desc]}
            grade={grade}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
