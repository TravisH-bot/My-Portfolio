import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h2>Travis Hackbarth</h2>
      </div>
      <ul className="nav-ul">
        <li className="nav-link">
          <NavLink to="/">About Me</NavLink>
        </li>

        <li className="nav-link">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
