import { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo-container">
          <h1 className="logo">character.ai</h1>
        </div>
        <div className="options-container">
          <button className="options-button">Blog</button>
          <button className="options-button">News</button>
          <button className="options-button">Careers</button>
          <button className="try-it-button">Try it out</button>
        </div>
      </div>
    );
  }
}

export default Header;
