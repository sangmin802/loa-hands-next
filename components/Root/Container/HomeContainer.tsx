import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import * as Actions from '../../../actions';
import {dailyIsland, fieldBoss, chaosGate, oceanCont} from '../../../JSON';
import HomeData from '../../../models/homeData';
import _ from '../../../Utility';

import Home from '../Presentational/Home';

const HomeContainer = ({
  homeData
} : {
  homeData : HomeData
}) => {
  // 자정일 때, homeData 새롭게 받아와서 Home 다시 렌더링
  DateOver();
  return <Home
            homeData={homeData}
            dailyIsland={dailyIsland}
            fieldBoss={fieldBoss}
            chaosGate={chaosGate}
            oceanCont={oceanCont}
         />
}

function DateOver(){
  const dispatch = useDispatch();
  useEffect(() => {
    const checkNight = function(){
      const hour = new Date().getHours();
      const min = new Date().getMinutes();
      const sec = new Date().getSeconds();
      if(hour === 0 && min === 0 && sec === 0){
        dispatch(Actions.setHomeData_Thunk(true));
      }
    }
    const checkInterval = setInterval(checkNight, 1000);
    return () => {
      clearInterval(checkInterval)
    }
  }, [])
}

export default React.memo(HomeContainer, () => true);