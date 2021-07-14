import React from "react";
import Collection from "./index";
import styled from "styled-components";
import { USER_DATA } from "constants/index";

const Container = styled.div`
  display: flex;
`;

export default {
  title: "Collection",
  component: Collection,
};

const Template = args => <Container>{Collection({ ...args })}</Container>;

export const Default = Template.bind({});

Default.args = {
  collection: USER_DATA.collectionInfo.collectionMini,
};
