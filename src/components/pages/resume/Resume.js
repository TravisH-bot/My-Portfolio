import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

const Resume = () => {
  return (
    <section className="main-container content">
      <section id="about-me" className="flexbox-item title">
        <JackInTheBox triggerOnce>
          <h2>Resume</h2>
        </JackInTheBox>
      </section>
      <section className="flexbox-item body-content">
        <h2 class="text-4xl"> Proficiencies</h2>
      </section>
    </section>
  );
};

export default Resume;
