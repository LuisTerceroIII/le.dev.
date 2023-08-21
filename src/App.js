import React, { useState } from "react";
import "./App.css";
import { MemoizedLuisEspinozaComponent, MemorizedAboutMe } from "./components/index";
import AnimatedText from "react-animated-text-content";

function App() {

    const GoToAboutSectionArrow = () => (
        <a href="#about-me" className="explore-arrow-container">
            <img src={"./icons/purple-down-arrow.png"} className={"explore-page-arrow-animated"}/>
        </a>
    )
    return (
        <main className="App">
            <section className="welcome-container">
                <MemoizedLuisEspinozaComponent />
                <GoToAboutSectionArrow/>
            </section>
            <MemorizedAboutMe />
        </main>
    );
}
export default App;
