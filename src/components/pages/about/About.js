import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <section className="main-container content">
          <section id="work" className="flexbox-item title">
            <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
              About Me
            </motion.h2>
          </section>

          <section>
            <div className="photo" />
          </section>
          <section className="flexbox-item body-content">
            <p className="pGraph">
              I am a graduate of the University of Denver's Full-Stack Coding
              Boot Camp.
            </p>
            <p>
              I have a wide range of IT experience in the form of sales, PC
              building, and advanced software support, to leading teams
              responsible for gathering customer data and analytics to advanced
              technical application troubleshooting.
            </p>
            <p>
              When I'm not coding I enjoy networking hardware, building
              computers, hiking, traveling, and spending time with friends and
              family.
            </p>
            <p>
              You can view my resume{" "}
              <NavLink to="/resume">
                <button id="abtBtn" className="mainBtn">
                  Here
                </button>
              </NavLink>
            </p>
          </section>
        </section>
      </motion.div>
    </>
  );
};

export default About;
