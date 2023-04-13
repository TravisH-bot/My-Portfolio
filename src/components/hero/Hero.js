import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Slide triggerOnce>
        <h1>My Portfolio</h1>
      </Slide>
      <div>
        <img className="me" src="./images/me.png" alt="me" />
      </div>
    </section>
  );
};

export default Hero;
