import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expeditionPopToggle } from "store/ducks/toggleSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

const ExpeditionPopHooks = () => {
  const dispatch = useDispatch();
  const expeditionPop = useSelector(
    (state: RootState) => state.toggleReducer.expeditionPop,
    (left, right) => _.compareObj(left, right)
  );

  const setExpeditionPop = useCallback(() => {
    dispatch(expeditionPopToggle());
  }, [dispatch]);

  return { expeditionPop, setExpeditionPop };
};

export default ExpeditionPopHooks;
