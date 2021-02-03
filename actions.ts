import API from './API';
import HomeData from './models/homeData'
import UserInfo from './models/userInfo'
import { HYDRATE } from 'next-redux-wrapper';

// Action types
const LOADING_TOGGLE = 'LOADING_TOGGLE' as const;
const GET_USER_DATA = 'GET_USER_DATA' as const;
const SET_HOME_DATA = 'SET_HOME_DATA' as const;
const EXPEDITION_POP_TOGGLE = 'EXPEDITION_POP_TOGGLE' as const;
const MAIN_TAB = 'change_user_info/MAIN_TAB' as const;
const SUB_TAB = 'change_user_info/SUB_TAB' as const;
// 객체에 들어가게되는 const 값들에게 as const로 주어 객체의 속성이 되더라도 다른값이 대입되지 않도록 하기 위함.
// 기본적으로 const의 값이더라도 객체의 속성이 되면 let처럼 다른값이 대입될수 있게 됨
// 따라서, 리듀서에서 각각의 액션을 조회했을 때, 지정해준 값들이 단순 문자열로 추론되어버림. 그것을 막기 위해 let과같은 것들도 const화 하기 위해 as const라는 기능이 생김

// const도, 값이 특정한 리턴함수를 통해 나오는 경우라면 정해져있는것이 아니라 예상할 수 없어, let처럼 타입추론을 함
// Action creators
export const loadingToggle = (
    loadingPop : boolean
  ) => {
  return {
    type : LOADING_TOGGLE,
    loadingPop
  }
}
export const getUserData = (
    data : UserInfo, 
  ) => {
  return {
    type : GET_USER_DATA,
    data,
  }
}
export const setHomeData = (
    homeData : HomeData, 
  ) => {
  return {
    type : SET_HOME_DATA,
    homeData,
  }
}
export const expeditionPopToggle = (
  expeditionPop : boolean
) => {
  return {
    type : EXPEDITION_POP_TOGGLE,
    expeditionPop
  }
}
export const changeUserInfoMainTab = (
    userInfoMainTab : number
  ) => {
  return {
    type : MAIN_TAB,
    userInfoMainTab
  }
}
export const changeUserInfoSubTab = (
  userInfoSubTab : number
) => {
  return {
    type : SUB_TAB,
    userInfoSubTab
  }
}


// Thunk Action creators
export const getUserData_Thunk = (
  name : string, 
  router
) => async (
    dispatch
  ) => {
  if(name.replace(/ /g,'')){
    dispatch(loadingToggle(true));
    // async await 버전
    try {
      const data : UserInfo = await API.getUserData(name.replace(/ /g,''));
      dispatch(getUserData(data))
      router.push(`/userInfo/${name}`)
    } catch(err) {
      alert(err.message);
      dispatch(loadingToggle(false));
      router.push(`/`)
    }
  }
}

export const setHomeData_Thunk = (
  isClient? : Boolean,
  router?
) => (
    dispatch
  ) => {
  dispatch(loadingToggle(true));
  API.getHomeData(isClient)
  .then((homeData : HomeData) => {
    dispatch(setHomeData(homeData))
    router?.push(`/`);
  })
}

export type ActionType = // 각각의 Action들이 반환하는 값들의 타입을 묶음
  | {type : typeof HYDRATE, payload : {homeData : string}}
  | ReturnType<typeof loadingToggle>
  | ReturnType<typeof getUserData>
  | ReturnType<typeof setHomeData>
  | ReturnType<typeof expeditionPopToggle>
  | ReturnType<typeof changeUserInfoMainTab>
  | ReturnType<typeof changeUserInfoSubTab>;