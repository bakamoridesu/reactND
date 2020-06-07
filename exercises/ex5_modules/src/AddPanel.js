import React, {Component} from 'react';
import PropTypes from 'prop-types'

class AddPanel extends Component {
	state = {
		value: ''
	}
	
	static propTypes = {
		addItem: PropTypes.func.isRequired
	}
	
	setValue = (value) => {
		this.setState({ value: value });
	}
	
	handleChange = event => {
		this.setValue(event.target.value);
	}
	
	clearValue = () => {
		this.setValue('')
	}
	
	inputIsEmpty = () => {
		return this.state.value === '';
    };
	
	addItem = event => {
		event.preventDefault();
		this.props.addItem(this.state.value);
		this.clearValue();
    };
  
	render(){
		return(
			<form onSubmit={this.addItem}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button disabled={this.inputIsEmpty()}>Add</button>
			</form>
		)
	}
}

export default AddPanel;