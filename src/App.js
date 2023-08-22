import React from "react";
import "./App.css";
import { AboutMe, MemoizedLuisEspinozaComponent, ProjectsMemo } from "./components/index";
import Contact from "./routes/Contact";

function App() {

    const GoToAboutSectionArrow = () => {
        return (
            <a href="#about-me" className="explore-arrow-container">
                <img src={"./icons/purple-down-arrow.png"} className={"explore-page-arrow-animated"} alt={"purple-arrow"}/>
            </a>
        )
    }
    return (
        <main className="App">
            <section className="welcome-container">
                <MemoizedLuisEspinozaComponent />
                <GoToAboutSectionArrow/>
            </section>
            <AboutMe />
            <ProjectsMemo/>
            <Contact/>
        </main>
    );
}
export default App;
