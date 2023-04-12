import React from "react";

const Contact = () => {
  return (
    <footer>
      <section class="main-container">
        <section id="contact-me" class="flexbox-item title">
          <h2>Contact Me</h2>
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
      </section>
    </footer>
  );
};

export default Contact;
