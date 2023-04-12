import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <h2>Travis Hackbarth</h2>
        </div>
        <ul className="nav-ul">
          <li className="nav-link">
            <Link className="nav-link" to="/">
              About Me
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/contact">
              Contact Me
            </Link>
          </li>
          <li className="nav-link">
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
