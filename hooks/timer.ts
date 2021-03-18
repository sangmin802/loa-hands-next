import { useState, useEffect } from "react";
import _ from "utility/utility";

export const CalcTimer = props => {
  const [state, setState] = useState({ timeOut: null, targetState: "NORMAL" });

  useEffect(() => {
    const intervalArr = [];
    const now = new Date();
    let { time, setTime, contType, waiting } = props;
    // 만약, 카운트다운이 끝나서 상위 이벤트 실행, 재렌더링 되었을 때 이후의 가능한 시간이 없다면 실행되지 않음.
    if (time) {
      const [hour, min] = time.split(":");
      const year = now.getFullYear();
      const month = now.getMonth();
      const date = now.getDate();
      const closeTime = new Date(year, month, date, hour, min); // 종료 시간
      const startTime = new Date(year, month, date, hour, min - (waiting || 3)); // 시작 시간

      const startInterval = (second, callback) => {
        callback();
        const interval = setInterval(callback, second * 1000);
        intervalArr.push(interval);
        return interval;
      };

      const intervalTime = (_closeTime, _startTime, _time) => {
        let gap = _startTime.getTime() - new Date().getTime();
        let targetState = "NORMAL";
        // 필드보스와 항해를 제외한 컨텐츠의 대기시간은 10분
        if (
          gap <= 600000 &&
          contType !== "FIELD_BOSS" &&
          contType !== "CO_OCEAN"
        )
          targetState = "APPEAR";
        // 등장시간
        if (gap === 0 || 0 > gap) {
          targetState = "OPEN";
          // 등장 유지시간 설정 (섬 등이 등장중이거나, 항해컨텐츠 알림 등장)
          // 인터벌로 위에서 gap이 시작시간기준으로 다시 잡혀도, 어차피 -값이여서 여기서 gap이 종료시간기준으로 변경됨
          gap = _closeTime.getTime() - new Date().getTime();
        }
        // 등장 유지시간 종료 (섬 등이 사라지거나, 항해컨텐츠 시작)
        if (gap === 0 || 0 > gap) {
          return setTime(_time);
        }

        // 남는시간 설정
        const _sec = 1000;
        const _min = _sec * 60;
        const _hour = _min * 60;
        const hour = Math.floor(gap / _hour);
        const min = Math.floor((gap % _hour) / _min);
        const sec = Math.floor((gap % _min) / _sec);

        setState({
          targetState,
          timeOut: `${_.addZero(hour)}:${_.addZero(min)}:${_.addZero(sec)}`,
        });
      };

      startInterval(1, intervalTime.bind(null, closeTime, startTime, time));
    } else {
      // 새롭게 받아온 시간이 없을 때, 오늘 더이상 열리지 않는 섬일 때 테두리, 색상 등 초기화
      setState({ timeOut: null, targetState: "NORMAL" });
    }
    return () => {
      intervalArr.forEach(interval => clearInterval(interval));
    };
  }, [props]);

  return { state, setState };
};
