import React from 'react';
import _ from '../../../Utility';
import {useRouter} from 'next/router'

// 타입
import {IExpeditionUserWrap} from '../../../models/userInfo'
import {IGetUserData, IExpeditionPopToggle} from '../Container/UserInfoContainer'

interface IUserExpedition {
  getUserData : IGetUserData
  expeditionPopToggle : IExpeditionPopToggle
  expeditionUserWrap : IExpeditionUserWrap[]
  expeditionPop : boolean
}

const UserExpedition : React.FC<IUserExpedition> = ({
  getUserData,
  expeditionPopToggle,
  expeditionUserWrap,
  expeditionPop
}) => {
  let displayPop = null;
  if(expeditionPop) displayPop = 'displayBlock';

  return(
    <div className={`searchedUserExpedition zIndex11 ${displayPop}`}>
      <div className="searchedUserExpeditionClose"
        onClick={() => {
          expeditionPopToggle(false);
        }}
      >
        닫기
      </div>
      {expeditionUserWrap.map((wrap, index) => {
        return <ExpeditionServer 
                  key={`userExpedition${index}`}
                  wrap={wrap}
                  getUserData={getUserData}
               />
      })}
    </div>    
  )
}

interface IExpeditionServer {
  wrap : IExpeditionUserWrap
  getUserData : IGetUserData
}

const ExpeditionServer : React.FC<IExpeditionServer> = ({
  wrap,
  getUserData,
}) => {
  return(
    <div className="userExpedition">
      <div className="userExpeditionServer rem13">
        {wrap.server}
      </div>
      <div className="userExpeditionCharWrap">
        {wrap.charList.map((char, charIndex) => {
          return <ServerChar 
                    key={`userExpeditionChar${charIndex}`}
                    getUserData={getUserData}
                    char={char}
                 />
        })}
      </div>
    </div>
  )
}

interface IServerChar {
  getUserData : IGetUserData
  char : {name : string, lv : string}
}

const ServerChar : React.FC<IServerChar> = ({
  getUserData,
  char
}) => {
  const router = useRouter();
  return(
    <div className="userExpeditionChar rem09 overflowDot"
      onClick={() => {
        getUserData(char.name, router)
      }}
    >
      {char.lv} {char.name}
    </div>
  )
}

export default UserExpedition;