import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import "../../gitHubLogo/GitHubLogo.css";

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
    projectSummary:
      "Worked with a team of 4 to build a single page application using third-party APIs to pull data from.",
    concepts:
      "We created an application where users are able to search for drinks, alcoholic and non-alcoholic, by cocktail name or ingredient. Users are also offered the option to make a donation to a charity of their choosing.",
    technologiesUsed:
      "HTML, CSS, JS, jQuery, Bootstrap, TheCocktailDB cocktail API, and Every.org donation API.",
  },
  {
    title: "HTML/CSS Effects",
    link: "https://travish-bot.github.io/CSS-snippet-cheatsheet/",
    linkTwo: "https://github.com/TravisH-bot/CSS-snippet-cheatsheet",
    classes: "project-main",
    id: "htmlcss",
    projectSummary: "A group of interesting and fun CSS tricks.",
    concepts:
      "While first learning CSS in our boot camp, we were tasked with creating and displaying a collection of CSS tricks we enjoyed using.",
    technologiesUsed: "HTML & CSS",
  },
  {
    title: "Weather Dashboard",
    link: "https://travish-bot.github.io/challenge-6-weather-dashboard/",
    linkTwo: "https://github.com/TravisH-bot/challenge-6-weather-dashboard",
    classes: "project-main",
    id: "weather",
    projectSummary:
      "A web application that pulls the current and future weather forecast for a user selected city, saves searches in local storage, and can be accessed again when clicked on.",
    concepts:
      "Created a single page application to gather the current weather for a city displayed on a main card while a 5 day forecast is displayed on smaller cards below.",
    technologiesUsed: "HTML, CSS, Bootstrap, OpenWeatherMap API",
  },
  {
    title: "SVG Logo Generator",
    classes: "project-main",
    link: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    linkTwo: "https://github.com/TravisH-bot/SVG-Logo-Generator",
    id: "svg",
    projectSummary:
      "A command line application, using Node, that creates a SVG logo for users based on their inputs. Users can select from a square, circle, or a triangle, the color, and up to three characters for the fill.",
    concepts:
      "The app can be used to create simple and quick logos based on user input.",
    technologiesUsed: "HTML, CSS, SVG, Jest",
  },
  {
    title: "Work Day Scheduler",
    classes: "project-main",
    link: "https://travish-bot.github.io/challenge-5-work-day-scheduler/",
    linkTwo: "https://github.com/TravisH-bot/challenge-5-work-day-scheduler",
    id: "wordDay",
    projectSummary:
      "Using Day.js in order to format and stylize a work day scheduler as well as using local storage to save events.",
    concepts:
      "Created a scheduler for a 9 to 5 work day that saves inputs per time block to local storage and highlights the past, current, and future hours by color.",
    technologiesUsed: "HTML, CSS, Local Storage",
  },
  {
    title: "*The Kitchen",
    link: "https://gentle-shelf-99079.herokuapp.com/",
    linkTwo: "https://github.com/TravisH-bot/the-kitchen",
    classes: "project-main",
    id: "kitchen",
    projectSummary:
      "The Kitchen is a full-stack application to be used by patrons of a pickleball business in order to reserve courts.",
    concepts:
      "Created a React app that allows users to create a profile and book, reserve, and pay (via Stripe), for a pickleball court reservation and have reservations saved to their profile.",
    technologiesUsed:
      "React, CSS, Material/TailwindCSS, Node.js, Express.js, GraphQL, MongoDB/Mongoose, JWT, Stripe, and more.",
  },
];

const Projects = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
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
    </motion.div>
  );
};

export default Projects;
