import { store } from "./index";

describe("Store", () => {
  describe("Reducer", () => {
    it("initial data", () => {
      const state = store.getState();
      const expectedAjax = { userData: null, homeData: null };
      const expectedToggle = { isLoading: false };

      expect(state.ajaxReducer).toEqual(expectedAjax);
      expect(state.toggleReducer).toEqual(expectedToggle);
    });

    it("set loadingToggle", () => {
      let action = {
        type: "toggle/loadingToggle",
        payload: true,
      };

      store.dispatch(action);

      expect(store.getState().toggleReducer.isLoading).toBe(true);

      action.payload = false;

      store.dispatch(action);

      expect(store.getState().toggleReducer.isLoading).toBe(false);
    });

    it("set userData", async () => {
      const fakeUser = {
        name: "상민",
      };
      const action = {
        type: "ajax/getUserData",
        payload: { userData: fakeUser },
      };

      await store.dispatch(action);

      expect(store.getState().ajaxReducer.userData).toEqual(fakeUser);
    });

    it("set homeData", async () => {
      const fakeHome = {
        name: "홈",
      };
      const action = {
        type: "ajax/getHomeData",
        payload: { homeData: fakeHome },
      };

      await store.dispatch(action);

      expect(store.getState().ajaxReducer.homeData).toEqual(fakeHome);
    });
  });
});
