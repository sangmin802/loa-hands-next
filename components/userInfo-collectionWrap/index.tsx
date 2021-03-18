import React from "react";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";

const Index = ({ collectionInfo, sub, isTarget = null }) => {
  const { collectionDetail } = collectionInfo;

  return (
    <div className="collectionWrap">
      {collectionDetail.map((res, index) => (
        <div
          className={`${sub === index ? "" : "displayNone"}`}
          key={`subContentWrap${index}`}
        >
          <DoubleColumnWrap
            key={index}
            data={res.collection}
            type="True"
            lt={res.title}
            rt={`획득 : ${res.getCount} 미획득 : ${res.totalCount}`}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Index, (left, right) => {
  if (!right.isTarget) return true;
  return false;
});
