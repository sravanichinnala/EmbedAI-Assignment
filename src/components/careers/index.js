import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import "./index.css";
function Careers() {
  return (
    <div className="careers-main-container">
      <h1 className="careers-heading">character.ai</h1>
      <div className="careers-container">
        <h2 className="careers-side-heading">Open Positions (33)</h2>
        <h3 className="careers-side-heading-1">Filters:</h3>
        <div className="select-container">
          <select name="Department" id="departmentSelect" className="select">
            <option value="AllDepartments">AllDepartments</option>
            <option value="Marketing">Marketing</option>
            <option value="Operation">Operation</option>
            <option value="Security">Security</option>
          </select>
          <select name="Location" id="location" className="select">
            <option value="AllLocations">AllDepartments</option>
            <option value="Menlo Park">Menlo Park, CA</option>
            <option value="NewYork">New York</option>
          </select>
          <select name="Employment Type" id="employmentType" className="select">
            <option value="AllEmploymentTypes">All Employment Type</option>
            <option value="FullTime">FullTime</option>
          </select>
        </div>
        <div>
          <h2 className="careers-side-heading">Marketing</h2>
          <p className="careers-paragraph">Brand and Content Marketing Lead</p>
          <p className="careers">
            Marketing <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
          <p className="careers-paragraph">Social Media Manager</p>
          <p className="careers">
            Marketing <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
        </div>
        <div>
          <h2 className="careers-side-heading">Operations</h2>
          <p className="careers-paragraph">Head of Privacy & Product Legal</p>
          <p className="careers">
            Operations <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
          <p className="careers-paragraph">Social Media Manager</p>
          <p className="careers">
            Operations <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
          <p className="careers-paragraph">Technical Sourcer</p>
          <p className="careers">
            Operations <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
        </div>
        <div>
          <h2 className="careers-side-heading">Product</h2>
          <p className="careers-paragraph">Design Engineer</p>
          <p className="careers">
            Product <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
          <p className="careers-paragraph">Product Manager</p>
          <p className="careers">
            Product <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
        </div>
        <div>
          <h2 className="careers-side-heading">Security</h2>
          <p className="careers-paragraph">
            Security Software Engineer, InfraStructure (Senior)
          </p>
          <p className="careers">
            Security <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
          <p className="careers-paragraph">
            Security Software Engineer, Privacy (Senior)
          </p>
          <p className="careers">
            Security <PiDotOutlineFill /> Menlo Park, CA <PiDotOutlineFill />{" "}
            Full time
          </p>
        </div>
        <div>
          <h2 className="careers-side-heading">Technical Staff - Engineer</h2>
          <p className="careers-paragraph">Research Engineer</p>
          <p className="careers">
            Technical Staff - Engineer <PiDotOutlineFill /> New York, NY{" "}
            <PiDotOutlineFill /> Full time
          </p>
          <p className="careers-paragraph">Research Engineer</p>
          <p className="careers">
            Technical Staff - Engineer <PiDotOutlineFill /> Menlo Park, CA{" "}
            <PiDotOutlineFill /> Full time
          </p>
        </div>
        <div>
          <h2 className="careers-side-heading">Technical Staff - ML</h2>
          <p className="careers-paragraph">Research Engineer</p>
          <p className="careers">
            Technical Staff - ML <PiDotOutlineFill /> New York, NY{" "}
            <PiDotOutlineFill /> Full time
          </p>
          <p className="careers-paragraph">Research Engineer</p>
          <p className="careers">
            Technical Staff - ML <PiDotOutlineFill /> Menlo Park, CA{" "}
            <PiDotOutlineFill /> Full time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
