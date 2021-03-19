import _ from "utility/utility";

export default class Characteristic {
  [key: string]: {};

  constructor(el) {
    ["basic", "battle", "tendency", "engrave"].forEach((res, index) => {
      this[res] = this.parseEl(el.children[index]);
    });
  }

  parseEl(el) {
    const [h4, ul] = el.children;
    const content = [...ul.children].map(li => {
      let title = [];
      let desc = null;
      [...li.children].forEach(el => {
        if (el.nodeName === "SPAN") title.push(el.textContent);
        if (el.nodeName === "DIV") desc = _.getOnlyText(el.textContent);
      });
      return { title, desc };
    });
    return { title: h4.textContent, content };
  }
}
