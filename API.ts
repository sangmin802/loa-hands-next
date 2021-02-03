import UserInfo from './models/userInfo';
import HomeData from './models/homeData';
import _ from './Utility';
import {PROXY} from './porxy';

export default {
  // async await 버전
  async getUserData(name){
    const baseUrl : string = `${PROXY}https://m-lostark.game.onstove.com/Profile/`;
    const encoded : string = encodeURIComponent(name);

    const userData : string = await fetch(baseUrl+'Character/'+encoded)
    .then(httpRes => httpRes.text());
    
    if(userData.includes("alert('캐릭터 정보가 없습니다.")) throw new Error('캐릭터 정보가 없습니다.');
    if(userData.includes("서비스 점검")) throw new Error('서비스 점검중입니다.');
    const body : Element = _.returnBody(userData);
    const script : HTMLCollectionOf<HTMLScriptElement> = body.getElementsByTagName('script');
    const expedition : Element = body.getElementsByClassName('myinfo__character--wrapper2')[0];
    const [,memberNo,,pcId,,worldNo] : string[] = script[10]?.textContent?.split('\'') ?? null;

    const userCollection : string = await fetch(`${baseUrl}GetCollection?${new URLSearchParams({memberNo, pcId, worldNo}).toString()}`).then(res => res.text());
    const user : UserInfo = await new UserInfo(body, expedition, userCollection);
    return user;
  },

  async getHomeData(isClient : Boolean = false) : Promise<HomeData> {
    const urlList : string[] = ['http://m.inven.co.kr/lostark/timer/','https://m-lostark.game.onstove.com/News/Event/Now'];
    const addedUrl = isClient ? PROXY : '';

    return new Promise(res => {
      Promise.all(
        urlList.map((url : string) => {
          return fetch(addedUrl+url)
          .then((urlRes : Response) => urlRes.text())
        })
      )
      .then((bodys : string[]) => {
        res(new HomeData(bodys))
      })
    })
  }
}