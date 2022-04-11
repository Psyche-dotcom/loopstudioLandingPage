import React, { useState } from "react";

const Navbar = () => {
  const [title, setTitle] = useState(true);
  const [list, setList] = useState(false);
  const handle = () => {
    setList(!list);
    setTitle(!title);
  };
  return (
    <>
      <nav>
        <div className="nav-flex">
          <img src="./images/logo.svg" alt="" className="remove-width logo" />
          <img
            src={
              list ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
            }
            alt="Hamburger-OpenandClose"
            onClick={handle}
            className="remove-width mobile"
          />
          <ul className="desktop">
            <li>About </li>
            <li>Careers</li>
            <li>Events </li>
            <li>Products </li>
            <li>Support</li>
          </ul>
        </div>
        {list && (
          <div className="mobile mobile-toggle">
            <ul>
              <li>About </li>
              <li>Careers</li>
              <li>Events </li>
              <li>Products </li>
              <li>Support</li>
            </ul>
          </div>
        )}
      </nav>
      {title && (
        <h1 className="hero_text">
          Immersive <br /> experiences <br />
          that deliver
        </h1>
      )}
    </>
  );
};

export default Navbar;
