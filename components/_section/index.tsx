import React from "react";
import _ from "utility/utility";
import "./index.css";

const Index = ({ children, title }) => {
  return (
    <section className="section">
      <div className="sectionTitle rem1 textCenter">{title}</div>
      <div className="sectionContent">{children}</div>
    </section>
  );
};

export default React.memo(Index, (left, right) => _.compareObj(left, right));
