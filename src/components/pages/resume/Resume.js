import React from "react";
import Button from "react-bootstrap/Button";
import { JackInTheBox } from "react-awesome-reveal";
import "./Resume.css";

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Carter_White_resume.docx.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = "Travis Hackbarth Resume 2023-2.pdf";
        alink.download = "Travis Hackbarth Resume 2023-2.pdf";
        alink.click();
      });
    });
  };

  return (
    <section className="main-container content">
      <section id="about-me" className="flexbox-item title">
        <JackInTheBox triggerOnce>
          <h2>Resume</h2>
        </JackInTheBox>
      </section>
      <section className="flexbox-item body-content">
        <h2 class="text-4xl"> Proficiencies</h2>
        <h3>Download my resume</h3>
        <Button id="res-sub" variant="primary" onClick={onButtonClick}>
          Download PDF
        </Button>{" "}
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
