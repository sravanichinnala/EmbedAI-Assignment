import { Component } from "react";
import "./index.css";
import Sidebar from "../sidebar";
class Create extends Component {
  render() {
    return (
      // <div className="create-main-container">
      <div className="container">
        <Sidebar />

        <div className="create-main-container">
          <img src="" alt="" className="" />
          <label className="label-element">Character name</label>
          <input
            type="text"
            className="input-element"
            placeholder="e.g.Albert Einstein"
          />
        </div>
      </div>
    );
  }
}

export default Create;
