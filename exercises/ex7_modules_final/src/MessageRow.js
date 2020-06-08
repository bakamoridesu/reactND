import React, {Component} from 'react';

class MessageRow extends Component{
	
	render(){
		const {index, message, username} = this.props
		return(
			<li
                  key={index}
                  className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
            </li>
		)
	}
}

export default MessageRow;