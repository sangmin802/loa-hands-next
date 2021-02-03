import React from 'react';
// import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
// import _History from 'history'
import _ from 'lodash';

import jsdom from 'jsdom';

const {JSDOM} = jsdom;

export default {
  GetHooks(){
    // const history : _History.History = useHistory();
    const dispatch = useDispatch();
    return {dispatch};
    // return {history, dispatch};
  },

  // 태그가 포함된 문자열에서 태그를 제외한 문자열만 반환
  // BR태그가 있다면, div태그로 줄바꿈되도록 하고 {}를 통해 읽을수 있게 처리
  getOnlyText(string : string){
    const newStr : string = string.replace(/<BR>/gi, "enter");
    const parsed : string = new DOMParser().parseFromString(newStr, "text/html").body.textContent;
    if(parsed.includes('enter')){
      const split : string[] = parsed.split('enter');
      return split.map((res, index) => {
        if(res!==""){
          return <div key={'enter'+index}>{res}</div>
        }
        return null;
      })
    }else{
      return parsed;
    }
  },

  // 아바타 or 장비 나누기
  divideEquipInfo(equipInfo){
    return Object.keys(equipInfo)
    .reduce((prev, cur) => {
      if(!cur.includes('av_')){
        prev[0].push(equipInfo[cur])
      }else{
        prev[1].push({...equipInfo[cur], avatarPart : cur})
      }
      return prev;
    }, [[], []]);
  },

  // 여러개의 value값(string, 그 외)을 가진 객체의 값들만 배열로 추출
  multipleValues(_val){
    let resultArr = [];
    const keyArr = Object.keys(_val)
    keyArr.forEach(key => {
      if(typeof _val[key] === 'string'){
        resultArr.push(this.getOnlyText(_val[key]))
      }else{
        resultArr.push(_val[key])
      }
    })
    return resultArr;
  },

  // 동일한 타입을 가진 객체만 찾아서 반환
  getSameTypeObj(_arr, _type){
    return _arr.filter(res => {
      if(!res) return;
      if(res.type===_type) return res;
      return
    })
  },

  // 문자열을 Element화 해서, Body부분만 반환
  returnBody(data){
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(data, 'text/html');
    const doc = new JSDOM(data);
    const body = doc.window.document.getElementsByTagName('body')[0];
    // const body = doc.getElementsByTagName('body')[0];

    return body;
  },

  // 객체 비교
  compareObj(obj1, obj2){
    // 동일하면 true 다르면 false
    return _.isEqual(obj1, obj2);
  }
}