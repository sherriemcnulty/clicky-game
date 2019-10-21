import React from "react";
import "./style.css";

function ScoreBox(props) {
	return (
		<p className="scorebox ">
			Score: {props.score} - Best Score: {props.bestScore}
			{props.message}
		</p>
	);
}

export default ScoreBox;
