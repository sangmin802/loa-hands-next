import React from 'react';
import _ from '../../Utility';

// 타입
import {IChangeUserInfoMainTab} from '../UserInfo/Container/UserInfoContainer'

interface ITab {
  index : number
  tab : number
  tabDispatcher : IChangeUserInfoMainTab
  tabName : string | JSX.Element
}

const Tab : React.FC<ITab> = ({
  index, 
  tab, 
  tabDispatcher, 
  tabName
}) => {
  let target = null;
  if(index===tab) target = "tabTarget"
  return (
    <div className={`userInfoBottomSubTab textCenter ${target}`}
      onClick={() => {
        tabDispatcher(index)
      }}
    >
      {tabName}
    </div>
  )
}

export default React.memo(Tab, (prev, next) => {
  if(prev.tab!==next.tab) return false;
  if(prev.tabName!==next.tabName) return false;
  return true;
});