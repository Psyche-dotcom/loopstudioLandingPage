import "./style/App.css";
import React, { Component } from "react";
import Navbar from "./navbar";
import FirstSection from "./firstSection";
import SecondSection from "./Secondsection";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <header className="hero">
          <div className="container">
            <Navbar />
          </div>
        </header>
        <FirstSection />
        <SecondSection />
        <Footer />
      </div>
    );
  }
}

export default App;
