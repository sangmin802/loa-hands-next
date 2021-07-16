import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "utils/test";
import Timer from "./index";

const initialData = {
  name: "기에나",
  contType: "CO_OCEAN",
  lv: "-",
  src: "/img/ocean/ocean_01.png",
  position: ["아르데타인", "베른", "애니츠"],
  // position: [],
  // position: '애니츠',
  endPosition: "애니츠",
  time: ["00:20"],
  endTime: "00:20",
};

const initialData2 = {
  name: "기에나",
  contType: "CO_OCEAN",
  lv: "-",
  src: "/img/ocean/ocean_01.png",
  position: ["아르데타인", "베른", "애니츠"],
  // position: [],
  // position: '애니츠',
  endPosition: "애니츠",
  time: ["20:00"],
  endTime: "20:00",
};

const timeNumber = string => {
  return Number(string.replace(/:/gi, ""));
};

describe("Timer1", () => {
  beforeEach(() => {
    const mockDate = new Date(2021, 5, 11, 0, 10);
    const cloasDate = new Date(2021, 5, 11, 0, 23);
    const startDate = new Date(2021, 5, 11, 0, 20);
    jest
      .spyOn(global, "Date")
      .mockImplementationOnce(() => mockDate as unknown as string)
      .mockImplementationOnce(() => cloasDate as unknown as string)
      .mockImplementationOnce(() => startDate as unknown as string);

    const setTime = jest.fn();
    render(<Timer data={initialData} setTime={setTime} />);
  });

  afterEach(() => {
    // jest.clearAllMocks() : jest.fn()로 생성된 모의함수들의 calls와 instance 속성을 초기화
    //    clearAllMocks만 해주었을 때에 spy함수의 mockImplementationOnce가 횟수대로 잘 진행되어 에러가 없지만,
    //    테스트가 2개가 되었을 때에는, spy가 초기화되지 않아 mockImplementationOnce횟수가 없어서 실제코드에서 Date가 undefined로 되어 에러가 발생
    //    첫 beforEach에서는 new Date가 기본의 인스턴스지만. 두번째 beforeEach에는 mock 인스턴스가 되어있어서
    //    생성하는 Date 상수들이 그냥 mock인스턴스로 만들어짐. 그래서, Date 메소드들이 없다는 에러가 발생함
    // jest.restoreAllMocks() : spy중인 함수에서 spy를 제거하고, 원래의 상태로 복구시킴
    //    해당 메소드는 spyOn으로 mocking 된 경우들만 작동됨
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("position 속성의 타입별 변동값", () => {
    expect(screen.getByRole("position").textContent).toBe("아르데타인");
  });

  it("타임아웃 계산 로직", () => {
    expect(screen.getByRole("timer-alert").textContent).toBe("컨텐츠 준비중");
    expect(screen.getByRole("timer-border").dataset.border).toBe("#CC99FF");
  });
});

describe("Timer2", () => {
  beforeEach(() => {
    const setTime = jest.fn();
    render(<Timer data={initialData2} setTime={setTime} />);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("타이머", async () => {
    const prevTime = timeNumber(screen.getByRole("timeout").textContent);
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    await waitFor(() => {
      expect(timeNumber(screen.getByRole("timeout").textContent)).toBe(
        prevTime - 1
      );
    });
  });
});
