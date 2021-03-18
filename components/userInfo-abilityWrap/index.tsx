import React from "react";
import _ from "utility/utility";
import "./index.css";
import DoubleColumnWrap from "components/_doubleColumnWrap/index";
import Quality from "template/quality";
import CharacteristicWrap from "components/userInfo-characteristic/index";

const Index = ({ abilityInfo, sub, isTarget = null }) => {
  const { equipInfo, characteristicInfo } = abilityInfo;
  const [av, equip] = _.arrayReducer(Object.values(equipInfo), "Av");
  const { battle, basic, engrave } = characteristicInfo;
  const contentsArr = [
    <DoubleColumnWrap data={equip} type="Equip">
      <Quality />
    </DoubleColumnWrap>,
    <DoubleColumnWrap data={av} type="Inner" />,
    <CharacteristicWrap data={[basic, battle, engrave]} />,
  ];

  return (
    <div className="abilityWrap tabContent1">
      {contentsArr.map((res, index) => (
        <div
          className={`${sub === index ? "" : "displayNone"}`}
          key={`subContentWrap${index}`}
        >
          {res}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Index, (left, right) => {
  if (!right.isTarget) return true;
  return false;
});
