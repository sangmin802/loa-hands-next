import React from "react";
import { fireEvent, render, screen } from "utils/test";
import Expedition from "./index";
import Char from "./char/index";

describe("Expedition", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Expedition 컴포넌트 닫기", () => {
    const setDialog = jest.fn();
    const userData = {
      expeditionInfo: {
        expeditionUserWrap: [],
      },
    };
    render(
      <Expedition
        userData={userData}
        setUserData={null}
        setDialog={setDialog}
      />
    );

    fireEvent.click(screen.getByRole("button"));

    expect(setDialog).toBeCalledTimes(1);
    expect(setDialog).toBeCalledWith(null);
  });

  it("선택한 모험단 유저 검색 호출", () => {
    const setUserData = jest.fn();
    const char = {
      lv: "레벨",
      name: "이름",
    };
    render(<Char setUserData={setUserData} char={char} />);

    fireEvent.click(screen.getByRole("button"));

    expect(setUserData).toBeCalledTimes(1);
    expect(setUserData).toBeCalledWith("이름");
  });
});
