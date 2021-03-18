import React from "react";
import ServerChar from "../char/index";
import "./index.css";

const Index = ({ wrap, setUserData }) => {
  return (
    <div className="userExpedition">
      <div className="userExpeditionServer rem13">{wrap.server}</div>
      <div className="userExpeditionCharWrap">
        {wrap.charList.map((char, charIndex) => {
          return (
            <ServerChar
              key={`userExpeditionChar${charIndex}`}
              setUserData={setUserData}
              char={char}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
