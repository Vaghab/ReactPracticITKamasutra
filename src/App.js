import React from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<div className="app__wrapper">
				<Header></Header>
				<Navbar></Navbar>
				<Content></Content>
			</div>
		</div>
	);
}

export default App;
