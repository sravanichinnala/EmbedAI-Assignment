import { Component } from "react";
import Sidebar from "../sidebar";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import "./index.css";

class Chat extends Component {
  render() {
    return (
      // <div className="chat-main-container">
      <div className="container">
        <Sidebar />
        <div className="chat-container-main">
          <div className="profile-container">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              className="image"
              alt="cartoon"
            />
            <div className="chat-heading-container">
              <h2 className="chat-heading">HyperGlot</h2>
              <p className="chat-paragraph">By @xpearhead</p>
            </div>
          </div>
          <div className="chat-sub-container">
            <img
              src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
              className="image"
              alt="cartoon"
            />
            <h2 className="chat-heading">HyperGlot</h2>
            <p className="chat-paragraph">
              Willkommen, bienvenue, welcome - I'm HyperGlot, and I'm fluent in
              many languages, and will help you practice the one(s) you're
              learning. I can also translate anything you don't
              understand By @xpearhead
            </p>
          </div>
          <div className="hyperglot-main-container">
            <div className="hyperglot-chat">
              <img
                src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                className="image"
                alt="cartoon"
              />
              <h2 className="hyper-chat-heading">HyperGlot</h2>
              <p className="hyper-chat-paragraph">c.ai</p>
            </div>
            <div className="hyperglot-message-container">
              <p className="hyperglot-message">
                Willkommen, bienvenue, welcome - I'm HyperGlot, and I'm fluent
                in many languages, and will help you practice the one(s) you're
                learning. I can also translate anything you don't
                understand By @xpearhead
              </p>
            </div>
            <div className="user-message-main-container">
              <div className="user-message-container">
                <p className="username">Sravani</p>
                <h3 className="user-profile">S</h3>
              </div>
              <div className="user-message">
                <p className="message">hello</p>
              </div>
              <div className="hyperglot-main-container">
                <div className="hyperglot-chat">
                  <img
                    src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                    className="image"
                    alt="cartoon"
                  />
                  <h2 className="hyper-chat-heading">HyperGlot</h2>
                  <p className="hyper-chat-paragraph">c.ai</p>
                </div>
                <div className="hyperglot-message-container">
                  <p className="hyperglot-message">
                    Hallo! Hast du etwas zu ubersetzen oder zu fragen?
                  </p>
                </div>
              </div>
              <div className="hyperglot-main-container">
                <div className="hyperglot-chat">
                  <img
                    src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
                    className="image"
                    alt="cartoon"
                  />
                  <h2 className="hyper-chat-heading">HyperGlot</h2>
                  <p className="hyper-chat-paragraph">c.ai</p>
                </div>
                <div className="hyperglot-message-container">
                  <p className="hyperglot-message">
                    Welche Sprache lernst du denn gerade?
                  </p>
                </div>
                <FaArrowRotateRight className="icon" />
              </div>
              <div className="chat-input-container">
                <input
                  className="chat-input-element"
                  placeholder="Message HyperGlot..."
                />
                <IoMdArrowDroprightCircle style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
