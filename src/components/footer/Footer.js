import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
  return (
    <MDBFooter
      id="footer"
      className="text-center text-white"
      style={{ backgroundColor: "black" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-twitter" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="https://www.linkedin.com/in/thackbarth"
            target="blank"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="https://github.com/TravisH-bot"
            target="blank"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center text-light p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          id="daFeet"
          className="text-light"
          href="https://github.com/TravisH-bot"
        >
          https://github.com/TravisH-bot
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
