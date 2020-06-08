import React, {Component} from 'react';
import InputPanel from './InputPanel.js';
import MessageRow from './MessageRow.js';

class ChatWindow extends Component{
	
	render(){
		return(
		   <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
				  <MessageRow index={index} message={message} username={this.props.username}/>
              ))}
            </ul>

			<InputPanel addMessage={this.props.addMessage} username={this.props.username}/>
          </div>
		)
	}
}

export default ChatWindow;