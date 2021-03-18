import EquipInfo from "./equipInfo";
import Characteristic from "./characteristic";
import { partsArr, partsImg } from "../json/JSON.js";

export default class AbilityInfo {
  public equipInfo = {};
  public characteristicInfo = {};

  constructor(profileObj, raw) {
    partsArr.forEach((part, index) => {
      let type = null;
      if (index <= 22) type = "OuterAv";
      if (index <= 18) type = "InnerAv";
      if (index === 11) type = "Stone";
      if (index <= 10) type = "Acc";
      if (index <= 5) type = "Equip";

      this.equipInfo[part] = {
        backSrc: "//cdn-lostark.game.onstove.com/" + partsImg[index],
        type,
      };
    });

    // 장비정보가 있는경우만
    if (profileObj) this.setUserInfoEquip(profileObj.Equip, partsArr);

    // 특성설정(각인, 특성)
    const characteristic = raw.querySelector(".profile-char");
    this.characteristicInfo = new Characteristic(characteristic);
  }

  setUserInfoEquip(equip, partsArr: string[]) {
    const equipKeyArr = Object.keys(equip);
    equipKeyArr.forEach((key: string) => {
      const num = Number(key.substr(key.length - 3, key.length));
      if (partsArr[num]) {
        const target = this.equipInfo[partsArr[num]];

        target.detail = new EquipInfo(equip[key]);
      }
    });
  }
}
