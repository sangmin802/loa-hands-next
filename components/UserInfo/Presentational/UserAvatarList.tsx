import React from 'react';

// 컴포넌트
import UserItemHover from './UserItemHover';
import UserInfoEquipImg from './UserInfoEquipImg';

// 타입
import {IAv} from '../../../models/abilityInfo'

interface IUserAvatarList {
  data : IAv[]
}

const UserAvatarList : React.FC<IUserAvatarList> = ({
  data
}) => {
  const avatarName = ['Weapon', 'Inst', 'Head', 'Face', 'Cloth', 'Pants'];
  const avatarArr = divdeAvatar(data);
  return(
    <div className="avatarList">
      <div className="avatarListLeft">
        {avatarArr.slice(0, 2).map((res, index) => {
          return <Avatar 
            key={`avatarLeft${index}`}
            arr={res}
            avatarPart={avatarName[index]}
          />
        })}
      </div>
      <div className="avatarListRight">
        {avatarArr.slice(2, 6).map((res, index) => {
          return <Avatar 
            key={`avatarRight${index}`}
            arr={res}
            avatarPart={avatarName[index+2]}
            pos='PosChange'
          />
        })}
      </div>
    </div>
  )
}

function divdeAvatar(data : IAv[]) : IAv[][] {
  return data.reduce((prev, cur) => {
    let num = null;
    if(cur.avatarPart.includes("weapon")){
      num = 0;
    }else if(cur.avatarPart.includes("inst")){
      num = 1;
    }else if(cur.avatarPart.includes("head")){
      num = 2;
    }else if(cur.avatarPart.includes("face")){
      num = 3;
    }else if(cur.avatarPart.includes("cloth")){
      num = 4;
    }else if(cur.avatarPart.includes("pants")){
      num = 5;
    }
    prev[num].push(cur)
    return prev;
  }, [[],[],[],[],[],[]]);
}

interface IAvatar {
  arr : IAv[]
  avatarPart : string
  pos? : string
}

const Avatar : React.FC<IAvatar> = ({
  arr, 
  avatarPart, 
  pos
}) => {
  let flex = 'normal';
  if(avatarPart === 'Face') flex = 'column';
  
  return (
    <div className={`avatarPartWrap avatar${avatarPart} flex${flex}`}>
      {arr.map((res, index) => {
        const {partImg, detail} = res;
        return (
          <div className="avatarWrap hoverTarget" key={`avatar${index}`}>
            {
              detail&&
              <UserItemHover 
                partImg={partImg}
                detail={detail}
                type="AVATAR"
                pos={pos}
              />
            }
            <UserInfoEquipImg data={res}/>
          </div>
        )
      })}
    </div>
  )
}
export default UserAvatarList;