import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Slide triggerOnce>
        <h1>My Portfolio</h1>
      </Slide>
      <div className="photo"></div>
    </section>
  );
};

export default Hero;
