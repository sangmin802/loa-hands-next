import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../../actions';
import _ from '../../../Utility';
import {RootState} from '../../../store';

import Header from '../Presentational/Header';

const HeaderContainer : React.FC = () => {
  const dispatch = useDispatch();
  const {homeData} = GetState();
  const {getUserData, setHomeData} = SetDispatchers(dispatch);
  return <Header 
            homeData={homeData}
            getUserData={getUserData}
            setHomeData={setHomeData}
         />
}

function GetState(){
  return useSelector((state : RootState) => ({
    homeData : state.homeData
  }), 
  (left, right) => {
    if(_.compareObj(left.homeData, right.homeData)) return true;
    return false;
  });
}

function SetDispatchers(dispatch){
  const getUserData = (value, router) => {dispatch(Actions.getUserData_Thunk(value, router))};
  const setHomeData = (router) => {dispatch(Actions.setHomeData_Thunk(true, router))};

  return {getUserData, setHomeData};
}

export default React.memo(HeaderContainer, () => true);