import React from "react";
import UserInfo from "./[name]";
import { AsyncBoundary, SearchLoading, ErrorFallback } from "components/";
import { HeaderLayout } from "../../layout/app/index";

export default {
  title: "UserInfo",
  component: UserInfo,
};

const Template = args => (
  <AsyncBoundary
    suspenseFallback={<SearchLoading />}
    errorFallback={<HeaderLayout children={<ErrorFallback />} />}
  >
    <UserInfo {...args} />
  </AsyncBoundary>
);

export const Default = Template.bind({});

Default.args = {};
