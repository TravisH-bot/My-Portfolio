import { React } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/header/Navigation";
import HeroTop from "./components/hero-top/Hero-Top";
import HeroBottom from "./components/hero-bottom/Hero-Bottom";
import Blob from "./components/blob/Blob";
import Landing from "./components/pages/landing/Landing";
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
      <HeroTop />
      <AnimatePresence wait>
        <Blob />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
      <HeroBottom />
      <Footer />
    </>
  );
};

export default App;
