import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Characteristic from "./index";

const demoCharacgteristic = [
  {
    title: "기본 특성",
    content: [
      {
        title: ["공격력", "20658"],
        desc: '<ul><li><textformat indent="-21" leftmargin="10"><font> </font> 적에게 주는 피해를 계산할 때 기준이 되는 값입니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 힘, 민첩, 지능과 무기 공격력을 기반으로 증가한 기본 공격력은 <font color="#99ff99">20658</font> 입니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 공격력 증감 효과로 공격력이 <font color="#99ff99">0</font> 증가되었습니다.</textformat></li></ul>',
      },
      {
        title: ["최대 생명력", "90158"],
        desc: '<ul><li><textformat indent="-21" leftmargin="10"><font> </font> 캐릭터의 최대 생명력을 나타냅니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><textformat indent="-21" leftmargin="10"><font> </font> 체력으로 최대 생명력이 <font color="#99ff99">80499</font> 증가되었습니다.</textformat></textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 생명 활성력으로 최대 생명력이 <font color="#99ff99">0.00%</font> 증가되었습니다.</textformat></li></ul>',
      },
    ],
  },
  {
    title: "전투 특성",
    content: [
      {
        title: ["치명", "42"],
        desc: '<ul><li><textformat indent="-21" leftmargin="10"><font> </font> 치명타 적중률이 <font color="#99ff99">1.50%</font> 증가합니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 물약 효과로 <font color="#99ff99">20</font>만큼 영구적으로 증가되었습니다.</textformat></li></ul>',
      },
      {
        title: ["특화", "509"],
        desc: '<ul><li><textformat indent="-21" leftmargin="10"><font> </font> 구원의 세레나데 스킬의 회복량이 <font color="#99ff99">14.56%</font> 증가합니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 파티원에게 적용되는 용맹의 세레나데 스킬의 버프 효율이 <font color="#99ff99">25.48%</font> 증가합니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 세레나데 게이지 획득량이 <font color="#99ff99">20.38%</font> 증가합니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 각성 스킬의 피해량이 <font color="#99ff99">27.81%</font> 증가합니다.</textformat></li><li><textformat indent="-21" leftmargin="10"><font> </font> 물약 효과로 <font color="#99ff99">24</font>만큼 영구적으로 증가되었습니다.</textformat></li></ul>',
      },
    ],
  },
];

describe("Characteristic", () => {
  it("Charateristic 별 title 렌더링 파악", () => {
    const { container } = render(<Characteristic data={demoCharacgteristic} />);
    const mainTitles = container.querySelectorAll(".title");
    mainTitles.forEach((dom, index) => {
      expect(dom.textContent).toBe(demoCharacgteristic[index].title);
    });
  });

  it("Charateristic 별 content 렌더링 파악", () => {
    const { container } = render(<Characteristic data={demoCharacgteristic} />);
    const content = demoCharacgteristic[0].content;

    content.forEach(({ title, desc }) => {
      expect(container.innerHTML.includes(title[1])).toBe(true);
      expect(container.innerHTML.includes(desc)).toBe(true);
    });
  });
});
