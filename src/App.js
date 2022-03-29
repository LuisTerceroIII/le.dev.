import React, { Fragment } from "react";
import "./App.css";
import LandingButton from "./components/Mobile/LandingButton/LandingButton";
import AnimatedText from "react-animated-text-content";

function App() {
  return (
    <div className="App">
      <AnimatedText
        className={"title-landing"}
        animationType={"lights"}
        type={"words"}
        tag={'p'}
        duration={4.1}
      >
        Luis Espinoza Software Developer
      </AnimatedText>
      <LandingButton className={"landing-button"} text={"Explore"} />
      <Fragment className={"background-images-home"}>
        <img className={"moon"} src={"./moon.svg"} alt={"sun"} />
        <img className={"sun"} src={"./sun3.svg"} alt={"sun"} />
      </Fragment>
    </div>
  );
}
export default App;
