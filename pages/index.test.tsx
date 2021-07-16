import React from "react";
import { render, screen, waitFor } from "utils/test";
import Home from "./index";

describe("Home", () => {
  describe("Data 관리", () => {
    beforeEach(() => {
      render(<Home />);
    });
    it("첫 마운트 시, homeData가 없다면 homeDate 받아오기", async () => {
      expect(screen.getByRole("home").dataset.isdata).toBe("false");
      await waitFor(() => {
        expect(screen.getByRole("home").dataset.isdata).toBe("true");
      });
    });
  });
});

// 자정이 되었을 때 dispatcher가 실행되는것을 확인해야함
// Redux textcode를 작성하면서 재시도해봐야 할 듯
