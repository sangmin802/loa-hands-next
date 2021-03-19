import React from "react";
import _ from "utility/utility";
import "./index.css";
import ImgTextWrap from "components/_imgTextWrap/index";
import ItemPartBox from "template/itemPartBox";
import IndentString from "template/indentString";
import TripodSkillCustom from "template/tripodSkillCustom";

const Index = ({ data, children }: { data; children? }) => {
  const { backSrc, detail } = data;
  const {
    src,
    grade,
    title,
    subTitle,
    itemPartBox,
    indentStringGroup,
    tripodSkillCustom,
  } = detail;

  return (
    <div className="detail zIndex10">
      <div className="detailTop">
        <ImgTextWrap
          backSrc={backSrc}
          src={src}
          grade={grade}
          text={[...subTitle, title]}
        />
      </div>
      {children && { ...children, props: { ...children.props, data } }}
      <div className="detailBottom">
        {itemPartBox && <ItemPartBox data={itemPartBox} />}
        {indentStringGroup && <IndentString data={indentStringGroup} />}
        {tripodSkillCustom && <TripodSkillCustom data={tripodSkillCustom} />}
      </div>
    </div>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
