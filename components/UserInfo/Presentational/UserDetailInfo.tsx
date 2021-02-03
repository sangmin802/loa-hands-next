import React from 'react';
import _ from '../../../Utility';

// 컴포넌트
import Tab from '../../@Shared/Tab';
import UserCollectionList from './UserCollectionList';
import UserEquipList from './UserEquipList';
import UserAvatarList from './UserAvatarList';
import UserBattleSkillList from './UserBattleSkillList';
import UserLifeSkillList from './UserLifeSkillList';
import CollectionImg from '../../@Shared/CollectionImg';

// 타입
import {IChangeUserInfoSubTab} from '../Container/UserDetailInfoContainer'
import UserData from '../../../models/userInfo'
import {IEquip} from '../../../models/abilityInfo'

interface IUserDetailInfo {
  changeUserInfoSubTab : IChangeUserInfoSubTab
  userData : UserData
  userInfoSubTab : number 
  userInfoMainTab : number
}

const UserDetailInfo : React.FC<IUserDetailInfo> = ({
  changeUserInfoSubTab,
  userData, 
  userInfoSubTab, 
  userInfoMainTab
}) => {
  const subTabArr = SetSubTabArr(userInfoMainTab, userData);
  const content = SetContent(userData, userInfoMainTab, userInfoSubTab);
  return(
    <div className="userInfoBottomMainTabContent">
      <div className="userInfoBottomSubTabWrap">
        {subTabArr.map((tab, index) => {
          return <Tab 
              key={`userInfoBottomSubTab${index}`}
              index={index}
              tab={userInfoSubTab}
              tabName={tab}
              tabDispatcher={changeUserInfoSubTab}
          />
        })}
      </div>
      {content}
    </div>
  )
}

function SetSubTabArr(mainTab : number, userData : UserData) {
  const {collectionMini} = userData;
  let subTabArr : (string | JSX.Element)[] = [];
  // let subTabArr : string[] | JSX.Element[] = [];
  // 각 멤버에 시그니처가 있지만, 해당 시그니처는 서로 호환되지 않습니다.ts(2349)
  // 검색해보니 타입호환성이라는 말이 나왔음. 해당 배열에 map메소드를 사용할 때 나오는 val이 서로 아예 달라서 호환되지 않아 생기는 문제인듯 함.
  if(mainTab === 0) subTabArr = ['장비', '아바타'];
  if(mainTab === 1) subTabArr = ['전투스킬', '생활스킬'];
  if(mainTab === 2) {
    subTabArr = collectionMini.map((col, index) => {
      return <CollectionImg 
                key={`collectionMini${index}`}
                index={index}
                size={col.size}
             />
    })
  };
  return subTabArr
}

function SetContent(userData : UserData, mainTab : number, subTab : number){
  const {abilityInfo : {equipInfo, skillInfo}, collectionDetail} = userData;
  const [equipArr, avaterArr] = _.divideEquipInfo(equipInfo);
  
  if(mainTab === 0 && subTab === 0) return [...equipArr].map((equip : IEquip, index) => (<UserEquipList data={equip} key={`userEquipList${index}`} />))
  if(mainTab === 0 && subTab === 1) return <UserAvatarList data={avaterArr} />;
  if(mainTab === 1 && subTab === 0) return skillInfo ? <UserBattleSkillList data = {skillInfo.battleSkill}/> : <div className="noBattleSkillInfo">설정된 스킬이 없습니다.</div>
  if(mainTab === 1 && subTab === 1) return skillInfo ? <UserLifeSkillList data = {skillInfo.lifeSkill} /> : <div className="noBattleSkillInfo">생활스킬이 활성화되지 않았습니다.</div>
  if(mainTab === 2) return <UserCollectionList data={collectionDetail[subTab]}/>
}

export default UserDetailInfo;