import React, {Component} from 'react';

class InputPanel extends Component{
	state = {
		message: ''
	}
	
	isDisabled = () => {
		return this.state.message === '' ? true : false;
	}
	
	sendMessage = (event) => {
		event.preventDefault();
		this.props.addMessage({username: this.props.username, text: this.state.message});
		this.setMessage('')
	}

	setMessage = (newMessage) => {
		this.setState({
			message: newMessage
		})
	}
	changeMessage = (event) => {
		this.setMessage(event.target.value)
	}
	render(){
		return(
			<div>
              <form className="input-group" onSubmit={this.sendMessage}>
                <input 
					type="text" 
					className="form-control" 
					placeholder="Enter your message..." 
					onChange={this.changeMessage}
					value={this.state.message}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
		)
	}
}

export default InputPanel;