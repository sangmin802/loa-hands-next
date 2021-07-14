interface Item {
  title: string;
  content: { title: string[]; desc: string }[];
}

interface Props {
  basic: Item;
  battle: Item;
  tendency: Item;
  engrave: Item;
}

const initialData = {
  title: "",
  content: [],
};

export default class Characteristic implements Props {
  basic: any = initialData;
  battle: any = initialData;
  tendency: any = initialData;
  engrave: any = initialData;

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
        if (el.nodeName === "DIV") desc = el.innerHTML;
      });
      return { title, desc };
    });
    return { title: h4.textContent, content };
  }
}
