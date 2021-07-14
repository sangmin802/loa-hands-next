import React from "react";
import DoubleListContainer from "./index";
import { USER_DATA } from "constants/index";
import styled from "styled-components";

const Content = styled.div`
  color: #fff;
  text-align: center;
`;

export default {
  title: "DoubleListContainer",
  component: DoubleListContainer,
};

const {
  skillInfo: { battleSkill },
  abilityInfo: {
    equipInfo: { equipment },
  },
} = USER_DATA;

const Template = args => (
  <DoubleListContainer {...args}>
    <Content>List Content</Content>
  </DoubleListContainer>
);

export const Title = Template.bind({});
export const NoTitle = Template.bind({});

Title.args = {
  data: battleSkill.skills,
  divideType: "leftSkill",
  lt: `사용 : ${battleSkill.usePoint}`,
  rt: `획득 : ${battleSkill.getPoint}`,
};

NoTitle.args = {
  data: Object.values(equipment),
  divideType: "equip",
};
