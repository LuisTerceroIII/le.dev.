import React, { useEffect, useState} from "react";
import './App.css';
import LandingButton from "./components/Mobile/LandingButton/LandingButton";
import Header from "./components/Header/Header";

function App() {

  return (
    <div className="App">
        <Header />
        <p className={"title-landing"}> Luis Espinoza Web Developer </p>
        <LandingButton className={"landing-button"} text={"Explore"} />
        <img className={"sun"} src={"./sun3.svg"}  alt={"sun"}/>
        <img className={"moon"} src={"./moon.svg"}  alt={"sun"}/>
    </div>
  );
}
export default App;
