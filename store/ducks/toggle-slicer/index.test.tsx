import * as Slicer from "./";

describe("Actions", () => {
  it("loadingToggle 액션", () => {
    const expectedData = {
      type: "toggle/loadingToggle",
      payload: false,
    };

    expect(Slicer.loadingToggle(false)).toEqual(expectedData);
  });
});
