interface ExpeditionUserWrap {
  server: string;
  charList: { name: string; lv: string }[];
}

interface Props {
  expeditionUserWrap: ExpeditionUserWrap[];
  name: string;
  Lv: string;
  server: string;
  [key: string]: any;
}

export default class ExpeditionInfo implements Props {
  expeditionUserWrap: ExpeditionUserWrap[];
  name: string;
  Lv: string;
  server: string;
  [key: string]: any;

  constructor(raw, expedition) {
    const expeditionUserInfo: Element[] = [
      ...raw.getElementsByClassName("myinfo__character")[0].children,
    ];
    const [lvWithName, , searchUserServer]: Element[] = expeditionUserInfo;
    this.name = lvWithName.childNodes[1].textContent.trim();
    this.Lv = lvWithName.children[0].textContent;
    this.server = searchUserServer.children[0].children[1].textContent;

    const serverWrap: string[] = this.getWantedTag(
      expedition,
      this.getWantedTag,
      "STRONG"
    )
      .filter((el: Element) => el.nodeName === "STRONG")
      .map((str: Element) => str.textContent);

    this.expeditionUserWrap = this.getWantedTag(
      expedition,
      this.getWantedTag,
      "UL"
    )
      .filter((el: Element) => el.nodeName === "UL")
      .map((ul: Element, index: number) => {
        return {
          server: serverWrap[index],
          charList: [...ul.children].map(li => {
            return {
              name: li.children[0].childNodes[1].textContent.trim(),
              lv: li.children[0].children[0].textContent,
            };
          }),
        };
      });
  }

  getWantedTag(el: Element, fun: Function, name: string) {
    const child = [...el.children];
    for (let i = 0; i < child.length; i++) {
      if (child[i].nodeName !== name) child[i] = fun(child[i], fun, name);
    }
    return child;
  }
}
