import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="main-container content">
      <section id="work" className="flexbox-item title">
        <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
          About Me
        </motion.h2>
      </section>

      <section>
        <motion.div
          className="photo rounded-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />
      </section>
      <section className="flexbox-item body-content">
        <p>
          My name is Travis Hackbarth. I am a graduate of the University of
          Denver's Full-Stack Coding Boot Camp. I have a wide range of
          experience in IT including sales, advanced software support, to
          leading teams in advanced technical troubleshooting to data and
          analytics. I enjoy building computers, networking hardware, hiking,
          traveling, and spending time with friends and family. I am thrilled to
          begin my adventure in coding and the continuous learning along the
          way.
        </p>
      </section>
    </section>
  );
};

export default About;
