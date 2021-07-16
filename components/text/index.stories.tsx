import React from "react";
import Text, { IText } from "./index";
import { Story } from "@storybook/react";

export default {
  title: "Text",
  component: Text,
};

const Template: Story<IText> = args => <Text {...args} />;

export const Title = Template.bind({});
export const Normal = Template.bind({});
export const Desc = Template.bind({});
export const SubTitle = Template.bind({});
export const Small = Template.bind({});

Title.args = {
  type: "title",
  color: "color0",
  children: "title",
};
Normal.args = {
  type: "normal",
  color: "color1",
  children: "normal",
};
Desc.args = {
  type: "desc",
  color: "color2",
  children: "desc",
};
SubTitle.args = {
  type: "subTitle",
  color: "color3",
  children: "subTitle",
};
Small.args = {
  type: "small",
  color: "color4",
  children: "small",
};
