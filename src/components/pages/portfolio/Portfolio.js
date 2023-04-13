import React from "react";
import "./Portfolio.css";
import { JackInTheBox } from "react-awesome-reveal";
// import Header from "../header/Header";
// import Navigation from "./Navigation";
// import Footer from "../footer/Footer";

// Work -

const Projects = () => {
  return (
    <section className="main-container">
      <section id="work" className="flexbox-item title">
        <JackInTheBox triggerOnce>
          <h2>Portfolio</h2>
        </JackInTheBox>
      </section>

      <section className="flexbox-item-work body-content">
        <section className="project-main">
          <a
            href="https://enigmatic-falls-71377.herokuapp.com/"
            target="_blank"
          >
            <h3>Fluffy</h3>
          </a>
        </section>
        <section id="philanthropic-cocktails" className="project-side">
          <a
            href="https://gharrison307.github.io/philanthropic-cocktails/"
            target="_blank"
          >
            <h3>Philanthropic Cocktails</h3>
          </a>
        </section>
        <section id="htmlcss" className="project-side">
          <a
            href="https://travish-bot.github.io/CSS-snippet-cheatsheet/"
            target="_blank"
          ></a>
          <h3>HTML/CSS Effects</h3>
        </section>
        <section id="pc" className="project-side">
          <h3>PC Building</h3>
        </section>
        <section id="projects" className="project-side">
          <h3>Coding</h3>
        </section>
      </section>
    </section>
  );
};

export default Projects;
