import React from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App(props) {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <Content state={props.state} dispatch={props.dispatch} />
      </div>
    </div>
  );
}

export default App;
