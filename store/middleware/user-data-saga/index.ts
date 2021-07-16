import { put, takeLatest, call } from "redux-saga/effects";
import { loadingToggle } from "../../ducks/toggle-slicer";
import Api from "api/api";
import { GET_USER_DATA_SAGA, getUserData } from "../../ducks/ajax-slicer";

export function* getUserData_Saga(action) {
  const name = action.name.replace(/ /g, "");
  const history = action.history;
  if (name) {
    yield put(loadingToggle(true));
    try {
      const userData = yield call(Api.getUserData, name);
      yield put(getUserData({ userData }));
      yield put(loadingToggle(false));
      history.replace(`/userInfo/${name}`);
    } catch (err) {
      alert(err.message);
      yield put(loadingToggle(false));
      history.replace(`/`);
    }
  }
}

export function* userDataSaga() {
  yield takeLatest(GET_USER_DATA_SAGA, getUserData_Saga); // 가장 마지막으로 디스패치된 액션만을 처리
}
