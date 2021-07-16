import React from "react";
import App from "./index";

export default {
  title: "App",
  component: App,
};

const Template = args => <App {...args} />;

export const Default = Template.bind({});

Default.args = {};
