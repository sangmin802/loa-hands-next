import React from "react";
import Characteristic from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "Characteristic",
  component: Characteristic,
};

const { basic, battle, engrave } = USER_DATA.abilityInfo.characteristicInfo;

const Template = args => <Characteristic {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [basic, battle, engrave],
};
