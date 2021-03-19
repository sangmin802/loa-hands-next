import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getUserData_Saga_Async } from "store/ducks/ajaxSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

const UserDataHooks = () => {
  const dispatch = useDispatch();
  const history = useRouter();

  const userData = useSelector(
    (state: RootState) => state.ajaxReducer.userData,
    (left, right) => _.compareObj(left, right)
  );

  const setUserData = useCallback(
    name => {
      dispatch(getUserData_Saga_Async(name, history));
    },
    [history, dispatch]
  );

  return { userData, setUserData };
};

export default UserDataHooks;
