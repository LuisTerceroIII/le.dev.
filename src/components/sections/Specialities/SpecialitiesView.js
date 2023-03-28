import React from "react";
import "./Specialities.css";
import Tilt from 'react-parallax-tilt';
import AnimatedText from "react-animated-text-content";

const SpecialitiesView = ({ specialities }) => {
  return (
    <section className={"specialities-container"}>
      <h2 className={"about-me-title"}>Specialities</h2>
        <section className={'specialities'}>
            {specialities.map((speciality, key) => (
                <Tilt key={key} className={"speciality-container"}>
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

    </section>
  );
};

export default SpecialitiesView;
