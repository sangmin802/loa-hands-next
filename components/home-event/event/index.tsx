import React from "react";
import "./index.css";
import ImgTextWrap from "components/_imgTextWrap/index";

const Index = ({ event }) => {
  const { date, href, img, name } = event;
  const goHref = React.useCallback(() => {
    window.open(`https://lostark.game.onstove.com/${href}`);
  }, [href]);
  return (
    <div className="event" onClick={goHref}>
      <ImgTextWrap backSrc={img} text={[name, date]} />
    </div>
  );
};

export default Index;
