import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h2>Travis Hackbarth</h2>
      </div>
      <ul className="nav-ul">
        <li className="nav-link">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
            }}
            exact
            to="/"
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
            }}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
            }}
            to="/contact"
          >
            Contact Me
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
            }}
            to="/resume"
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
