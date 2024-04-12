import { Component } from "react";
import "./index.css";
import { LuPen } from "react-icons/lu";
import Sidebar from "../sidebar";
class Create extends Component {
  render() {
    return (
      // <div className="create-main-container">
      <div className="container">
        <Sidebar />

        <div className="create-main-container">
          <div className="character-profile-container">
            <div className="pen-container">
              <LuPen className="pen" />
            </div>
          </div>
          <div className="create-character-container">
            <label className="label-element">Character name</label>
            <br />
            <input
              type="text"
              className="input-element"
              placeholder="e.g.Albert Einstein"
            />
            <p className="character-paragraph">0/20</p>
          </div>
          <div className="create-character-container">
            <label className="label-element">Tagline</label>
            <br />
            <input
              type="text"
              className="input-element"
              placeholder="Add a short tagline of your Character"
            />
            <p className="character-paragraph">0/50</p>
          </div>
          <div className="create-character-container">
            <label className="label-element">Description</label>
            <br />
            <input
              type="text"
              className="input-element"
              placeholder="How would your Character describe themselvs?"
            />
            <p className="character-paragraph">0/500</p>
          </div>
          <div className="create-character-container">
            <label className="label-element">Greeting</label>
            <br />
            <input
              type="text"
              className="input-element"
              placeholder="e.g.Hello, I am Albert, Ask me any thing about my scientific contribution"
            />
            <p className="character-paragraph">0/2048</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
