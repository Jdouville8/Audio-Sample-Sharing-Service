import React from "react";
import { InlineWidget } from "react-calendly";

function Lessons() {
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
			}}>
			<InlineWidget
				styles={{
					height: "650px",
				}}
				url="https://calendly.com/backleftmusic"
			/>
		</div>
	);
}

export default Lessons;
