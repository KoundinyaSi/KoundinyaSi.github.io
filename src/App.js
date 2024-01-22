import "./App.css";
import React from "react";
import HeroComp from "./components/HeroComp/HeroComp";
import NavBarElem from "./components/NavBarElem/NavBarElem";
import { createPortal } from "react-dom";
import Timeline from "./components/Timeline/Timeline";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import ContactMe from './components/Contact/ContactMe'

const App = () => {
  return (
    <div className="main-app-div">
      {createPortal(<NavBarElem />, document.getElementById("navbar-div"))}
      <HeroComp />
      <About />
      <Timeline />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
