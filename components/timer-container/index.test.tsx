import React from "react";
import { render, screen } from "utils/test";
import TimerContainer from "./index";

const initialData = [
  {
    name: "무릉도원",
    src: "/img/island/island_04.png",
    time: ["00:00", "06:00", "12:00", "18:00"],
    endTime: "18:00",
    lv: 400,
    position: "대항해",
    contType: "ISLAND",
  },
  {
    name: "기에나",
    contType: "CO_OCEAN",
    lv: "-",
    src: "/img/ocean/ocean_01.png",
    position: ["아르데타인", "베른", "애니츠"],
    endPosition: "애니츠",
    time: ["00:00", "12:00", "18:00"],
    endTime: "18:00",
  },
];

const expectData = [
  {
    name: "무릉도원",
    src: "/img/island/island_04.png",
    time: ["18:00"],
    endTime: "18:00",
    lv: 400,
    position: "대항해",
    contType: "ISLAND",
  },
  {
    name: "기에나",
    contType: "CO_OCEAN",
    lv: "-",
    src: "/img/ocean/ocean_01.png",
    position: ["애니츠"],
    endPosition: "애니츠",
    time: ["18:00"],
    endTime: "18:00",
  },
];

describe("TimerContainer", () => {
  it("컨텐츠에서 종료되지 않은 시간대만 유지 및 빠른순으로 정렬", () => {
    render(<TimerContainer data={initialData} />);

    expect(screen.getByRole("timer-container").dataset.timers).toEqual(
      JSON.stringify(expectData)
    );
  });
});
