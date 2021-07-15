import { fireEvent, render, waitFor } from "utils/test";
import { getUserData } from "api/api";
import { USER_DATA } from "constants/index";

import App from "./index";

window.alert = jest.fn();
jest.mock("api/api", () => ({
  getUserData: jest.fn(),
}));

describe("App", () => {
  describe("UserInfo 활성화", () => {
    it("UserInfo Route 이동, 패치완료", async () => {
      (getUserData as jest.Mock).mockResolvedValue(USER_DATA);

      const { getByTestId, container } = render(<App />);

      (container.querySelector(".search-area") as HTMLInputElement).value =
        "모여요꿈동산";

      fireEvent.submit(getByTestId("submit-form"));

      await waitFor(() => expect(getByTestId("모여요꿈동산")).toBeTruthy());
    });

    // describe('asyncBoundary', async() => {
    //   it('로딩', () => {
    //     (getUserData as jest.Mock).mockResolvedValue(USER_DATA);

    //     const { getByTestId, container } = render(<App />);

    //     (container.querySelector(".search-area") as HTMLInputElement).value =
    //       "모여요꿈동산";

    //     await waitFor(() => expect(getByTestId("모여요꿈동산")).toBeTruthy());
    //   })

    //   it('에러', () => {

    //   })

    //   it('재시도', () => {

    //   })
    // })
  });
});
