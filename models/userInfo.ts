import AbilityInfo from './abilityInfo';
import BasicInfo from './basicInfo';
import ExpeditionInfo from './expeditionInfo';
import CollectionInfo from './collectionInfo';
import SkillInfo from './skillInfo';

export default class UserInfo {
  // 구조
  [key : string] : string | object

  // 생성자
  constructor(
    raw, expedition, userCollection
  ){
    // 스킬정보와 장비정보를 갖고있는 객체 반환
    const profileObj = this.getProfileObj(raw) ?? null;

    // 유저 기본정보 설정
    this.basicInfo = new BasicInfo(raw)
    
    // 모험단 유저
    this.expeditionInfo = new ExpeditionInfo(raw, expedition)

    // 유저 능력치 탭
    this.abilityInfo = new AbilityInfo(profileObj, raw)

    // 유저 스킬 탭
    this.skillInfo = new SkillInfo(profileObj, raw)
    

    

    // 유저 수집형 탭
    // const [collection] = _PA; // PromiseAll일 경우
    this.collectionInfo = new CollectionInfo(userCollection)
  }

  getProfileObj(raw){
    const script = raw.getElementsByTagName('script');
    const script0 = script[0];

    if(script0.childNodes[0].textContent.length!==1){
      const profileObj = JSON.parse(script0.childNodes[0].textContent.replace('$.Profile = {', '{').replace('};', "}"));
      return profileObj;
    }
  }
}