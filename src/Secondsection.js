import React, { Component } from "react";
import { Images, ImagesDesktop } from "./image";
class SecondSection extends Component {
  render() {
    return (
      <>
        <section className="container secondSection mobile">
          <h2>Our creations</h2>
          <Images />
          <button type="button" className=" btn">
            See all
          </button>
        </section>
        <section className="container secondSection desktop">
          <div>
            <h2>Our creations</h2>
            <button type="button" className="btn">
              See all
            </button>
          </div>
          <ImagesDesktop />
        </section>
      </>
    );
  }
}
export default SecondSection;
