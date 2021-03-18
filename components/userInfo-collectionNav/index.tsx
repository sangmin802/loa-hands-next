import React from "react";
import Collection from "./collection/index";

const Index = data =>
  data.map((col, index) => (
    <Collection key={`collectionMini${index}`} index={index} size={col.size} />
  ));

export default Index;
