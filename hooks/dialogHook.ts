import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dialogToggle } from "store/ducks/toggleSlicer";
import { RootState } from "store/index";
import _ from "utility/utility";

const DialogHook = () => {
  const dispatch = useDispatch();
  const dialog = useSelector(
    (state: RootState) => state.toggleReducer.dialog,
    (left, right) => _.compareObj(left, right)
  );

  const setDialog = useCallback(
    dialog => {
      dispatch(dialogToggle({ dialog }));
    },
    [dispatch]
  );

  return { dialog, setDialog };
};

export default DialogHook;
