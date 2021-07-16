import React from "react";
import Rune from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "Rune",
  component: Rune,
};

const Template = args => <Rune {...args} />;

export const Default = Template.bind({});
export const NoRune = Template.bind({});

Default.args = {
  data: USER_DATA.skillInfo.battleSkill.skills[0],
};
NoRune.args = {
  data: {
    detail: {
      rune: null,
    },
  },
};
