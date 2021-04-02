import React from "react";
import { InlineWidget } from "react-calendly";

function Lessons() {
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
			}}>
			<InlineWidget url="https://calendly.com/seff0" />
		</div>
	);
}

export default Lessons;
