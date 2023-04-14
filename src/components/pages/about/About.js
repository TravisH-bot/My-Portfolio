import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <section className="main-container content">
      <section id="about-me" className="flexbox-item title">
        <JackInTheBox triggerOnce>
          <h2>About Me</h2>
        </JackInTheBox>
      </section>
      <section>
        <div className="photo"></div>
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
