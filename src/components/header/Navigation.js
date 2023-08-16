import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import { Switch } from "@material-tailwind/react";
import "./Navbar.css";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import useColorMode from "../../hooks/useColorMode.js";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const [titleVariants, setTitleVariants] = useState({
    initial: {
      opacity: 0,
    },
    visible: {
      fontSize: "60px",
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const currentTitleVariants = { ...titleVariants };
    if (width < 480) {
      currentTitleVariants.visible.fontSize = "20px";
    } else if (width < 768) {
      currentTitleVariants.visible.fontSize = "30px";
    } else if (width < 976) {
      currentTitleVariants.visible.fontSize = "45px";
    } else {
      currentTitleVariants.visible.fontSize = "60px";
    }
    setTitleVariants(currentTitleVariants);
  }, [width]);

  const navLinkClick = (e) => {
    setOpenNav(false);
  };

  const navList = (
    <ul
      id="nav-links"
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
    >
      <Typography
        as="li"
        variant="small"
        className="p-3 font-normal text-blue-gray-800 hover:shadow-sm hover:shadow-black dark:hover:shadow-white"
      >
        <NavLink onClick={navLinkClick} to="/About">
          About Me
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        textGradient
        className="p-3 font-normal text-blue-gray-800 hover:shadow-sm hover:shadow-black dark:hover:shadow-white"
      >
        <NavLink onClick={navLinkClick} to="/portfolio">
          Portfolio
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal text-blue-gray-800 hover:shadow-sm hover:shadow-black dark:hover:shadow-white"
      >
        <NavLink onClick={navLinkClick} to="/contact">
          Contact Me
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        textGradient
        className="p-3 font-normal text-blue-gray-800 hover:shadow-sm hover:shadow-black dark:hover:shadow-white"
      >
        <NavLink onClick={navLinkClick} to="/resume">
          Resume
        </NavLink>
      </Typography>
    </ul>
  );

  const [colorMode, setColorMode] = useColorMode();

  const h2Ref = useRef(0);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    h2Ref.current = h2Ref.current.onmouseover = (event) => {
      let iterations = 0;

      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iterations >= event.target.dataset.value.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 30);
    };
  });
  return (
    <>
      <Navbar className="navBar sticky bg-opacity-50 dark:bg-opacity-50 bg-gray-50 dark:bg-gray-900 border-2 border-gray-700 dark:border-black inset-0 z-10 h-max max-w-full rounded-0 py-2 px-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-light-blue-400">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            <NavLink
              className="text-blue-gray-800 dark:text-white"
              onClick={navLinkClick}
              to="/"
            >
              <motion.h2
                ref={h2Ref}
                data-value="Travis Hackbarth"
                className="travis"
                to="/"
                variants={titleVariants}
                initial="initial"
                animate="visible"
              >
                Travis Hackbarth
              </motion.h2>
            </NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            {/* Dark / Light mode switch */}
            <div className="mode-switch">
              <MDBIcon
                fas
                icon="moon"
                className="moon text-blue-200"
                size="lg"
              />

              <Switch
                onClick={() =>
                  setColorMode(colorMode === "light" ? "dark" : "light")
                }
                defaultChecked={colorMode === "light" ? true : false}
                variant="gradient"
                size="sm"
              />
              <MDBIcon
                fas
                icon="sun"
                className="sun text-yellow-500"
                size="lg"
              />
            </div>
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
                  className="hamburger h-7 w-7"
                  viewBox="0 0 24 24"
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
                  className="ex h-7 w-7"
                  fill="none"
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
