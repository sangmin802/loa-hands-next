import React from "react";
import Timer from "./index";

export default {
  title: "Timer",
  component: Timer,
};

const Template = args => <Timer {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    name: "무릉도원",
    src: "/img/island/island_04.png",
    time: ["18:00"],
    endTime: "18:00",
    lv: 400,
    position: "대항해",
    contType: "ISLAND",
  },
  setTime: () => {},
};
