import React, { useRef } from "react";
import "./App.css";
import { MemoizedLuisEspinozaComponent, MemorizedAboutMe, ProjectsMemo } from "./components/index";
import Contact from "./routes/Contact";

function App() {

    const GoToAboutSectionArrow = () => {
        return (
            <a href="#about-me" className="explore-arrow-container">
                <img src={"./icons/purple-down-arrow.png"} className={"explore-page-arrow-animated"}/>
            </a>
        )
    }
    return (
        <main className="App">
            <section className="welcome-container">
                <MemoizedLuisEspinozaComponent />
                <GoToAboutSectionArrow/>
            </section>
            <MemorizedAboutMe />
            <ProjectsMemo/>
            <Contact/>
        </main>
    );
}
export default App;
