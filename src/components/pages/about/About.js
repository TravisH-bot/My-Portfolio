import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <>
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
            My name is Travis Hackbarth. I am a graduate of the University of
            Denver's Full-Stack Coding Boot Camp. I have a wide range of
            experience in IT including sales, advanced software support, leading
            teams in advanced technical troubleshooting and data and analytics.
            I enjoy networking hardware, building computers, hiking, traveling,
            and spending time with friends and family. I am thrilled to begin my
            adventure in coding and the continuous learning along the way.
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
