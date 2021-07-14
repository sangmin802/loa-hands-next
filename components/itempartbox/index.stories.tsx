import React from "react";
import ItemPartBox from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "ItemPartBox",
  component: ItemPartBox,
};

const Template = args => <ItemPartBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  data:
    USER_DATA.abilityInfo.equipInfo.equipment["000_weapon"].detail.itemPartBox,
};
