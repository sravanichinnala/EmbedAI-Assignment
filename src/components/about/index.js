import { Component } from "react";
import Header from "../header";
import "./index.css";
class About extends Component {
  render() {
    return (
      <div className="about-main-container">
        <Header />
        <div className="about-container">
          <h1 className="about-heading">character.ai</h1>
          <p className="about-paragraph">
            Personalized AI for every moment of your day
          </p>
          <img
            src="https://character.ai/_next/image?url=https%3A%2F%2Fcharacterai.io%2Fstatic%252Fabout-images%252Fimage%25202337.png&w=1080&q=75"
            alt="about"
            className="about-image"
          />
          <h2 className="about-heading">About us</h2>
          <p className="about-para">
            Character Technologies, Inc. is based in Menlo Park, CA. We were
            founded by AI pioneers Noam Shazeer and Daniel De Freitas, and we
            make one of the world’s leading personal AI platforms, Character.AI.
            In 2023, Character.AI was named Google Play's AI App of the Year.
            Our mission is to empower everyone with Artificial General
            Intelligence (AGI).
          </p>
          <div className="learn-button-container">
            <button className="about-button">Learn more</button>
            <button className="about-button">In the News</button>
          </div>
          <div className="about-images-container">
            <img
              src="https://character.ai/_next/image?url=https%3A%2F%2Fcharacterai.io%2Fstatic%252Fabout-images%252FFrame%252013.jpg&w=640&q=75"
              alt="about"
            />
            <div className="images-container">
              <img
                src="https://character.ai/_next/image?url=https%3A%2F%2Fcharacterai.io%2Fstatic%252Fabout-images%252Fimage%25203533.jpg&w=640&q=75"
                alt="about"
              />
              <img
                src="https://character.ai/_next/image?url=https%3A%2F%2Fcharacterai.io%2Fstatic%252Fabout-images%252Fimage%25203535.jpg&w=640&q=75"
                alt="about"
              />
            </div>
            <img
              src="https://character.ai/_next/image?url=https%3A%2F%2Fcharacterai.io%2Fstatic%252Fabout-images%252Fimage%25202349.jpg&w=640&q=75"
              alt="about"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
