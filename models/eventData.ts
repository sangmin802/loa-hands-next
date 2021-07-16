import { returnBody } from "../utils/parse-string";

export interface Events {
  img: string;
  name: string;
  date: string;
  href: string;
}

interface Props {
  events: Events[];
}

export default class EventData implements Props {
  events: Events[];

  constructor(events: string) {
    // 이벤트리스트
    this.setEvents(returnBody(events));
  }

  setEvents(raw: Element) {
    const eventList = raw.getElementsByClassName("list list--event")[0]
      .children[0].children;

    this.events = [...eventList].map(li => {
      const href = li.children[0].attributes["href"].value;
      const children = li.children[0].children;
      const img = children[0].children[0].attributes["src"].value;
      const name = children[1].children[0].textContent;
      const date = children[2].children[0].childNodes[1].textContent
        .trim()
        .replace(": ", "");

      return {
        img,
        name,
        date,
        href,
      };
    });
  }
}
