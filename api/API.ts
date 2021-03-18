import UserInfo from "../models/userInfo";
import HomeData from "../models/homeData";
import _ from "../utility/utility";
import { PROXY } from "../porxy";
import axios from "axios";

export default {
  // async await 버전
  async getUserData(name) {
    const { data } = await axios({
      url: `${PROXY}loa-hands/userInfo`,
      method: "POST",
      data: { name },
    }).then(data => data);

    if (data === "noChar") throw new Error("캐릭터 정보가 없습니다.");
    const { info, col } = data;
    const body: Element = _.returnBody(info);
    const expedition: Element = body.getElementsByClassName(
      "myinfo__character--wrapper2"
    )[0];
    const user: UserInfo = await new UserInfo(body, expedition, col);
    return user;
  },

  async getHomeData() {
    const urlList: string[] = ["loa-hands/timer", "loa-hands/homeData"];

    return new Promise((res, rej) => {
      Promise.all(
        urlList.map((url: string) => {
          return fetch(PROXY + url).then((urlRes: Response) => urlRes.text());
        })
      ).then((bodys: string[]) => {
        if (bodys[1].includes("서비스 점검")) rej("서비스 점검중입니다.");
        // throw new Error('서비스 점검중입니다.');
        res(new HomeData(bodys));
      });
    });
  },
};
