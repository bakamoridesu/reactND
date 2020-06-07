import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component{
	state = {
		firstName: '',
		lastName: '',
		username: '',
		userExists: false
	}
	changeFirstName = (event) => {
		this.setState({
			firstName: event.target.value
		})
	}
	
	changeLastName = (event) => {
		this.setState({
			lastName: event.target.value
		})
	}
	
	changeUsername = (event) => {
		this.setState({
			username: event.target.value,
			userExists: false
		})
	}
	
	userExists = (username) => {
		return this.props.userExists(username)
	}
	
	clearFields = () => {
		this.setState({
			firstName: '',
			lastName: '',
			username: '',
			userExists: false
		})
	}
	
	addUser = (event) => {
		event.preventDefault();
		if(!this.userExists(this.state.username)){
			const user = {firstName: this.state.firstName, lastName:this.state.lastName, username:this.state.username, gamesCount:0}
			this.props.addUser(user);
			this.clearFields();
		} else {
			this.setState({
				userExists: true
			})
		}
	}
	render(){
		
		const errorMessage = this.state.userExists ? `Error: ${this.state.username} already exists!` : ''
		return (
		  <div>
			<form onSubmit={this.addUser}>
				<div><input type='text' placeholder='First name' value={this.state.firstName} onChange={this.changeFirstName}/></div>
				<div><input type='text' placeholder='Last name' value={this.state.lastName} onChange={this.changeLastName}/></div>
				<div><input type='text' placeholder='Username' value={this.state.username} onChange={this.changeUsername}/></div>
				<div>
					<button className='largeButton'> Add User </button><span className='error'>{errorMessage}</span>
				</div>
			</form>
		  </div>
		)
	}
}

export default InputForm;