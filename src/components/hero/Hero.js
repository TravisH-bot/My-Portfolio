import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>My Portfolio</h1>
      <div>
        <img className="me" src="./images/me.png" alt="me" />
      </div>
    </section>
  );
};

export default Hero;
