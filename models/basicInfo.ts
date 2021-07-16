interface Props {
  expeditionLv: string;
  title: string;
  curBigLv: string;
  curSmallLv: string;
  reachBigLv: string;
  reachSmallLv: string;
  guild: string;
  pvp: string;
  garden: string;
  className: string;
  classSrc: string;
  classEngName: string;
  [key: string]: string;
}

export default class BasicInfo implements Props {
  expeditionLv: string;
  title: string;
  curBigLv: string;
  curSmallLv: string;
  reachBigLv: string;
  reachSmallLv: string;
  guild: string;
  pvp: string;
  garden: string;
  className: string;
  classSrc: string;
  classEngName: string;
  [key: string]: string;

  constructor(raw) {
    const userInfo: Element[] = [
      ...raw.getElementsByClassName("myinfo__contents-level")[0].children,
    ];
    const badge: Element[] = [
      ...raw.getElementsByClassName("myinfo__badge")[0].children,
    ];
    this.expeditionLv = userInfo[0].children[0].children[1].textContent;
    this.title = userInfo[0].children[1].children[1].textContent;
    this.curBigLv =
      userInfo[1].children[0].children[1].childNodes[0].textContent;
    this.curSmallLv =
      userInfo[1].children[0].children[1].childNodes[1].textContent;
    this.reachBigLv =
      userInfo[1].children[1].children[1].childNodes[0].textContent;
    this.reachSmallLv =
      userInfo[1].children[1].children[1].childNodes[1].textContent;
    this.guild = userInfo[2].children[0].children[1].textContent;
    this.pvp = userInfo[2].children[1].children[1].textContent;
    this.garden = userInfo[3].children[0].children[1].textContent;
    if (this.garden === " ") this.garden = "컨텐츠 개방 필요";
    this.className = badge[1].children[0].attributes["alt"].value;
    this.classSrc = badge[1].children[0].attributes["src"].value;

    const str = (this.classSrc as string).split("thumb/")[1];
    const end = str.indexOf("_m.png");
    this.classEngName = str.substring(0, end);
  }
}
