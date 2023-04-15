import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  // const [navBar, setNavBar] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      id="nav-links"
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal"
      >
        <NavLink to="/">About Me</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal"
      >
        <NavLink to="/portfolio">Portfolio</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal"
      >
        <NavLink to="/contact">Contact Me</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal"
      >
        <NavLink to="/resume">Resume</NavLink>
      </Typography>
    </ul>
  );

  // const changeBackground = () => {
  //   if (window.scrollY >= 109) {
  //     setNavBar(true);
  //   } else {
  //     setNavBar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Navbar className="sticky bg-blue-gray-50 inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-light-blue-400">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <h2>Travis Hackbarth</h2>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
};

export default NavBar;
