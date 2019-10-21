import React from "react";
import "./style.css";

function ActorCard(props) {
	return (
		<div onClick={() => props.handleSelect(props.id)} className="card select">
			<div className="img-container">
				<img alt={props.name} src={props.image} />
			</div>
		</div>
	);
}

export default ActorCard;
