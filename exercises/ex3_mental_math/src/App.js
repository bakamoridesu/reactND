import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard.js';
import ScoreBoard from './ScoreBoard.js';

class App extends Component {
  // state of entire game is its score.
  state = {
	numQuestions: 0,
	numCorrect: 0,
	gameOver: false,
	gameResult: ''
  }
  /*
  score is updated based on two parameters: 
	1. button pressed           (true or false) 
    2. correct answer displayed (true or false)
	if they are equal, i.e true===true or false===false, which is quite logical,
	add +1 to correct answer.
	number of questions is incremented on every state update iteration.
  */
  updateScore = (button_pressed, is_true) => {
		this.setState((currentState) => ({
			numQuestions: currentState.numQuestions + 1,
			win: (currentState.numCorrect + ((button_pressed === String(is_true)) ? 1 : 0) > 2) ? 'win':'lost',
			numCorrect: currentState.numCorrect + ((button_pressed === String(is_true)) ? 1 : 0),
			gameResult: `Your result: ${currentState.numCorrect + ((button_pressed === String(is_true)) ? 1 : 0)}/5`,
			gameOver: (currentState.numQuestions === 4) ? true: false
		}))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		  {this.state.gameOver? (
		    <div>
			   <h1> You {this.state.win} </h1>
		       <h2> {this.state.gameResult} </h2>
			</div>
		  ) : (
		    <div className="game">
			  <h2>Mental Math</h2>
			  <GameBoard updateScore={this.updateScore}/>
			  <ScoreBoard numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
			</div>
		  )}
      </div>
    );
  }
}

export default App;
