import React from "react";
import ListItem from "./index";

export default {
  title: "ListItem",
  component: ListItem,
};

const Template = args => <ListItem {...args} />;

export const DetailNormal = Template.bind({});
export const NoDetailNormal = Template.bind({});
export const GetCollection = Template.bind({});
export const NoGetCollection = Template.bind({});

DetailNormal.args = {
  data: {
    backSrc: `${process.env.PUBLIC_URL}/img/bg-item.png`,
    detail: {
      grade: 4,
      src: `${process.env.PUBLIC_URL}/img/item.png`,
      subTitle: ["subTitle1", "subTitle2"],
      title: "title",
    },
  },
};

NoDetailNormal.args = {
  data: {
    backSrc: `${process.env.PUBLIC_URL}/img/bg-item.png`,
  },
};

GetCollection.args = {
  data: {
    type: "collection",
    divideType: "get",
    detail: {
      subTitle: ["#1"],
      title: "고블린 섬의 마음",
      grade: "get",
    },
  },
};

NoGetCollection.args = {
  data: {
    type: "collection",
    divideType: "noGet",
    detail: {
      subTitle: ["#11"],
      title: "갈망의 섬의 마음",
      grade: "noGet",
    },
  },
};
