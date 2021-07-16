import React from "react";
import DangerousHTML from "./index";

export default {
  title: "DangerousHTML",
  component: DangerousHTML,
};

const Template = args => <DangerousHTML {...args} />;

export const Default = Template.bind({});
export const OverRideFontSize = Template.bind({});

Default.args = {
  html:
    "[바드] [<FONT COLOR='#FFD200'>사운드 홀릭</FONT>] 사운드 집중 <FONT COLOR='#73dc04'>Lv +2</FONT>",
};

OverRideFontSize.args = {
  html:
    "<font size='12'>선택 (리아네 하프)</font> [<FONT COLOR='#FFD200'>Lv.1</FONT>]",
};
