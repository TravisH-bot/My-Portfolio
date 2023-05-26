import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vftqlp",
        "template_7ngqooq",
        form.current,
        "jNftEzK9Oqb76wVDV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  const notify = () =>
    toast.success("Thank you! Please allow 3-5 business days for a reply.");

  return (
    <motion.div className="test" exit={{ opacity: 0 }}>
      <div className="content" id="contact-container">
        <section id="work" className="flexbox-item title">
          <motion.h2 className="sideTitle" animate={{ fontSize: "50px" }}>
            Contact Me
          </motion.h2>
        </section>
        <form class="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="myEmail">
            The form below will forward a message to{" "}
            <span className="text-blue-900 dark:text-cyan-300">
              <a className="mailTo" href="mailto:travishackbarth@gmail.com">
                travishackbarth@gmail.com
              </a>
            </span>{" "}
            or you can email me directly at the same address.
          </div>
          <div class="mb-3">
            <label for="nameInput" class="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              class="form-control"
              id="nameInput"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="subjectInput" class="form-label">
              Subject
            </label>
            <input
              type="subject"
              name="subject"
              class="form-control"
              id="subjectInput"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="emailInput"
            />
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="messageArea"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button
            onClick={notify}
            id="subBtn"
            type="submit"
            value="Send"
            className="mainBtn"
          >
            Submit
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default Contact;
