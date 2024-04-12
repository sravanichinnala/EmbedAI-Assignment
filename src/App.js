import "./App.css";
import { Component } from "react";

import Discover from "./components/discover";
import Create from "./components/create";
import Chat from "./components/chat";
import About from "./components/about";
class App extends Component {
  render() {
    return (
      <>
        <Discover />
        <Create />
        <Chat />
        <About />
      </>
    );
  }
}

export default App;
