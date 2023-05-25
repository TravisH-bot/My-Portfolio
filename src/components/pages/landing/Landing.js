import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Landing.css";

const Landing = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div id="landLayout" className="content">
        <div className="artPhoto"></div>
        <div className="typing">
          <TypeAnimation
            sequence={[
              "Front End Developer",
              1000,
              "React Developer",
              1000,
              "Back End Developer",
              1000,
              "JavaScript Developer",
              1000,
            ]}
            repeat={Infinity}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
