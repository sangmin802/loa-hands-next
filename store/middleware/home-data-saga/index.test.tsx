import * as matchers from "redux-saga-test-plan/matchers";
import * as Saga from "./index";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import { rootReducer } from "../../index";
import Api from "api/api";

describe("getHomeData_Saga", () => {
  const fakeHome = { id: "홈" };

  beforeEach(() => {
    jest.spyOn(global, "alert").mockImplementation(null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("homeData_Saga 정상진행", async () => {
    await expectSaga(Saga.getHomeData_Saga)
      .withReducer(rootReducer)
      .provide([[matchers.call.fn(Api.getHomeData), fakeHome]])
      .put({
        type: "ajax/getHomeData",
        payload: { homeData: fakeHome },
      })
      .hasFinalState({
        ajaxReducer: { userData: null, homeData: fakeHome },
        toggleReducer: { isLoading: false },
      })
      .run();
  });

  it("homeData_Saga 에러", async () => {
    await expectSaga(Saga.getHomeData_Saga)
      .withReducer(rootReducer)
      .provide([
        [matchers.call.fn(Api.getHomeData), throwError(new Error("모의 에러"))],
      ])
      .hasFinalState({
        ajaxReducer: { userData: null, homeData: null },
        toggleReducer: { isLoading: false },
      })
      .run();

    expect(global.alert as jest.Mock).toBeCalledTimes(1);
    expect(global.alert as jest.Mock).toHaveBeenCalledWith("모의 에러");
  });
});
