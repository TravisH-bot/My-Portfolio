import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import "../../gitHubLogo/gitHubLogo.css";

import Project from "./Project";

const projects = [
  {
    title: "CRWN Clothing",
    link: "https://main--stupendous-chebakia-41bda3.netlify.app/",
    linkTwo: "https://github.com/TravisH-bot/Crown-Clothing",
    classes: "project-main",
    id: "",
  },
  {
    title: "The Kitchen",
    link: "https://gentle-shelf-99079.herokuapp.com/",
    linkTwo: "https://github.com/TravisH-bot/the-kitchen",
    classes: "project-main",
    id: "kitchen",
  },
  {
    title: "Fluffy",
    link: "https://enigmatic-falls-71377.herokuapp.com/",
    linkTwo: "https://github.com/TravisH-bot/CloudMinnow",
    classes: "project-main",
    id: "fluffy",
  },
  {
    title: "Philanthropic Cocktails",
    link: "https://gharrison307.github.io/philanthropic-cocktails/",
    linkTwo: "https://github.com/TravisH-bot/philanthropic-cocktails",
    classes: "project-main",
    id: "philanthropic-cocktails",
  },
  {
    title: "HTML/CSS Effects",
    link: "https://travish-bot.github.io/CSS-snippet-cheatsheet/",
    linkTwo: "https://github.com/TravisH-bot/CSS-snippet-cheatsheet",
    classes: "project-main",
    id: "htmlcss",
  },
  {
    title: "Weather Dashboard",
    link: "https://travish-bot.github.io/challenge-6-weather-dashboard/",
    linkTwo: "https://github.com/TravisH-bot/challenge-6-weather-dashboard",
    classes: "project-main",
    id: "weather",
  },
  {
    title: "SVG Logo Generator",
    classes: "project-main",
    link: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    linkTwo: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    id: "svg",
  },
  {
    title: "Work Day Scheduler",
    classes: "project-main",
    link: "https://travish-bot.github.io/challenge-5-work-day-scheduler/",
    linkTwo: "https://github.com/TravisH-bot/challenge-5-work-day-scheduler",
    id: "wordDay",
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
        className="flexbox-item-work body-content justify-center"
      >
        {projects.map((obj, i) => (
          <Project
            i={i}
            classes={obj.classes}
            link={obj.link}
            linkTwo={obj.linkTwo}
            title={obj.title}
            id={obj.id}
          />
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
