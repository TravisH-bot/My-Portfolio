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
import useColorMode from "./hooks/useColorMode";

const App = () => {
  const location = useLocation();
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="bg-white dark:bg-black">
      {/* <button
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="bg-gray-500 dark:bg-green text-black dark:text-white"
      >
        Click
      </button> */}
      <NavBar />
      <Hero />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
