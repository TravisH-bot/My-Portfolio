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
    projectSummary:
      "The project is set to simulate an e-commerce store front with Google sign in incorporation and Stripe for checkout. ",
    concepts:
      "The main concept was based on a Udemy course to aid in my continued React education that also incorporated some additional new technologies.",
    technologiesUsed:
      "React, JavaScript, Styled Components & custom css for styling and mobile responsiveness, Stripe, Redux, Firebase, Google Sign In, Netlify, and more. ",
  },
  {
    title: "Fluffy - Pet Store",
    link: "https://enigmatic-falls-71377.herokuapp.com/",
    linkTwo: "https://github.com/TravisH-bot/CloudMinnow",
    classes: "project-main",
    id: "fluffy",
    projectSummary:
      "Worked on a team of 5 to build a full stack RESTful API application over a one week time period to create a pet store e-commerce store front.",
    concepts:
      "Worked on creating the visual components with use of Semantic UI and custom css to be desktop and mobile responsive.",
    technologiesUsed:
      "Handlebars, JavaScript, Node.js, Express.js, MYSQL, Sequelize, Heroku,  Semantic UI and more.",
  },
  {
    title: "Philanthropic Cocktails",
    link: "https://gharrison307.github.io/philanthropic-cocktails/",
    linkTwo: "https://github.com/TravisH-bot/philanthropic-cocktails",
    classes: "project-main",
    id: "philanthropic-cocktails",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
  },
  {
    title: "HTML/CSS Effects",
    link: "https://travish-bot.github.io/CSS-snippet-cheatsheet/",
    linkTwo: "https://github.com/TravisH-bot/CSS-snippet-cheatsheet",
    classes: "project-main",
    id: "htmlcss",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
  },
  {
    title: "Weather Dashboard",
    link: "https://travish-bot.github.io/challenge-6-weather-dashboard/",
    linkTwo: "https://github.com/TravisH-bot/challenge-6-weather-dashboard",
    classes: "project-main",
    id: "weather",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
  },
  {
    title: "SVG Logo Generator",
    classes: "project-main",
    link: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    linkTwo: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    id: "svg",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
  },
  {
    title: "Work Day Scheduler",
    classes: "project-main",
    link: "https://travish-bot.github.io/challenge-5-work-day-scheduler/",
    linkTwo: "https://github.com/TravisH-bot/challenge-5-work-day-scheduler",
    id: "wordDay",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
  },
  {
    title: "*The Kitchen",
    link: "https://gentle-shelf-99079.herokuapp.com/",
    linkTwo: "https://github.com/TravisH-bot/the-kitchen",
    classes: "project-main",
    id: "kitchen",
    projectSummary: "test",
    concepts: "test2",
    technologiesUsed: "test3",
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
        <div className="disclaimer flex self-end">
          <p className="disc text-sm">
            *Site is not functioning correctly. Cannot reach project host.
          </p>
        </div>
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
            projectSummary={obj.projectSummary}
            concepts={obj.concepts}
            technologiesUsed={obj.technologiesUsed}
          />
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
