import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import "./Resume.css";
import pdf from "./files/Travis_Hackbarth_Resume_2023-4.pdf";
import physics from "./icons/physics.png";
import html5 from "./icons/html-5.png";
import css from "./icons/css.png";
import js from "./icons/js.png";
import bootstrap from "./icons/bootstrap.png";
import api from "./icons/api.png";
import nodejs from "./icons/nodejs.png";
import mysql from "./icons/mysql.png";
import mongodbIcon from "./icons/mongodb-icon.svg";
import expressjsIcon from "./icons/expressjs-icon.svg";
import graphqlIcon from "./icons/graphql-icon.svg";
import jqueryIcon from "./icons/jquery-icon.svg";
import responsive from "./icons/responsive-design.png";

const iconVariants = {
  width: "60px",
};

const iconEffects = {
  scaleX: 1.3,
  textShadow: "0px 0px 8px rgb(0,191,255)",
  textShadow: "0px 0px 8px rgb(0,191,255)",
};

const Resume = () => {
  return (
    <section className="main-container content">
      <section id="work" className="flexbox-item title">
        <motion.h2 animate={{ fontSize: "50px" }}>Resume</motion.h2>
      </section>
      <section className="flexbox-item body-content">
        <h2 class="text-4xl"> Proficiencies</h2>
        <h3>
          Download my resume{" "}
          <a href={pdf} target="blank" download={pdf}>
            <Button id="res-sub" variant="primary">
              Download PDF
            </Button>
          </a>
        </h3>

        <h2 class="text-3xl">Front-end Proficiencies</h2>
        <div>
          <ul className="front">
            <motion.li whileHover={iconEffects}>
              <img src={html5} style={iconVariants}></img>HTML
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={css} style={iconVariants}></img>CSS
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={js} style={iconVariants}></img>JavaScript
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={jqueryIcon} style={iconVariants}></img>jQuery
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={responsive} style={iconVariants}></img>responsive design
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={physics} style={iconVariants}></img>
              React
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={bootstrap} style={iconVariants}></img>Bootstrap
            </motion.li>
          </ul>
        </div>
        <h2 class="text-3xl">Back-end Proficiencies</h2>
        <div>
          <ul className="back">
            <motion.li whileHover={iconEffects}>
              <img src={api} style={iconVariants}></img>APIs
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={nodejs} style={iconVariants}></img>Node
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={expressjsIcon} style={iconVariants}></img>Express
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={mysql} style={iconVariants}></img>MySQL, Sequeize
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={mongodbIcon} style={iconVariants}></img>MongoDB,
              Mongoose
            </motion.li>
            <motion.li whileHover={iconEffects}>
              <img src={graphqlIcon} style={iconVariants}></img>GraphQL
            </motion.li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Resume;
