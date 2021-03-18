import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingToggle } from "store/ducks/toggleSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

const LoadingToggleHooks = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.toggleReducer.isLoading,
    (left, right) => _.compareObj(left, right)
  );

  const setisLoading = useCallback(() => {
    dispatch(loadingToggle());
  }, [dispatch]);

  return { isLoading, setisLoading };
};

export default LoadingToggleHooks;
