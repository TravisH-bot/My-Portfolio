import React from "react";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import "./Resume.css";
import pdf from "./files/Travis_Hackbarth_Resume_2023-4.pdf";

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
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2 class="text-3xl">Front-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </section>
  );
};

export default Resume;
