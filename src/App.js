import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./components/Demo/Demo";

function App() {
	const [show, setShow] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	console.log("APP RUNNING !!!!!");

	// const togglePara = () => {
	// 	setShow((prevState) => !prevState);
	// };
	const togglePara = useCallback(() => {
		if (allowToggle) return setShow((prevState) => !prevState);
	}, [allowToggle]);

	const allowToggling = () => {
		setAllowToggle((prevState) => !prevState);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Button onClick={allowToggling}>Allow Toggle</Button>
			<Button onClick={togglePara}>Toggle Paragraph</Button>
			<Demo show={show} />
		</div>
	);
}

export default App;
