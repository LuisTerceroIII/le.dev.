import React, { useState } from "react";
import "./App.css";
import { MemoizedLuisEspinozaComponent, MemorizedAboutMe, Projects } from "./components/index";
import AnimatedText from "react-animated-text-content";
import { ScrollContainer } from "react-scroll-motion";

function App() {



    const GoToAboutSectionArrow = () => {
        return (
            <a href="#about-me" className="explore-arrow-container">
                <img src={"./icons/purple-down-arrow.png"} className={"explore-page-arrow-animated"}/>
            </a>
        )
    }
    return (
        <ScrollContainer className="App">
            <section className="welcome-container">
                <MemoizedLuisEspinozaComponent />
                <GoToAboutSectionArrow/>
            </section>
            <MemorizedAboutMe />
            <Projects/>
        </ScrollContainer>
    );
}
export default App;
