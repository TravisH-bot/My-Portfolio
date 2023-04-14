import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { JackInTheBox } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { validateEmail } from "../../../utils/helpers";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful submission.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <footer>
      <section class="main-container content">
        <section id="contact-me" class="flexbox-item title">
          <JackInTheBox triggerOnce>
            <h2 className="text-9xl">Contact Me</h2>
          </JackInTheBox>
        </section>

        <section class="flexbox-item body-content">
          <ul>
            <li>
              <a href="#">Phone Number</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/travishackbarth?si=dfffa376a5414627"
                target="_blank"
                rel="noreferrer"
              >
                Spotify
              </a>
            </li>
          </ul>
        </section>
        <section className="contact-form">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              value={name}
              name="name"
              onChange={handleInputChange}
            >
              <Form.Label>Name:</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              value={email}
              name="email"
              onChange={handleInputChange}
            >
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              value={message}
              name="message"
              onChange={handleInputChange}
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
          </Form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </section>
      </section>
    </footer>
  );
};

export default Contact;
