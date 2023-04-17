import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const hoverEffect = {
  scale: 1.1,
  textShadow: "0px 0px 12px rgb(0,191,255)",
  boxShadow: "0px 0px 20px rgb(0,191,255)",
};

function Project(props) {
  return (
    <motion.li
      key={props.i}
      className={props.classes}
      variants={item}
      whileHover={hoverEffect}
      id={props.id || ""} //bulletproofing
    >
      <a href={props.link} target="blank">
        <h3>{props.title}</h3>
      </a>
    </motion.li>
  );
}

export default Project;
