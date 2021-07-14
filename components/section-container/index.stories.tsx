import React from "react";
import SectionContainer from "./index";
import styled from "styled-components";

const Content = styled.div`
  color: #fff;
  text-align: center;
`;

export default {
  title: "SectionContainer",
  component: SectionContainer,
};

const Template = args => <SectionContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  children: <Content>Content</Content>,
};
