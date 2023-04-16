import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Typography } from "@material-tailwind/react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="flex max-w-full h-max flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  border-blue-gray-50 py-6 text-center md:justify-center rounded-2 bg-gray-50 dark:bg-gray-900">
      <Typography color="blue-gray" className="font-normal"></Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="https://github.com/TravisH-bot"
            target="blank"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white fs-2 text"
          >
            <MDBIcon fab icon="github" />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white fs-2 text"
          >
            <MDBIcon fab icon="twitter" />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://www.linkedin.com/in/thackbarth"
            target="blank"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 dark:text-white fs-2 text"
          >
            <MDBIcon fab icon="linkedin" />
          </Typography>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
