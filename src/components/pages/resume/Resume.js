import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import "./Resume.css";
import pdf from "./files/Travis_Hackbarth_Web_Dev_Resume_2023.pdf";
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
  scale: 1.2,
};

const Resume = () => {
  return (
    <section className="main-container content">
      <section id="work" className="flexbox-item title">
        <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
          Resume
        </motion.h2>
      </section>
      <section className="flexbox-item body-content">
        <h2 id="resumeDL">
          Download my resume{" "}
          <a href={pdf} target="blank" download={pdf}>
            <button className="mainBtn" id="pdfBtn" variant="secondary">
              Download PDF
            </button>
          </a>
        </h2>
        <h2 className="text-4xl">Skills</h2>

        <h2 className="text-3xl drop-shadow-2xl">Front-end</h2>
        <div className="grid grid-cols-4 gap-4 front">
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={html5} style={iconVariants}></img>HTML
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={css} style={iconVariants}></img>CSS
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={js} style={iconVariants}></img>JavaScript
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={jqueryIcon} style={iconVariants}></img>jQuery
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={responsive} style={iconVariants}></img>responsive design
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={physics} style={iconVariants}></img>
              React
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={bootstrap} style={iconVariants}></img>Bootstrap
            </motion.p>
          </div>
        </div>
        <h2 className="text-3xl">Back-end</h2>
        <div className="grid grid-cols-4 gap-4 back">
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={api} style={iconVariants}></img>APIs
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={nodejs} style={iconVariants}></img>Node
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={expressjsIcon} style={iconVariants}></img>Express
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={mysql} style={iconVariants}></img>MySQL, Sequelize
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={mongodbIcon} style={iconVariants}></img>MongoDB,
              Mongoose
            </motion.p>
          </div>
          <div>
            <motion.p className="ico" whileHover={iconEffects}>
              <img src={graphqlIcon} style={iconVariants}></img>GraphQL
            </motion.p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resume;
