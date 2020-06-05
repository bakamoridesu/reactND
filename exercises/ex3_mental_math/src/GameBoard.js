import React, { Component } from 'react';

class GameBoard extends Component{
	constructor(props){
		super(props);
		const valuesArray = this.makeNewQuestion();
		this.state = {
			value1: valuesArray[0],
			value2: valuesArray[1],
			value3: valuesArray[2],
			correctAnswer: valuesArray[3],
			displayedAnswer: valuesArray[4]
		}
	}
	
	// make new question after any button click event
	makeNewQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const correctAnswer = value1 + value2 + value3;
		// wrong answer is very close to correct to make the game harder!
		const wrongAnswer = correctAnswer - Math.min(value1, value2, value3) + Math.floor(Math.random() * 50);
		// randomly set answer to correct or wrong
		const answers = [correctAnswer, wrongAnswer];
		const displayedAnswer = answers[Math.floor(Math.random()*2)];
		return [value1, value2, value3, correctAnswer, displayedAnswer];
	}
	
	// update state with the new question 
	updateState = (newValuesArray) => {
		this.setState({
			value1: newValuesArray[0],
			value2: newValuesArray[1],
			value3: newValuesArray[2],
			correctAnswer: newValuesArray[3],
			displayedAnswer: newValuesArray[4]
		})
	}
	
	// handle button click (event)
	handleAction = event => {
		// make new question and update state
		const newValues = this.makeNewQuestion();
		this.updateState(newValues);
		this.props.updateScore(event.target.name, (this.state.correctAnswer === this.state.displayedAnswer));
	}
	
	render(){
		return(
			<div>
			  <div className="equation">
				<p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.displayedAnswer}`}</p>
			  </div>
			  <button name='true' onClick={this.handleAction}>True</button>
			  <button name='false' onClick={this.handleAction}>False</button>
			</div>
		)
	}
}

export default GameBoard;