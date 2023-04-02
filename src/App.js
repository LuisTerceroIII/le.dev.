import React, { Fragment } from "react";
import "./App.css";
import Button from "./components/Atoms/button/Button";
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
      <Button className={"button"} text={"Explore"} route={'/aboutme'} />
      <Fragment className={"background-images-home"}>
        <img className={"moon"} src={"./moon.svg"} alt={"sun"} />
        <img className={"sun"} src={"./sun3.svg"} alt={"sun"} />
      </Fragment>
    </div>
  );
}
export default App;
