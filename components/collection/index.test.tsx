import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Item } from "./index";

describe("Collection", () => {
  it("Collection 컴포넌트 적절한 값 렌더링", () => {
    // index 5 -> 627px
    const { container } = render(<Item size={80} index={5} />);
    const backgroundStyle = container
      .querySelector(".collection-mini-bg")
      .getAttribute("style");
    const result = "background-position: 627px 50px;";
    expect(screen.getByText("80")).toBeInTheDocument();
    expect(backgroundStyle).toBe(result);
  });
});
