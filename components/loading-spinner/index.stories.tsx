import React from "react";
import LoadingSpinner from "./index";

export default {
  title: "LoadingSpinner",
  component: LoadingSpinner,
};

const Template = args => <LoadingSpinner {...args} />;

export const Back = Template.bind({});
export const NoBack = Template.bind({});

Back.args = {
  back: true,
};

NoBack.args = {
  back: false,
};
