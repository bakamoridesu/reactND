import React, {Component} from 'react';

class MessageHistory extends Component{
	
	render(){
		const {message, username} = this.props
		return(
			<ul className="message-list">
				{this.props.messages.map((message, index) => (
					<li
						key={index}
						className={
							message.username === this.props.username ? 'message sender' : 'message recipient'
						}
					>
						  <p>{`${message.username}: ${message.text}`}</p>
					</li>
				))}
            </ul>
			
		)
	}
}

export default MessageHistory;