import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Aboutme from "./routes/Aboutme";
import Education from "./routes/Education";
import Projects from "./routes/Projects";
import Specialities from "./routes/Specialities";
import Technologies from "./routes/Technologies";
import Contact from "./routes/Contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/aboutme"} element={<Aboutme />} />
        <Route path={"/education"} element={<Education />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/specialities"} element={<Specialities />} />
        <Route path={"/technologies"} element={<Technologies />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
