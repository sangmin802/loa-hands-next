import React from "react";
import Event from "./event/index";
import LoadingSpinner from "components/_loading-spinner/index";
import Section from "components/_section/index";
import "./index.css";

const Index = ({ events }) => {
  return (
    <Section title={"진행중인 이벤트"}>
      {!events && <LoadingSpinner />}
      {events &&
        events.map((_event, index) => {
          return <Event event={_event} key={`event${index}`} />;
        })}
    </Section>
  );
};

export default Index;
