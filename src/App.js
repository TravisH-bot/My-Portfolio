import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import NavBar from "./components/header/Navigation";
import Hero from "./components/hero/Hero";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";
import Resume from "./components/pages/resume/Resume";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Hero />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
