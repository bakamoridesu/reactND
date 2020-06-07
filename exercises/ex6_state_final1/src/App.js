import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './InputForm.js';
import UsersList from './UsersList.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
	
  state = {
	  users: []
  } 
  userExists = (username) => {
	  let result = false;
	  for (const user of this.state.users) {
		  if (user.username === username) result = true;
	  };
	  return result;
  }
  addUser = (user) => {
	  console.log('adding user...');
	  console.log(user);
	  this.setState((prevState) => ({
		  users: [...prevState.users, user]
	  }))
  }
  render() {
	
	const users = this.state.users
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<InputForm addUser={this.addUser} userExists={this.userExists}/>
		<UsersList users={users}/>
      </div>
    );
  }
}
export default App;
