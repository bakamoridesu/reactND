import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
  state = {
	  enteredText: ''
  }
  updateText = (event) => {
	  this.setState({
		  enteredText: event.target.value.trim()
	  })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
			type="text" 
			value={this.state.enteredText}
			onChange={this.updateText}
			placeholder="Say Something" />
          <p className="echo">Echo:</p>
          <p>{this.state.enteredText}</p>
        </div>
      </div>
    );
  }
}

export default App;
