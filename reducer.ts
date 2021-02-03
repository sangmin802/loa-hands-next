import {ActionType} from './actions'
import HomeData from './models/homeData'
import UserInfo from './models/userInfo'
import { HYDRATE } from 'next-redux-wrapper';
// import { AnyAction } from 'redux';

interface IInitialStates {
  expeditionPop : boolean,
  userInfoMainTab : number,
  userInfoSubTab : number,
  isLoading : boolean,
  homeData : HomeData
  userData : UserInfo
}
// HomeData, UserInfo 타입 추가해줘야 useSelector에서 homeData같은 값들을 찾을 수 있음.
// RootState를 정의할 때 각각의 액션들의 예상 타입들에는 homeData나 userData가 null이 아닌 해당 타입의 값이 들어가는데, 그러한 타입을 IInitialStates가 가지고있지 않아 RootState는 여러개의 예상 결과인 유니온타입으로 갈리고, 유니온타입중 어떤건 homeData를 가지고있고 어떤거는 가지고있지 않아 생기는 문제였음.
// IInitialStates의 유효타입으로 HomeData, UserInfo를 추가하여 모든 액션에 대한 결과 타입들이 해당 인터페이스에 포함되도록 함.

const initialStates : IInitialStates = {
  isLoading : false,
  userData : null,
  homeData : null,
  expeditionPop : false,
  userInfoMainTab : 0,
  userInfoSubTab : 0,
}

const reducer = (
  state : IInitialStates = initialStates, 
  action : ActionType
) => {
  switch(action.type){
    case HYDRATE : {
      return {
        ...state,
        homeData : JSON.parse(action.payload.homeData)
      }
    }
    case 'SET_HOME_DATA' : {
      return {
        ...state,
        homeData : action.homeData,
      }
    }
    case 'LOADING_TOGGLE' : {
      return {
        ...state,
        isLoading : action.loadingPop,
      }
    }
    case 'GET_USER_DATA' : {
      return {
        ...state,
        expeditionPop : false,
        userData : action.data,
        userInfoMainTab : 0,
        userInfoSubTab : 0,
      }
    }
    case 'EXPEDITION_POP_TOGGLE' : {
      return {
        ...state,
        expeditionPop : action.expeditionPop,
      }
    }
    case 'change_user_info/MAIN_TAB' : {
      return {
        ...state,
        userInfoMainTab : action.userInfoMainTab,
        userInfoSubTab : 0,
      }
    }
    case 'change_user_info/SUB_TAB' : {
      return {
        ...state,
        userInfoSubTab : action.userInfoSubTab,
      }
    }
    default : return state;
  }
}

export default reducer;