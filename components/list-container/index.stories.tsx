import React from "react";
import ListContainer from "./index";
import styled from "styled-components";

const Content = styled.div`
  color: #fff;
  text-align: center;
`;

export default {
  title: "ListContainer",
  component: ListContainer,
};

const Template = args => <ListContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  arr: [1, 2, 3],
  children: <Content>Content</Content>,
};
