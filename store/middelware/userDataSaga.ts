import { put, takeLatest, call } from "redux-saga/effects";
import { loadingToggle, resetToggle } from "../ducks/toggleSlicer";
import { resetTab } from "../ducks/tabSlicer";
import API from "api/API";
import { GET_USER_DATA_SAGA, getUserData } from "../ducks/ajaxSlicer";

export function* getUserData_Saga(action) {
  const name = action.name.replace(/ /g, "");
  const history = action.history;
  if (name) {
    yield put(loadingToggle());
    try {
      const userData = yield call(API.getUserData, name);
      yield put(resetTab());
      yield put(getUserData({ userData }));
      history.replace(`/userInfo/${name}`);
    } catch (err) {
      alert(err.message);
      yield put(loadingToggle());
      history.replace(`/`);
    }
  }
}

export function* userDataSaga() {
  yield takeLatest(GET_USER_DATA_SAGA, getUserData_Saga); // 가장 마지막으로 디스패치된 액션만을 처리
}
