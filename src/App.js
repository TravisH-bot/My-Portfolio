import React from "react";
import "./App.css";
import NavBar from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
};

export default App;
