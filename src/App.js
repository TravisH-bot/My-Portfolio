import { React, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/header/Navigation";
import Hero from "./components/hero/Hero";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";
import Resume from "./components/pages/resume/Resume";
import Footer from "./components/footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Hero />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/*" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
