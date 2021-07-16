import React from "react";
import Dialog from "./index";
import styled from "styled-components";

const Content = styled.div`
  color: #fff;
`;

export default {
  title: "Diallog",
  component: "Dialog",
};

const Template = args => <Dialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  dialog: <Content>Dialog</Content>,
};
