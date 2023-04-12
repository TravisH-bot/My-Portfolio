import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <h2>Travis Hackbarth</h2>
        </div>
        <ul class="nav-ul">
          <li class="nav-link">
            <a href="#about-me">About Me</a>
          </li>
          <li class="nav-link">
            <a href="#work">Work</a>
          </li>
          <li class="nav-link">
            <a href="#contact-me">Contact Me</a>
          </li>
          <li class="nav-link">
            <a
              href="./assets/files/Travis Hackbarth Resume 2023.pdf"
              download="Travis Hackbarth Resume 2023"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
