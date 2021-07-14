import React from "react";
import { render } from "@testing-library/react";
import DangerousHTML from ".";

const demoHtml =
  "<font size='12'><font color='#aaaaaa'>어비스 레이드 몬스터에게 공격 적중 시 '아르고스의 힘' 효과 획득<BR> 아르고스의 힘: <FONT COLOR='#ffff99'>20</FONT>초 동안 적에게 주는 피해 <FONT COLOR='#99FF99'>20%</FONT> 증가 (재사용 대기시간 <FONT COLOR='#ffff99'>60</FONT>초)</font></font>";

describe("DangerousHTML", () => {
  it("태그들을 살려서 렌더링 되는지 테스트", () => {
    const { container } = render(<DangerousHTML html={demoHtml} />);
    const received = container.innerHTML.toLowerCase();
    const expected = demoHtml
      .toLowerCase()
      .replace(/='/gi, '="')
      .replace(/'>/gi, '">');

    expect(received.includes(expected)).toBe(true);
  });
});
