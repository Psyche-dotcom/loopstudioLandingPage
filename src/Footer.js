import React from "react";
import NavbarFooter from "./navbarfooter";
const Footer = () => {
  const Contact = () => {
    return (
      <section className="copyright">
        <div className="social-media">
          <img
            src="./images/icon-instagram.svg"
            alt="instagram logo"
            className="remove-width social-space"
          />
          <img
            src="./images/icon-pinterest.svg"
            alt="pintrest logo"
            className="remove-width social-space"
          />
          <img
            src="./images/icon-twitter.svg"
            alt="twiter logo"
            className="remove-width social-space"
          />
          <img
            src="./images/icon-facebook.svg"
            alt="facebook logo"
            className="remove-width"
          />
        </div>
        <h4>© 2021 Loopstudios. All rights reserved.</h4>
      </section>
    );
  };
  return (
    <footer>
      <div className="container">
        <NavbarFooter />
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
