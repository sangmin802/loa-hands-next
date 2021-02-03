import AbilityInfo from './abilityInfo';

export interface IExpeditionUserWrap {
  server : string, 
  charList : 
  {
    name : string, 
    lv : string
  }[]
}
interface ICollectionMini {
  name : string, 
  size : string
}
export interface ICollectionInfo {
  no : string, 
  name : string, 
  isGet : boolean
}
export interface ICollectionDetail {
  title : string, 
  getCount : string, 
  totalCount : string,
  detail : ICollectionInfo[]
}

export default class UserInfo {
  // 구조
  [key : string] : string | object
  expeditionUserWrap : IExpeditionUserWrap[]
  collectionMini : ICollectionMini[]
  collectionDetail : ICollectionDetail[]
  abilityInfo : AbilityInfo
  // 

  // 생성자
  constructor(
    raw : Element,
    expedition : Element, 
    userCollection : string
  ){
    // 유저 기본정보 설정
    this.setUserBaseInfo(raw)

    // 유저 능력치 설정
    this.setUserAbilityInfo(raw)
    
    // 모험단 유저
    this.setExpeditionUserInfo(raw, expedition)

    // 수집형 포인트
    // const [collection] = _PA; // PromiseAll일 경우
    this.setCollectionInfo(userCollection)
  }

  setUserBaseInfo(raw : Element){
    const userInfo : Element[] = [...raw.getElementsByClassName('myinfo__contents-level')[0].children];
    const badge : Element[] = [...raw.getElementsByClassName('myinfo__badge')[0].children];
    this.expeditionLv = userInfo[0].children[0].children[1].textContent;
    this.title = userInfo[0].children[1].children[1].textContent;
    this.curBigLv = userInfo[1].children[0].children[1].childNodes[0].textContent;
    this.curSamllLv = userInfo[1].children[0].children[1].childNodes[1].textContent;
    this.reachBigLv = userInfo[1].children[1].children[1].childNodes[0].textContent;
    this.reachSamllLv = userInfo[1].children[1].children[1].childNodes[1].textContent;
    this.guild = userInfo[2].children[0].children[1].textContent;this.pvp = userInfo[2].children[1].children[1].textContent;
    this.garden = userInfo[3].children[0].children[1].textContent;
    if(this.garden === ' ') this.garden = '컨텐츠 개방 필요';
    this.className = badge[1].children[0].attributes['alt'].value;
    this.classSrc = badge[1].children[0].attributes['src'].value

    const str = (this.classSrc as string).split('thumb/')[1];
    const end = str.indexOf('_m.png');
    this.classEngName = str.substring(0, end);
  }

  setUserAbilityInfo(raw : Element){
    const script = raw.getElementsByTagName('script');
    const script0 = script[0];
    this.abilityInfo = new AbilityInfo(script0, raw)
  }

  setExpeditionUserInfo(raw : Element, expedition : Element){
    const expeditionUserInfo : Element[] = [...raw.getElementsByClassName('myinfo__character')[0].children];
    const [lvWithName, , searchUserServer] : Element[] = expeditionUserInfo;
    this.name = lvWithName.childNodes[1].textContent.trim();
    this.Lv = lvWithName.children[0].textContent;
    this.server = searchUserServer.children[0].children[1].textContent;

    const serverWrap : string[] = this.getWantedTag(expedition, this.getWantedTag, "STRONG")
    .filter((el : Element) => el.nodeName==="STRONG")
    .map((str : Element) => str.textContent);

    this.expeditionUserWrap = this.getWantedTag(expedition, this.getWantedTag, "UL")
    .filter((el : Element) => el.nodeName==="UL")
    .map((ul : Element, index : number) => {
      return {
        server : serverWrap[index],
        charList : [...ul.children].map(li => {
          return {
            name : li.children[0].childNodes[1].textContent.trim(),
            lv : li.children[0].children[0].textContent
          }
        })
      }
    })
  }

  setCollectionInfo(co : string){
    const parser : DOMParser = new DOMParser();
    const doc : Document = parser.parseFromString(co, 'text/html');

    this.collectionMini = [...doc.getElementsByClassName('lui-tab__menu')[0].children].map(el => {
      const child : NodeListOf<ChildNode> = el.childNodes;
      return{
        name : child[0].textContent.trim(),
        size : child[1].textContent
      }
    });
    this.collectionDetail = [...doc.getElementsByClassName('collection-list')]
    .map((colPart : Element, index : number) => {
      const child : HTMLCollection = colPart.children;
      const title : string = child[0].children[0].textContent;
      const getCount : string = child[0].children[1].children[0].textContent;
      const totalCount : string = child[0].children[1].children[1].textContent;
      return {
        title, getCount, totalCount,
        detail : [...child[1].children]
        .map(li => {
          let childNodes : NodeListOf<ChildNode> = li.childNodes;
          let no : string = childNodes[0].textContent;
          let name : string = childNodes[1].textContent.trim();
          let isGet : boolean = childNodes[2]?.textContent === '획득';
          if(index === 4){ // 모코코
            const get : string = childNodes[3].childNodes[1].textContent;
            const total : string = childNodes[3].childNodes[3].textContent;
            const area : string = childNodes[2].textContent.trim();
            no = childNodes[1].textContent
            isGet = get === total ? true : false;
            name = `${area} ${get} / ${total}`;
          }
          return {
            no, name, isGet
          }
        })
      }
    })
  }

  getWantedTag(el : Element, fun : Function, name : string){
    const child = [...el.children];
    for(let i = 0; i < child.length; i++){
      if(child[i].nodeName !== name) child[i] = fun(child[i], fun, name);
    }
    return child;
  }
}