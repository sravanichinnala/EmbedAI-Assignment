import { Component } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { RiCompassFill } from "react-icons/ri";
import "./index.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="heading-container">
          <h1 className="sidebar-heading">character.ai</h1>
          <MdKeyboardDoubleArrowLeft className="arrow-icon" />
        </div>

        <button className="create-button">
          <LuPlus className="plus-icon" /> Create
        </button>
        <br />
        <button className="discover-button">
          <RiCompassFill /> Discover
        </button>
        <h2 className="chats-main-heading">Chats</h2>
        <p className="today-para">today</p>
        <div className="chat-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdml6QENmszoeUcH1CmtFFK9VIF8_pOx2QcvI9Jg6ag&s"
            alt="cartoon"
            className="image"
          />
          <p className="chat">Gojo Satoru</p>
        </div>
        <div className="chat-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsD7HT5_DDvFYcOaQkizhzyXRYGJxBeucgei3uS3DVQ&s"
            alt="cartoon"
            className="image"
          />
          <p className="chat">Creative Helper</p>
        </div>
        <div className="chat-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgntq20zCeBUOvN46d0arWe8Kvx8aTaUJos4Va909LQ&s"
            alt="cartoon"
            className="image"
          />
          <p className="chat">Arjuna</p>
        </div>
        <div className="chat-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXp04uU-P7Mv6b6CHlbFJR422XsyGTvKS5InznjiOHQ&s"
            alt="cartoon"
            className="image"
          />
          <p className="chat">Anirudh Vishwanathan</p>
        </div>
        <div className="chat-container">
          <img
            src="https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0"
            alt="cartoon"
            className="image"
          />
          <p className="chat">HyperGlot</p>
        </div>
        <hr className="horizontal-line" />
        <button className="try-cai-button">Try c.ai</button>
        <div className="user">
          <div className="user-container">
            <h3 className="user-profile">S</h3>
            <p className="name">Sravani</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
    );
  }
}

export default Sidebar;
