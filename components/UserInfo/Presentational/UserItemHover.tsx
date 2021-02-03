import React from 'react';
import _ from '../../../Utility';

// 컴포넌트
import ItemPartBox from '../../@Shared/ItemPartBox';
import IntentString from '../../@Shared/IntentString';
import SingleTextBox from '../../@Shared/SingleTextBox';

// 타입
import EquipInfo from '../../../models/equipInfo'

interface IUserItemHover {
  partImg : string
  detail : EquipInfo
  type : string
  pos? : string
}

const UserItemHover : React.FC<IUserItemHover> = ({
  partImg, 
  detail, 
  type,
  pos
}) => {
  if(!detail) return null;

  const {ItemTitle0, NameTagBox0, equipGroupType} = detail;
  const {value : {slotData : {iconPath, iconGrade}}} = ItemTitle0;
  const [equipGrade,,tier, qualityValue] = _.multipleValues(ItemTitle0.value);
  const dataArray = Object.values(detail);
  const qualityColor = setQualityColor(qualityValue);

  return(
    <div className={`listDetail hoverContent zIndex10 ${pos} listDetail${type}`}>
      <div className="listDetailTop">
        <div className="listDetailImg">
          <div className="listDetailImgs">
            <img className="imgWidth" src={`//cdn-lostark.game.onstove.com${partImg}`} alt="partImg"/>
            <img className={`equipMainImg absolute imgWidth gradient${iconGrade}`} src={`//cdn-lostark.game.onstove.com/${iconPath}`} alt={iconPath} />
          </div>
        </div>
        <div className="listDetailMainInfo">
          <div className={`listDetailName overflowDot color${iconGrade} rem1`}>
            {_.getOnlyText(NameTagBox0.value)}
          </div>
          <div className={`listDetailGrade overflowDot color${iconGrade} rem09`}>
            {equipGrade}
          </div>
          <div className='listDetailTier overflowDot rem09'>
            {tier}
          </div>
        </div>
      </div>
      {
        type==='EQUIP' &&
        <CreateQualityGraph 
          qualityColor={qualityColor} 
          qualityValue={qualityValue} 
          equipGroupType={equipGroupType}
        />
      }
      <div className="listDetailBottom">
        <ItemPartBox arr={_.getSameTypeObj(dataArray, "ItemPartBox")}/>
        {equipGroupType !== "Stone" &&
          <IntentString 
            arr={_.getSameTypeObj(dataArray, "IntentStringGroup")}
          />
        }
        <SingleTextBox arr={_.getSameTypeObj(dataArray, "SingleTextBox")}/>
        {
          _.getSameTypeObj(dataArray, "TripodSkillCustom").map((res, index) => {
            return <TripodContents 
              key={`EquipGem${index}`}
              equipTripod={res}
              equipGroupType={equipGroupType}
            />
          })
        }
      </div>
    </div>
  )
}

function setQualityColor(qualityValue : number){
  if(qualityValue >= 0 && qualityValue < 10) return -1
  if(qualityValue >= 10 && qualityValue < 70) return 1;
  if(qualityValue >= 70 && qualityValue < 90) return 2;
  if(qualityValue >= 90) return 3;
  return -2;
}

interface ICreateQualityGraph {
  qualityColor : number
  qualityValue : string | number
  equipGroupType : string
}

const CreateQualityGraph : React.FC<ICreateQualityGraph> = ({
  qualityColor, 
  qualityValue, 
  equipGroupType
}) => {
  if(equipGroupType==='Stone') return null;
  if(typeof qualityValue !== 'number') return null;
  return (
    <div className='listDetailQuality textCenter rem08'>
      품질 {qualityValue}%
      <div className={`qualityValue gradient${qualityColor}`} style={{width : `${qualityValue}%`}}>
      </div>
    </div>
  )
}

interface IGem {
  // Gem 컴포넌트에서 필요한 속성
  name : string
  desc : string
  slotData : {
    iconGrade : number
    iconPath : string
  }
  iconGrade : number
}


interface ITripodContents {
  equipTripod : {
    value : IGem
  }
  equipGroupType : string
}

const TripodContents : React.FC<ITripodContents> = ({
  equipTripod, 
  equipGroupType
}) => {
  if(!equipTripod) return null;
  const tripodValues = Object.values(equipTripod.value);
  return (
    <>
      {
        tripodValues.map((res : IGem, index) => {
          if(equipGroupType==='Acc') return <Gem key={`gemTripod${res.name}${index}`} data={res} />
        })
      }
    </>
  ) 
}

const Gem : React.FC<{data : IGem}> = ({
  data
}) => {
  const {desc} = data;
  const bool = desc !== '보석 장착 필요';
  return (
    <div className="tripodSkillCustom">
      <div
        className="GemImg"
        style={bool ? {border : '1px solid #999'} : null}
      >
        {bool ? <img className={`gradient${data.slotData.iconGrade} imgWidth`} src={`//cdn-lostark.game.onstove.com/${data.slotData.iconPath}`} alt="보석"/> : null}
      </div>
      <div className="GemInfo">
        <div 
          className={`
          GemName 
          overflowDot 
          rem09 
          ${bool ? `color${data.iconGrade}` : ''}
          `}
        >
          {bool ? _.getOnlyText(data.name) : desc}
        </div>
        <div className="GemStat rem08 overflowDot">
          {bool ? desc : null}
        </div>
      </div>
    </div>
  )
}
export default UserItemHover;