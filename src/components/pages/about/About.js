import React from "react";
import { motion } from "framer-motion";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <section className="main-container content">
      <section id="work" className="flexbox-item title">
        <motion.h2 animate={{ fontSize: "50px" }}>About Me</motion.h2>
      </section>
      <section>
        <Fade triggerOnce>
          <div className="photo"></div>
        </Fade>
      </section>
      <section className="flexbox-item body-content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          at voluptates maxime voluptas id facere aliquid quidem reiciendis
          veniam veritatis iusto molestias praesentium culpa sint non unde
          consequatur, quia earum ullam fugiat consequuntur est quibusdam
          eveniet pariatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet
          quam nulla, perferendis nisi provident eum consequuntur iure, deleniti
          porro quibusdam consectetur eveniet dolor deserunt. Error placeat
          laudantium tempore sapiente eum nam dolores id delectus natus commodi,
          veritatis beatae magni voluptate doloremque officia vel modi quam
          repellendus omnis cumque suscipit?
        </p>
      </section>
    </section>
  );
};

export default About;
