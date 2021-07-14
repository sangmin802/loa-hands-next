import React from "react";
import { fireEvent, render, screen } from "utils/test";
import Event from "./index";

const initialEvent = {
  data: "날짜",
  href: "경로",
  img: "이미지",
  name: "이벤트명",
};

describe("Event", () => {
  beforeEach(() => {
    render(<Event event={initialEvent} />);
    window.open = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("링크 이동 테스트", () => {
    screen.debug(null);
    const event = screen.getByTitle("event");

    fireEvent.click(event);

    expect(window.open).toBeCalledTimes(1);
  });
});
