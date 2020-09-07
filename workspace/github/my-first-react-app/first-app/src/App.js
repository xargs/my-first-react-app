import React from 'react';
import rockImage from './rock.jpg';
import paperImage from './paper.jpg';
import scissorsImage from './scissors.jpg';
import './App.css';

const PlayerCard = ({color, symbol})=> {
	const style = {
		backgroundColor: color,
		backgroundImage: "url(http://storage.js-craft.io/examples/rps/" + symbol + ".png"
	}
	return(
		<div style = {style} className="player-card">
		</div>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.symbols = ["rock" , "paper", "scissors"]
		this.state = {}
	}

	decideWinner = ()=> {
		const {playerBlue, playerRed} = this.state
		if(playerRed == playerBlue) {
			return "It's a draw !"
		}
		if((playerRed==="rock" && playerBlue==="scissors") ||
			(playerRed==="paper" && playerBlue==="rock") ||
			(playerRed==="scissors" && playerBlue==="paper")) {
			return "Red player wins !"
		}
		return "Blue player wins !"
	}

	runGame = () => {
		let counter = 0
		let myInterval = setInterval(() => {
			counter++
			this.setState({
				playerRed: this.symbols[Math.floor(Math.random()*3)],
				playerBlue: this.symbols[Math.floor(Math.random()*3)],
				winner: ""
			})
			if(counter > 20) {
				clearInterval(myInterval)
				this.setState({winner: this.decideWinner()})
			}
		},100)
	}

	render() {
		return (
			<div className="App">
				<PlayerCard
					color="red"
					symbol={this.state.playerRed}   />
				<PlayerCard
					color="blue"
					symbol={this.state.playerBlue}   />
				<p>{this.state.winner}</p>
				<button onClick={this.runGame}>Run game</button>
			</div>
		);
	}
}



export default App;
