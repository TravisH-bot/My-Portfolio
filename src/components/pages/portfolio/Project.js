import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Project(props) {
  return (
    <motion.li
      key={props.i}
      className={props.classes}
      variants={item}
      id={props.id || ""} //bulletproofing
    >
      <a href={props.link} target="_blank">
        <h3>{props.title}</h3>
      </a>
    </motion.li>
  );
}

export default Project;
