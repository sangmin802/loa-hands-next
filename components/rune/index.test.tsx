import React from "react";
import { render, screen } from "utils/test";
import Rune from "./index";

const initialData = {
  detail: {
    rune: {
      runeGrade: "전설",
      runeImg: "",
      runeInfo: "",
    },
  },
};

describe("Rune", () => {
  it("룬 등급 로직", () => {
    render(<Rune data={initialData} />);

    expect(screen.getByRole("rune-grade").dataset.grade).toBe("4");
  });
});
