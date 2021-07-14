import React from "react";
import IndentString from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "IndentString",
  component: IndentString,
};

const Template = args => <IndentString {...args} />;

export const Default = Template.bind({});

Default.args = {
  data:
    USER_DATA.abilityInfo.equipInfo.equipment["000_weapon"].detail
      .indentStringGroup,
};
