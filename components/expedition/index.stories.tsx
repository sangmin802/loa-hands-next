import React from "react";
import Char from "./char/index";
import Server from "./server/index";
import Expedition from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "Expedition",
};

const CharTemplate = args => <Char {...args} />;
const ServerTemplate = args => <Server {...args} />;
const Template = args => <Expedition {...args} />;

export const CharDefault = CharTemplate.bind({});
export const ServerDefault = ServerTemplate.bind({});
export const Default = Template.bind({});

CharDefault.args = {
  char: USER_DATA.expeditionInfo.expeditionUserWrap[0].charList[0],
};

ServerDefault.args = {
  wrap: USER_DATA.expeditionInfo.expeditionUserWrap[0],
};

Default.args = {
  userData: USER_DATA,
};
