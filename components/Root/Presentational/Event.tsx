import React from 'react';

interface Props {
  event : {[key: string]: string}
}

const Event : React.FC<Props> = ({
  event
}) => {
  const {date, href, img, name} = event;
  return(
    <div className="event"
      onClick={() => {
        window.open(`https://lostark.game.onstove.com/${href}`);
      }}
    >
      <div className="eventImg">
        <img className="imgWidth" src={img} alt={name} />
      </div>
      <div className="eventContent">
        <div className="eventName rem09 textCenter overflowDot">{name}</div>
        <div className="eventDate rem08 textCenter overflowDot">{date}</div>
      </div>
    </div>
  )
}

export default Event;