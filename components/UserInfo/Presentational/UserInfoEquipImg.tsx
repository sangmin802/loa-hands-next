import React from 'react';
import _ from '../../../Utility';

// 타입
import {IAv, IEquip} from '../../../models/abilityInfo';

const UserInfoEquipImg : React.FC<{data : IAv | IEquip}> = ({
  data
}) => {
  const {partImg, detail} = data;
  let returnTag = 
    <div className="EquipImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  if(detail){
    const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
    returnTag = 
      <div className="EquipImg">
        <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
        <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
      </div>
  }
  return returnTag;
}

export default React.memo(UserInfoEquipImg, (prev, next) => {
  if(_.compareObj(prev, next)) return true;
  return false;
});