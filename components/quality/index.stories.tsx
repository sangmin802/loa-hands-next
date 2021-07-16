import React from "react";
import Quality from "./index";

export default {
  title: "Quality",
  component: Quality,
};

const Template = args => <Quality {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    detail: {
      quality: 55,
    },
  },
};
