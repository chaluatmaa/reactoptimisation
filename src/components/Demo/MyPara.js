import React from "react";

const MyPara = (props) => {
	console.log("My Para running");

	console.log("DEMO");

	return <p>{props.children}</p>;
};

export default MyPara;
