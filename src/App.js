import React, {Fragment} from "react";
import "./App.css";
import LandingButton from "./components/Mobile/LandingButton/LandingButton";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <p className={"title-landing"}> Luis Espinoza Web Developer </p>
      <LandingButton className={"landing-button"} text={"Explore"} />
        <Fragment className={'background-images-home'} >
            <img className={"moon"} src={"./moon.svg"} alt={"sun"} />
            <img className={"sun"} src={"./sun3.svg"} alt={"sun"} />
        </Fragment>

        <Footer />
    </div>
  );
}
export default App;
