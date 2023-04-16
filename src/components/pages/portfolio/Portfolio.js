import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

import Project from "./Project";

const projects = [
  {
    title: "Fluffy",
    link: "https://enigmatic-falls-71377.herokuapp.com/",
    classes: "project-main",
    id: "",
  },
  {
    title: "Philanthropic Cocktails",
    link: "https://gharrison307.github.io/philanthropic-cocktails/",
    classes: "project-side",
    id: "philanthropic-cocktails",
  },
  {
    title: "HTML/CSS Effects",
    link: "https://travish-bot.github.io/CSS-snippet-cheatsheet/",
    classes: "project-side",
    id: "htmlcss",
  },
  {
    title: "Weather Dashboard",
    link: "https://travish-bot.github.io/challenge-6-weather-dashboard/",
    classes: "project-side",
    id: "weather",
  },
  {
    title: "PC Building",
    classes: "project-side",
    id: "pc",
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section className="main-container content">
      <section id="work" className="flexbox-item title">
        <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
          Projects
        </motion.h2>
      </section>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={container}
        className="flexbox-item-work body-content"
      >
        {projects.map((obj, i) => (
          <Project
            i={i}
            classes={obj.classes}
            link={obj.link}
            title={obj.title}
            id={obj.id}
          />
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
