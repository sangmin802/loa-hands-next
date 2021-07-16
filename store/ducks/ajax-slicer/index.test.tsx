import * as Slicer from "./index";

describe("Actions", () => {
  describe("일반 Actions", () => {
    it("getUserData 액션 생성", () => {
      const data = { userData: "유저데이터" };
      const expectedAction = {
        type: "ajax/getUserData",
        payload: { userData: "유저데이터" },
      };

      expect(Slicer.getUserData(data)).toEqual(expectedAction);
    });

    it("getHomeData 액션 생성", () => {
      const data = { homeData: "홈데이터" };
      const expectedAction = {
        type: "ajax/getHomeData",
        payload: { homeData: "홈데이터" },
      };

      expect(Slicer.getHomeData(data)).toEqual(expectedAction);
    });
  });

  describe("Saga Actions", () => {
    it("getUserData_Saga_Async 액션 생성", () => {
      const name = "상민";
      const history = jest.fn();
      const expectedAction = {
        type: "GET_USER_DATA_SAGA",
        name: "상민",
        history,
      };

      expect(Slicer.getUserData_Saga_Async(name, history)).toEqual(
        expectedAction
      );
    });

    it("getHomeData_Saga_Async 액션 생성", () => {
      const history = jest.fn();
      const expectedAction = {
        type: "GET_HOME_DATA_SAGA",
        history,
      };

      expect(Slicer.getHomeData_Saga_Async(history)).toEqual(expectedAction);
    });
  });
});
