import React, { Component } from "react";
import "./App.css";
import LightContainer from "./LightContainer";
import CounterContainer from "./CounterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Connect React and Redux</header>
        <LightContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
