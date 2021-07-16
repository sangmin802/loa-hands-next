import * as Saga from "./index";
import * as matchers from "redux-saga-test-plan/matchers";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import { rootReducer } from "../../index";
import Api from "api/api";

describe("getUserData_Saga", () => {
  const name = "상민";
  const replaceMock = jest.fn();
  const history = {
    replace: replaceMock,
  };
  const action = { name, history };
  const fakeUser = { name, age: 27 };

  beforeEach(() => {
    jest.spyOn(global, "alert").mockImplementation(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("userData_Saga 정상 진행", async () => {
    // provide를 통해 외부 메소드들을 mocking하여 값을 매칭함
    //    인자를 보내줄 필요가 없고, 내부에서 계산할 필요도 없이 매칭된 값을 바로 반환한다
    //    [mocking할 메소드, 값]

    await expectSaga(Saga.getUserData_Saga, action)
      .withReducer(rootReducer)
      .put({
        type: "toggle/loadingToggle",
        payload: true,
      })
      .provide([[matchers.call.fn(Api.getUserData), fakeUser]])
      .put({
        type: "ajax/getUserData",
        payload: { userData: fakeUser },
      })
      .put({
        type: "toggle/loadingToggle",
        payload: false,
      })
      .hasFinalState({
        ajaxReducer: { userData: fakeUser, homeData: null },
        toggleReducer: { isLoading: false },
      })
      .run();

    expect(replaceMock).toBeCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith("/userInfo/상민");
  });

  it("userData_Saga 에러 반환", async () => {
    await expectSaga(Saga.getUserData_Saga, action)
      .withReducer(rootReducer)
      .put({
        type: "toggle/loadingToggle",
        payload: true,
      })
      .provide([
        [matchers.call.fn(Api.getUserData), throwError(new Error("모의 에러"))],
      ])
      .put({
        type: "toggle/loadingToggle",
        payload: false,
      })
      .hasFinalState({
        ajaxReducer: { userData: null, homeData: null },
        toggleReducer: { isLoading: false },
      })
      .run();

    expect(global.alert as jest.Mock).toBeCalledTimes(1);
    expect(global.alert as jest.Mock).toHaveBeenCalledWith("모의 에러");
    expect(replaceMock).toBeCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith("/");
  });
});
