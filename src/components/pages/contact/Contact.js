import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { validateEmail } from "../../../utils/helpers";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vftqlp",
        "template_7ngqooq",
        form.current,
        "jNftEzK9Oqb76wVDV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="content" id="contact-container">
      <section id="work" className="flexbox-item title">
        <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
          Contact Me
        </motion.h2>
      </section>
      <form class="contact-form" ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
          <label for="nameInput" class="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            class="form-control"
            id="nameInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="subjectInput" class="form-label">
            Subject
          </label>
          <input
            type="subject"
            name="subject"
            class="form-control"
            id="subjectInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="emailInput"
          />
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea class="form-control" id="messageArea" rows="3"></textarea>
          </div>
        </div>
        <button id="subBtn" type="submit" value="Send" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
