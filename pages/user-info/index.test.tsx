import { fireEvent, render } from "utils/test";
import UserInfo from "./[name]";
import { AsyncBoundary, ErrorFallback, SearchLoading } from "components/";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import { useUser } from "hooks/use-user";
import { USER_DATA } from "constants/index";

// 정상적인 userInfo 렌더링
// error, loading 은 상위컴포넌트에서 테스트

const renderWithRouter = (component, route) => {
  const history = createMemoryHistory();

  if (route) history.push(route);

  return (
    <Router history={history}>
      <AsyncBoundary
        suspenseFallback={<SearchLoading />}
        errorFallback={<ErrorFallback />}
      >
        <Route path="/userInfo/:name">{component}</Route>
      </AsyncBoundary>
    </Router>
  );
};

// 모듈 경로 자체를 mocking 해줘야 함. 그냥 값만 mocking 하면 하위에서 해당 모듈을 사용하는 경우 다른 상수값으로 import해서 적용 안됨
jest.mock("hooks/use-user", () => ({
  useUser: jest.fn().mockImplementation(() => ({})),
}));

window.alert = jest.fn();
window.scrollTo = jest.fn();

describe("UserInfo", () => {
  it("useUser name 변수 확인", async () => {
    render(renderWithRouter(<UserInfo />, "/userInfo/모여요꿈동산"));

    expect(useUser as jest.Mock).toBeCalledWith("모여요꿈동산");
  });

  describe("data fetched", () => {
    beforeEach(() => {
      (useUser as jest.Mock).mockImplementationOnce(() => USER_DATA);
    });

    it("name변수에 맞는 유저정보 fetched", () => {
      const { getByTestId } = render(
        renderWithRouter(<UserInfo />, "/userInfo/모여요꿈동산")
      );

      expect(getByTestId("모여요꿈동산")).toBeTruthy();
    });
  });

  describe("user event", () => {
    beforeEach(() => {
      (useUser as jest.Mock).mockImplementation(() => USER_DATA);
    });

    it("네비게이션 변경", () => {
      const { getByTestId } = render(
        renderWithRouter(<UserInfo />, "/userInfo/모여요꿈동산")
      );

      expect(getByTestId("main-content-0")).toBeTruthy();

      fireEvent.click(getByTestId("main-nav-1"));

      expect(getByTestId("main-content-0").dataset.show).toBe("false");
      expect(getByTestId("main-content-1").dataset.show).toBe("true");
    });

    it("상세보기 다이얼로그 활성화", () => {
      const { getAllByTestId, queryByTestId, getByTestId } = render(
        renderWithRouter(<UserInfo />, "/userInfo/모여요꿈동산")
      );

      expect(queryByTestId("dialog-content")).toBe(null);

      fireEvent.click(getAllByTestId("list-item")[0]);

      expect(getByTestId("dialog-content")).toBeTruthy();
    });

    it("원정대 유저 팝업 활성화 및 검색 실행", () => {
      const { queryByTestId, getByTestId, getByText, debug } = render(
        renderWithRouter(<UserInfo />, "/userInfo/모여요꿈동산")
      );

      expect(queryByTestId("dialog-content")).toBe(null);

      fireEvent.click(getByTestId("expedition-button"));

      expect(getByTestId("dialog-content")).toBeTruthy();
      expect(getByText(/워로드는뒤로점프/gi)).toBeTruthy();

      fireEvent.click(getByText(/워로드는뒤로점프/gi));

      expect(useUser as jest.Mock).toBeCalledWith("워로드는뒤로점프");
      expect(queryByTestId("dialog-content")).toBe(null);
    });
  });
});
