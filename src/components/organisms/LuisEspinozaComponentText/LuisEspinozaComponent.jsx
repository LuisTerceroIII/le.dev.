import React, { memo } from "react";
import AnimatedText from "react-animated-text-content";

import "./LuisEspinozaComponentStyles.css"
const LuisEspinozaComponent = () => {
  return (
    <section className="luis-espinoza-compo-main-container">
      <AnimatedText
        className={"home-word purple-word"}
        animationType={"float"}
        type={"words"}
        tag={"p"}
        duration={0.6}
      >
        {`&#60;LuisEspinoza`}
      </AnimatedText>
      <p
        className="home-word"
        style={{ display: "flex", flexDirection: "row", marginLeft: "17%" }}
      >
        <AnimatedText
          className="home-word golden-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"type"}
        </AnimatedText>
        <AnimatedText
          className="home-word orange-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"="}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"{"}
        </AnimatedText>
        <AnimatedText
          className="home-word white-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"SOFTWARE"}
        </AnimatedText>
        <AnimatedText
          className="home-word orange-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"."}
        </AnimatedText>
        <AnimatedText
          className="home-word white-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"DEV"}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.9}
        >
          {"}"}
        </AnimatedText>
      </p>
      <div style={{ display: "flex", flexDirection: "row", marginLeft: "17%" }}>
        <AnimatedText
          className="home-word golden-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"specialties"}
        </AnimatedText>
        <AnimatedText
          className="home-word orange-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"="}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"{"}
        </AnimatedText>
        <AnimatedText
          className="home-word golden-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.1}
        >
          {"["}
        </AnimatedText>
        <AnimatedText
          className="home-word green-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.3}
        >
          {'"React"'}
        </AnimatedText>
        <AnimatedText
          className="home-word orange-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.3}
        >
          {","}
        </AnimatedText>
        <AnimatedText
          className="home-word green-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.5}
          style={{ whiteSpace: "nowrap" }}
        >
          {'"React Native"'}
        </AnimatedText>
        <AnimatedText
          className="home-word golden-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.5}
        >
          {"]"}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.6}
        >
          {"}"}
        </AnimatedText>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginLeft: "17%" }}>
        <AnimatedText
          className="home-word golden-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"profesionalExperience"}
        </AnimatedText>
        <AnimatedText
          className="home-word orange-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"="}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1}
        >
          {"{"}
        </AnimatedText>
        <AnimatedText
          className="home-word white-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.5}
        >
          {"2"}
        </AnimatedText>
        <AnimatedText
          className="home-word white-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.5}
        >
          {" "}
        </AnimatedText>
        <AnimatedText
          className="home-word white-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={1.5}
        >
          {"years"}
        </AnimatedText>
        <AnimatedText
          className="home-word purple-word"
          animationType={"float"}
          type={"words"}
          tag={"p"}
          duration={0.6}
        >
          {"}"}
        </AnimatedText>
      </div>

      <AnimatedText
        className="home-word purple-word"
        animationType={"float"}
        type={"words"}
        tag={"p"}
        duration={0.6}
      >
        {"/>"}
      </AnimatedText>
    </section>
  );
};

export const MemoizedLuisEspinozaComponent = memo(LuisEspinozaComponent);
