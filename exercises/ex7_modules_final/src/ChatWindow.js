import React, {Component} from 'react';
import InputPanel from './InputPanel.js';
import MessageHistory from './MessageHistory.js';

class ChatWindow extends Component{
	
	render(){
		return(
		   <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
			<MessageHistory messages={this.props.messages} username={this.props.username}/>
			<InputPanel addMessage={this.props.addMessage} username={this.props.username}/>
          </div>
		)
	}
}

export default ChatWindow;