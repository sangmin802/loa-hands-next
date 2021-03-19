import React from "react";
import TimerWrap from "./timerWrap/index";
import Section from "components/_section/index";

const Index = ({ text, data, today }) => {
  return (
    <Section title={text}>
      <TimerWrap data={data} today={today} />
    </Section>
  );
};

export default Index;
