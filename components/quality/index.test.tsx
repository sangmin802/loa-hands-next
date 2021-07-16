import React from "react";
import { render, screen } from "utils/test";
import Quality from "./index";

const initialData = {
  detail: {
    quality: 66,
  },
};

describe("Quality", () => {
  it("품질 스타일 로직", () => {
    render(<Quality data={initialData} />);

    expect(screen.getByRole("quality-background").getAttribute("color")).toBe(
      "gradient1"
    );
  });
});
