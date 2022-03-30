import React from "react";
import TechnologiesView from "./TechnologiesView";

const TechnologiesSection = () => {
  const logos = [
    "./icons/java.png",
    "./icons/javascript.png",
    "./icons/typescript.png",
      "./icons/node-js(1).png",
      "./icons/2.png",
      "./icons/5.png",
      "./icons/13.png",
      "./icons/mongodb(1).png",
    "./icons/css3.png",
    "./icons/html5.png",
      "./icons/reactg(1).png",
      "./icons/gatsby.png",
      "./icons/heroku.png",
      "./icons/amazonwebservices.png",
      "./icons/netlify.svg"

  ];
  return <TechnologiesView logos={logos} />;
};

export default TechnologiesSection;
