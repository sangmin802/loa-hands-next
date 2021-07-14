import React from "react";
import { render, screen } from "utils/test";
import DoubleListContainer from "./index";

const initialData = [
  { id: 1, divideType: "left" },
  { id: 2, divideType: "right" },
  { id: 3, divideType: "right" },
  { id: 4, divideType: "left" },
  { id: 5, divideType: "right" },
];

describe("DoubleListContainer", () => {
  beforeEach(() => {
    render(
      <DoubleListContainer
        data={initialData}
        lt="left"
        rt="right"
        divideType="left"
      >
        <div>,child</div>
      </DoubleListContainer>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("데이터 조건에 따라 좌측, 우측 분리", () => {
    const left = screen.getByRole("left").dataset.size;
    const right = screen.getByRole("right").dataset.size;

    expect(left).toBe("2");
    expect(right).toBe("3");
  });
});
