import React from "react";
import "./App.css";
import NavBar from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Project";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
