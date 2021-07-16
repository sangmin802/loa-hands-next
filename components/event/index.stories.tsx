import React from "react";
import Event from "./index";

export default {
  title: "Event",
  component: Event,
};

const Template = args => <Event {...args} />;

export const Default = Template.bind({});

Default.args = {
  event: {
    date: "2021.05.12 06:00 ~ 07.07 06:00",
    href: null,
    img: `${process.env.PUBLIC_URL}/img/event.jpg`,
    name: "함께 돌아왔소! 도전 출근왕",
  },
};
