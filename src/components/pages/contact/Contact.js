import React from "react";
import Form from "react-bootstrap/Form";
import { JackInTheBox } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </section>
      </section>
    </footer>
  );
};

export default Contact;
