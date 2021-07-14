import React from "react";
import Image from "./index";

export default {
  title: "Image",
  component: Image,
};

const Template = args => <Image {...args} />;

export const Default = Template.bind({});
export const Grade = Template.bind({});

Default.args = {
  src: `${process.env.PUBLIC_URL}/img/event.jpg`,
};

Grade.args = {
  src: `${process.env.PUBLIC_URL}/img/item.png`,
  color: "gradient4",
};
