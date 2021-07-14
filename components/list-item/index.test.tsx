import React from "react";
import { fireEvent, render, screen } from "utils/test";
import ListItem from "./index";

const initialData = {
  detail: {
    subTitle: ["서브타이틀1", "서브타이틀2"],
    title: "타이틀",
    hover: true,
  },
};

describe("ListItem", () => {
  it("아이템 상세보기 다이얼로그 활성화", () => {
    const setDialog = jest.fn();
    render(
      <ListItem data={initialData} setDialog={setDialog}>
        <div />
      </ListItem>
    );

    fireEvent.click(screen.getByTestId("list-item"));

    expect(setDialog).toBeCalledTimes(1);
    expect(setDialog.mock.calls[0][0].props.data).toEqual(initialData);
  });
});
