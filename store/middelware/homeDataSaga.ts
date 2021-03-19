import { put, takeLatest, call } from "redux-saga/effects";
import { resetToggle } from "../ducks/toggleSlicer";
import { resetTab } from "../ducks/tabSlicer";
import API from "api/API";
import { GET_HOME_DATA_SAGA, getHomeData } from "../ducks/ajaxSlicer";

export function* getHomeData_Saga(action) {
  const history = action.history;
  try {
    const homeData = yield call(API.getHomeData);
    yield put(resetToggle());
    yield put(resetTab());
    yield put(getHomeData({ homeData }));
    if (history) history.replace(`/`);
  } catch (err) {
    alert(err);
  }
}

export function* homeDataSaga() {
  yield takeLatest(GET_HOME_DATA_SAGA, getHomeData_Saga); // 가장 마지막으로 디스패치된 액션만을 처리
}
