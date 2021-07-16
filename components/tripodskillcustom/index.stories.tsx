import React from "react";
import TripodSkillCustom from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "TripodSkillCustom",
  component: TripodSkillCustom,
};

const Template = args => <TripodSkillCustom {...args} />;

export const Default = Template.bind({});

Default.args = {
  data:
    USER_DATA.abilityInfo.equipInfo.equipment["007_earing1"].detail
      .tripodSkillCustom,
};
