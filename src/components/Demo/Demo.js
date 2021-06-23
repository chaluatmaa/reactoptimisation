import React, { memo } from "react";
import MyPara from "./MyPara";

const Demo = (props) => {
	console.log("DEMO");

	return (
		<MyPara>{props.show ? "Ww have to change the Paragraph" : null}</MyPara>
	);
};

export default memo(Demo);
