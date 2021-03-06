import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { ajaxReducer } from "./ducks/ajax-slicer";
import { toggleReducer } from "./ducks/toggle-slicer";
import { homeDataSaga } from "./middleware/home-data-saga";
import { userDataSaga } from "./middleware/user-data-saga";
import { all } from "redux-saga/effects";
import { createWrapper } from "next-redux-wrapper";

// const sagaMiddelware = createSagaMiddleware();
const rootReducer = combineReducers({
  ajaxReducer,
  toggleReducer,
});
// export function* rootSaga() {
//   yield all([homeDataSaga(), userDataSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
// }
// export const store = createStore(rootReducer, applyMiddleware(sagaMiddelware));
// sagaMiddelware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>; // 앞으로 useSelector로 상태에 접근할 때 사용할 타입

const configureStore = initialState => {
  const sagaMiddelware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddelware)
  );
  function* rootSaga() {
    yield all([homeDataSaga(), userDataSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
  }
  store.sagaTask = sagaMiddelware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configureStore, { debug: true });
