import React from "react";
import { render, screen } from "utils/test";
import Detail from "./index";

const initialData = {
  backSrc: "",
  detail: { src: "", grade: 4, title: "", subTitle: [] },
};

describe("Detail", () => {
  it("title color 로직 테스트", () => {
    render(<Detail data={initialData} />);

    expect(screen.getByRole("gradient").getAttribute("color")).toBe(
      "gradient4"
    );
  });
});
