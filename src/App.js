import React, { Component } from "react";
import actors from "./actors.json";
import ActorCard from "./components/ActorCard";
import Navbar from "./components/Navbar";
import Subtitle from "./components/Subtitle";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";

// Import underscore library for the shuffle function.
import _ from "underscore";

class App extends Component {
	// Setting this.state.actors to the actors json array
	state = {
		actors,
		score: 0,
		bestScore: 0,
		message: " - Begin!",
		instructions:
			"Click the cards to earn points, but try not to select the same card twice.If you do, you will have to start over with a score of 0.",
		selected: []
	};

	handleSelect = id => {
		let newScore = this.state.score;
		let bestScore = this.state.bestScore;
		let selected = this.state.selected;
		let message = "";

		// IF not already selected, update scores & message
		if (selected.indexOf(id) < 0) {
			message = "";
			newScore++;

			if (newScore === 12) {
				bestScore = 0;
				newScore = 0;
				message = " - You Won!";
			}
			if (newScore > bestScore) {
				bestScore = newScore;
			}
			// Push new id onto the'selected' array
			this.state.selected.push(id);
		} else {
			newScore = 0;
			selected = [];
			message = " - Already selected!";
		}

		// update state
		this.setState({
			score: newScore,
			bestScore: bestScore,
			message: message,
			selected: selected,
			instructions:
				"Click the cards to earn points, but try not to select the same card twice.If you do, you will have to start over with a score of 0.",
			actors: _.shuffle(actors)
		});
	};

	// Map over this.state.actors and render a ActorCard component for each actor object
	render() {
		return (
			<Wrapper>
				<Navbar>
					<h1>
						<img
							src={require("./images/thrones_brand.png")}
							alt="Clicky Game Games of Thrones Theme"
							width="50%"
						/>
					</h1>

					<ScoreBoard
						score={this.state.score}
						bestScore={this.state.bestScore}
						message={this.state.message}
					/>
					<Subtitle>{this.state.instructions}</Subtitle>
				</Navbar>
				{this.state.actors.map(actor => (
					<ActorCard
						handleSelect={this.handleSelect}
						id={actor.id}
						key={actor.id}
						name={actor.name}
						image={actor.image}
						actor={actor.actor}
					/>
				))}
			</Wrapper>
		);
	}
}

export default App;
