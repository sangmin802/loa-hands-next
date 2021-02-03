import React, {useState, useEffect} from 'react';

// 타입
import {IJson} from '../../../interface'

interface Props extends IJson {
  setTime(p1 : string) : void
}

const Timer : React.FC<Props> = (props) => {
  const [state, setState] = GetState();
  
  let {timeOut, targetState} = state;
  let {name, src, time, lv, position, endTime, contType, waiting} = props;
  let borderColor = null;
  let endTimeBg = null;

  TimerInterval(props, state, setState);

  switch(targetState){
    // 섬 10분전
    case 'APPEAR' : 
      borderColor = '#CC99FF';
      time = '일렁이는중'
    break;
    // 섬 등장
    // 그 외, 퀘스트 알림 등장
    case 'OPEN' : 
      borderColor = '#FF6666';
      if(contType !== 'FIELD_BOSS' && contType !== 'CO_OCEAN'){
        time = '출현중';
      }else{
        time = '대기중'
      }
    break;
    // 모두 종료
    case 'NORMAL' : 
      borderColor = null;
    break;
  }

  if(!time){
    time = endTime;
    endTimeBg = 'block';
    timeOut = '종료';
  };

  return(
    <div className="timer" style={{borderColor : borderColor}}>
      <div style={{display : endTimeBg}} className="endTimeBg"></div>
      <div className="timerName rem09 textCenter overflowDot">{name}</div>
      <div className="timerContent">
        <div className="timerImg">
          <img className="imgWidth" src={`https://github.com/sangmin802/loa-hands/blob/master/public/${src}?raw=true`} alt={(name as string)} />
          <div className="timerLv rem07">{lv}</div>
        </div>
        <div className="timerTime">
          <div className="startTime rem08">{minusMin(time, waiting)}</div>
          <div className="timeOut rem08">{timeOut}</div>
        </div>
      </div>
      <div className="timerName rem09 textCenter overflowDot">{position}</div>
    </div>
  )
}

function TimerInterval(props, state, setState){
  const intervalArr = [];
  const now = new Date();
  let {time, setTime, contType, waiting} = props;

  useEffect(() => {
    // 만약, 카운트다운이 끝나서 상위 이벤트 실행, 재렌더링 되었을 때 이후의 가능한 시간이 없다면 실행되지 않음.
    if(props.time){
      const [hour, min] = props.time.split(':');
      const year = now.getFullYear();
      const month = now.getMonth();
      const date = now.getDate();
      const closeTime = new Date(year, month, date, hour, min); // 종료 시간
      const startTime = new Date(year, month, date, hour, min-(waiting || 3)); // 시작 시간

      startInterval(1, intervalTime.bind(null, closeTime, startTime, time))
    }else{
      // 새롭게 받아온 시간이 없을 때, 오늘 더이상 열리지 않는 섬일 때 테두리, 색상 등 초기화
      setState({...state, targetState : 'NORMAL'});
    }
    return () => {
      intervalArr.forEach(interval => clearInterval(interval))
    }
  }, [props.time])

  function startInterval(second, callback){
    callback();
    const interval = setInterval(callback, second*1000);
    intervalArr.push(interval);
    return interval;
  }

  function intervalTime(_closeTime : Date, _startTime : Date, _time){
    let gap = _startTime.getTime()-new Date().getTime();
    let targetState = 'NORMAL';
    // 필드보스와 항해를 제외한 컨텐츠의 대기시간은 10분
    if(gap <= 600000 && contType !== 'FIELD_BOSS' && contType !== 'CO_OCEAN') targetState = 'APPEAR';
    // 등장시간
    if(gap === 0 || 0 > gap){
      targetState = 'OPEN';
      // 등장 유지시간 설정 (섬 등이 등장중이거나, 항해컨텐츠 알림 등장)
      // 인터벌로 위에서 gap이 시작시간기준으로 다시 잡혀도, 어차피 -값이여서 여기서 gap이 종료시간기준으로 변경됨
      gap = _closeTime.getTime()-new Date().getTime();
    }
    // 등장 유지시간 종료 (섬 등이 사라지거나, 항해컨텐츠 시작)
    if(gap === 0 || 0 > gap){
      return setTime(_time);
    }

    // 남는시간 설정
    const _sec = 1000;
    const _min = _sec*60;
    const _hour = _min*60;
    const hour = Math.floor(gap / _hour);
    const min = Math.floor((gap % _hour) / _min);
    const sec = Math.floor((gap % _min) / _sec);
    
    setState({...state, targetState, timeOut : `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`})
  }
}

function GetState(){
  return useState({timeOut : null, targetState : 'NORMAL'});
}

function minusMin(time, waiting){
  if(time.includes(':')){
    const [hour, min] = time.split(':');
    return `${addZero(Number(hour))}:${addZero(Number(min)-(waiting || 3))}`;
  }
  return time;
}

function addZero(num){
  if(num < 10){
    return '0'+num;
  }
  return num;
}

export default Timer;