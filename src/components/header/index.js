import "./index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="logo-container" onClick={navigateToHome}>
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
};

export default Header;
