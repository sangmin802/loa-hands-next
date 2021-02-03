import React from 'react';
import _ from '../../../Utility';
import styled from 'styled-components';

// 컴포넌트
import UserBasicInfo from './UserBasicInfo';
import UserExpedition from './UserExpedition';
import UserInfoEquipImg from './UserInfoEquipImg';
import Tab from '../../@Shared/Tab';
import UserDetailInfoContainer from '../Container/UserDetailInfoContainer';

// 타입
import UserData from '../../../models/userInfo';
import {IAv, IEquip} from '../../../models/abilityInfo';
import {IGetUserData, IExpeditionPopToggle, IChangeUserInfoMainTab} from '../Container/UserInfoContainer'

interface Props {
  userData : UserData
  expeditionPop : boolean
  userInfoMainTab : number 
  getUserData : IGetUserData
  expeditionPopToggle : IExpeditionPopToggle
  changeUserInfoMainTab : IChangeUserInfoMainTab
}

// const B_UserInfoWrap = styled.div`
//   background : #222;
//   border-radius : 3px;
//   padding : 1rem;
// `
// const B_BasicInfoWrap = styled.div`
//   width : 50%;
//   display : flex;
//   flex-wrap : wrap;
// `
// const B_BasicInfo = styled.div`
//   width : ${(props : {width : number}) => `${props.width}%`};
//   display : flex;
//   flex-wrap : wrap;
//   margin : 0 .3rem .3rem 0;
//   padding-bottom : 15%;
//   background : #333;
// `

// const B_UserCollectoinWrap = styled.div`
//   display : flex;
//   margin : 1rem 0;
// `

// const B_UserCollection = styled.div`
//   flex-grow : 1;
//   margin-right : ${(props : {num : number}) => {
//     if(props.num!==8) return '.5rem';
//   }};
//   background : #333;
//   padding-bottom : 5%;
// `

// const B_UserEquipWrap = styled.div`
//   display : flex;
//   justify-content : space-between;
// `

// const B_UserEquipSide = styled.div`
//   width : 10%;
// `

// const B_UserEquip = styled.div`
//   padding : 50%;
//   margin-top : .5rem;
//   background : #333;
// `

const UserInfo : React.FC<Props> = ({
  userData, 
  getUserData,
  expeditionPop, 
  expeditionPopToggle, 
  userInfoMainTab, 
  changeUserInfoMainTab
}) => {
  // if(!userData){
  //   return (
  //     <B_UserInfoWrap>
  //       <B_BasicInfoWrap>
  //         {[80,45,45,35,35,35,35,35,35].map((i, index) => <B_BasicInfo width={i} key={index+'B_basicInfo'}/>)}
  //       </B_BasicInfoWrap>
  //       <B_UserCollectoinWrap>
  //         {[1,2,3,4,5,6,7,8].map((i, index) => <B_UserCollection num={i} key={index+'B_collection'}/>)}
  //       </B_UserCollectoinWrap>
  //       <B_UserEquipWrap>
  //         <B_UserEquipSide>
  //           {[1,2,3,4,5,6].map((i, index) => <B_UserEquip key={index+'B_userEquipLeft'}/>)}
  //         </B_UserEquipSide>
  //         <B_UserEquipSide>
  //           {[7,8,9,10,11,12].map((i, index) => <B_UserEquip key={index+'B_userEquipRight'}/>)}
  //         </B_UserEquipSide>
  //       </B_UserEquipWrap>
  //     </B_UserInfoWrap>
  //   )
  // }

  const {abilityInfo : {equipInfo}, expeditionUserWrap, classEngName} = userData;
  const [equipArr, ] : (IEquip[]|IAv[])[]  = _.divideEquipInfo(equipInfo);
  return(
    <div className="userInfo">
      <div className="userInfoTopCetnerWrap">
        <div className="userInfoTop">
          <div className="showExpeditionWrap"
            onClick={() => {
              expeditionPopToggle(true);
            }}
          >
            원정대 캐릭터 보기
          </div>
          <UserBasicInfo 
            userData={userData}
          />
          <UserExpedition 
            getUserData={getUserData}
            expeditionUserWrap={expeditionUserWrap}
            expeditionPopToggle={expeditionPopToggle}
            expeditionPop={expeditionPop}
          />
        </div>
        {/* 중앙 장비 */}
        <div className="userInfoCenter">
          <div className="userInfoLeft equipImgWrap">
            {
              [...equipArr].splice(0,6).map((equip, index) =>{
                return <UserInfoEquipImg key={`EquipImg${index}`} data={equip}/>
              })
            }
          </div>
          <div className="userClassImg">
            <img src={`http://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/${classEngName}.png`} alt="classImg"/>
          </div>
          <div className="userInfoRight equipImgWrap">
            {
              [...equipArr].splice(6,6).map((equip, index) =>{
                return <UserInfoEquipImg key={`EquipImg${index}`} data={equip}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="userInfoBottom">
        <div className="userInfoBottomMainTabWrap">
          {['능력치','스킬' , '수집형포인트'].map((tab, index) => {
            return <Tab 
                      key={`userInfoBottomMainTab${index}`}
                      index={index}
                      tab={userInfoMainTab}
                      tabName={tab}
                      tabDispatcher={changeUserInfoMainTab}
                   />
          })}
        </div>
        <UserDetailInfoContainer />
      </div>
    </div>
  )
}

export default UserInfo;