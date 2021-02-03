import _ from '../Utility';
import {calendarIsland} from '../JSON';

// 타입
import {IJson} from '../interface'

export default class HomeData {
  events : {[key : string] : string}[]
  calendar : IJson[][]

  constructor(raw : string[]){
    const [calendar, events] = raw;
    // // 이벤트리스트
    this.setEvents(_.returnBody(events));

    // // 캘린더섬
    this.setCalendar(_.returnBody(calendar));
  }

  setEvents(raw : Element){
    const eventList = raw.getElementsByClassName('list list--event')[0].children[0].children;
    this.events = [...eventList].map(li => {
      const href = li.children[0].attributes['href'].value;
      const children = li.children[0].children;
      const img = children[0].children[0].attributes['src'].value;
      const name = children[1].children[0].textContent;
      const date = children[2].children[0].childNodes[1].textContent.trim().replace(': ', '');
      return {
        img, name, date, href
      }
    })
  }

  setCalendar(raw : Element){
    const timerList : Element[] = [...raw.getElementsByClassName('info')];
    const _ : Date = new Date();
    const today : string = `${_.getFullYear()}-${this.zero(_.getMonth()+1)}-${this.zero(_.getDate())}`;
    this.calendar = timerList.reduce((prev, next) => {
      const name : string = next.getElementsByClassName('npcname')[0].textContent;
      const target : object = calendarIsland.find((cal : object) => cal['name']===name);
      if(!next.textContent.includes(today) || !target) return prev;
      if(next.textContent.includes('14:00')){
        prev[0].push({...target, time : ['14:03'], endTime : '14:03'});
      }else if(next.textContent.includes('21:00')){
        prev[1].push({...target, time : ['21:03'], endTime : '21:03'});
      }
      return prev;
    }, [[], []])
  }

  zero(num : number){
    if(num < 10){
      return '0'+num;
    }
    return num;
  }
}