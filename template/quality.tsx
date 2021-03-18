import React from "react";
import _ from "utility/utility";

const Quality = ({ data }: { data? }) => {
  const { quality } = data.detail;

  if (quality === -1) return null;

  const qualityColor = _.setQualityColor(quality);
  return (
    <div className="detailQuality textCenter rem08">
      품질 {quality}%
      <div
        className={`qualityValue gradient${qualityColor}`}
        style={{ width: `${quality}%` }}
      ></div>
    </div>
  );
};

export default Quality;
