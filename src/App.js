import "./App.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./components/discover";
import Create from "./components/create";
import Chat from "./components/chat";
import About from "./components/about";
import Blog from "./components/blog";
import Careers from "./components/careers";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
