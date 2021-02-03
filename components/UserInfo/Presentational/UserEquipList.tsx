import React from 'react';
import _ from '../../../Utility';

// 컴포넌트
import UserItemHover from './UserItemHover';

// 타입
import EquipInfo from '../../../models/equipInfo';
import {IEquip} from '../../../models/abilityInfo';

interface IUserEquipList {
  data : IEquip
}

const UserEquipList : React.FC<IUserEquipList> = ({
  data,
}) => {
  const {partImg, detail} = data;
  return(
    <div className="equipList hoverTarget">
      <UserItemHover 
        partImg={partImg}
        detail={detail}
        type='EQUIP'
      />
      <EquipImg 
        partImg={partImg}
        detail={detail}
      />
      <EquipContent 
        detail={detail}
      />
    </div>
  )
};

interface IEquipImg {
  partImg : string
  detail : EquipInfo
}

const EquipImg : React.FC<IEquipImg> = ({
  partImg,
  detail
}) => {
  if(!detail) return (
    <div className="equipListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
    </div>
  )
  // 디스트럭쳐링을 하고자 할 때, 해당 값의 타입에 디스트럭쳐링 구조는 가지고있는게 나을 듯 함.
  // 생각해보면 애초에 디스트럭처링을 한다는것 자체가, 나는 해당 속성을 가지고있다는것을 알고있고, 설상 없다하더라도 nullable로 `?`를 붙여주면 그만
  const {ItemTitle0 : {value : {slotData : {iconPath, iconGrade}}}} = detail;
  return (
    <div className="equipListImg">
      <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
      <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
    </div>
  )
};

interface IEquipContent {
  detail : EquipInfo
}

const EquipContent : React.FC<IEquipContent> = ({
  detail
}) => {
  if(!detail) return <div className="equipListContent"></div>;
  const {NameTagBox0, ItemTitle0} = detail;
  const itemName = _.getOnlyText(NameTagBox0.value);
  const [,second,third] = _.multipleValues(ItemTitle0.value);
  let desc = third;
  if(third === '장착중') desc = `${second} (티어 0)`;
  if(third === '') desc = `아이템 티어 0`;

  return(
    <div className="equipListContent">
      <div className="equipListTier rem08">{desc}</div>
      <div className={`equipListName rem09`}>{itemName}</div>
    </div>
  )
}

export default UserEquipList;