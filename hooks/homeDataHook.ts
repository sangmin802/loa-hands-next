import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getHomeData_Saga_Async } from "store/ducks/ajaxSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

const HomeDataHooks = () => {
  const dispatch = useDispatch();
  const history = useRouter();
  const homeData = useSelector(
    (state: RootState) => state.ajaxReducer.homeData,
    (left, right) => _.compareObj(left, right)
  );

  const setHomeData = useCallback(
    (homeData?) => {
      if (homeData) return history.replace("/");
      dispatch(getHomeData_Saga_Async(history));
    },
    [dispatch, history]
  );

  return { homeData, setHomeData };
};

export default HomeDataHooks;
