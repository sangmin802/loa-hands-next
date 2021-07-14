import React from "react";
import BasicInfo from "./index";
import { USER_DATA } from "constants/index";

export default {
  title: "BasicInfo",
  component: BasicInfo,
};

const Template = args => <BasicInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: USER_DATA,
  collection: USER_DATA.collectionInfo.collectionMini,
};
