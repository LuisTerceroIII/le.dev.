import React from "react";
import "./Specialities.css";
import Tilt from "react-tilt/dist/tilt";
import AnimatedText from "react-animated-text-content";
const SpecialitiesView = ({ specialities }) => {
  return (
    <section className={"specialities-container"}>
      <h2 className={"about-me-title"}>Specialities</h2>
      {specialities.map((speciality, key) => (
        <Tilt className={"speciality-container"}>
          <AnimatedText
            className={"title-landing"}
            animationType={"throw"}
            type={"words"}
            tag={"p"}
            duration={1}
          >
            {speciality}
          </AnimatedText>
        </Tilt>
      ))}
    </section>
  );
};

export default SpecialitiesView;
