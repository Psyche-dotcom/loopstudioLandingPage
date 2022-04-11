import React, { Component } from "react";

class NavbarFooter extends Component {
  render() {
    return (
      <nav>
        <img src="./images/logo.svg" alt="" className="remove-width logo" />
        <ul>
          <li>About </li>
          <li>Careers</li>
          <li>Events </li>
          <li>Products </li>
          <li>Support</li>
        </ul>
      </nav>
    );
  }
}
export default NavbarFooter;
