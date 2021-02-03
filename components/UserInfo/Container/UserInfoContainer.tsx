import React, { useCallback, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../actions';
import _ from '../../../Utility';
import {useRouter} from 'next/router';
import styled from 'styled-components';

// 컴포넌트
import UserInfo from '../Presentational/UserInfo';

// 타입
import {RootState} from '../../../store'

export interface IExpeditionPopToggle {
  (p1 : boolean) : void
}

export interface IChangeUserInfoMainTab {
  (p1 : number) : void
}

// Parameters유틸리티로 history타입 가져옴
export interface IGetUserData {
  (p1 : string, p2 : Parameters<typeof Actions.getUserData_Thunk>[1]) : void
}

const B_UserInfoWrap = styled.div`
  background : #222;
  border-radius : 3px;
  padding : 1rem;
`
const B_BasicInfoWrap = styled.div`
  width : 50%;
  display : flex;
  flex-wrap : wrap;
`
const B_BasicInfo = styled.div`
  width : ${(props : {width : number}) => `${props.width}%`};
  display : flex;
  flex-wrap : wrap;
  margin : 0 .3rem .3rem 0;
  padding-bottom : 15%;
  background : #333;
`

const B_UserCollectoinWrap = styled.div`
  display : flex;
  margin : 1rem 0;
`

const B_UserCollection = styled.div`
  flex-grow : 1;
  margin-right : ${(props : {num : number}) => {
    if(props.num!==8) return '.5rem';
  }};
  background : #333;
  padding-bottom : 5%;
`

const B_UserEquipWrap = styled.div`
  display : flex;
  justify-content : space-between;
`

const B_UserEquipSide = styled.div`
  width : 10%;
`

const B_UserEquip = styled.div`
  padding : 50%;
  margin-top : .5rem;
  background : #333;
`

const UserInfoContainer = ({
  name
} : {
  name : string
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {userData, expeditionPop, userInfoMainTab} = GetState();
  const {expeditionPopToggle, changeUserInfoMainTab, getUserData} = SetDispatchers(dispatch, router)


  // if(!userData){
  //   dispatch(Actions.getUserData_Thunk(name, router));
  // }
  // 이전 React.js에서도 발생했던 문제.
  //    아래의 return으로 돔 생성하기 전에 위의 디스패쳐가 작동되면서 렌더링이 겹치게됨
  //    따라서, 일단 userData여부에 따라 돔을 구성하고 이후에 useEffect로 디스패쳐 작동시키도록 함.
  useEffect(() => {
    if(!userData){
      dispatch(Actions.getUserData_Thunk(name, router));
    }else{
      dispatch(Actions.loadingToggle(false));
    }
  }, [name, userData])

  return (
    <>
    {!userData &&
      <B_UserInfoWrap>
        <B_BasicInfoWrap>
          {[80,45,45,35,35,35,35,35,35].map((i, index) => <B_BasicInfo width={i} key={index+'B_basicInfo'}/>)}
        </B_BasicInfoWrap>
        <B_UserCollectoinWrap>
          {[1,2,3,4,5,6,7,8].map((i, index) => <B_UserCollection num={i} key={index+'B_collection'}/>)}
        </B_UserCollectoinWrap>
        <B_UserEquipWrap>
          <B_UserEquipSide>
            {[1,2,3,4,5,6].map((i, index) => <B_UserEquip key={index+'B_userEquipLeft'}/>)}
          </B_UserEquipSide>
          <B_UserEquipSide>
            {[7,8,9,10,11,12].map((i, index) => <B_UserEquip key={index+'B_userEquipRight'}/>)}
          </B_UserEquipSide>
        </B_UserEquipWrap>
      </B_UserInfoWrap>
    }
    {userData &&
      <UserInfo 
        userData={userData}
        getUserData={getUserData}
        expeditionPop={expeditionPop}
        expeditionPopToggle={expeditionPopToggle}
        userInfoMainTab={userInfoMainTab}
        changeUserInfoMainTab={changeUserInfoMainTab}
      />
    }
    </>
  )

  // return <UserInfo 
  //           userData={userData}
  //           getUserData={getUserData}
  //           expeditionPop={expeditionPop}
  //           expeditionPopToggle={expeditionPopToggle}
  //           userInfoMainTab={userInfoMainTab}
  //           changeUserInfoMainTab={changeUserInfoMainTab}
  //        />
}

function GetState(){
  return useSelector((state : RootState) => ({
    userData : state.userData,
    expeditionPop : state.expeditionPop,
    userInfoMainTab : state.userInfoMainTab,
  }), (left, right) => {
    if(_.compareObj(left, right)) return true;
    return false;
  })
}

function SetDispatchers(dispatch, router){
  const expeditionPopToggle : IExpeditionPopToggle = (bool) => {
    dispatch(Actions.expeditionPopToggle(bool));
  };
  const changeUserInfoMainTab : IChangeUserInfoMainTab = useCallback((index) => {
    dispatch(Actions.changeUserInfoMainTab(index));
  }, [])
  const getUserData : IGetUserData = (value) => {
    dispatch(Actions.getUserData_Thunk(value, router))
  };

  return {expeditionPopToggle, changeUserInfoMainTab, getUserData};
}

export default React.memo(UserInfoContainer, (prev, next) => {
  if(_.compareObj(prev, next)) return true;
  return false;
});