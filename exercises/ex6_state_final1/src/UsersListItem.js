import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UsersListItem extends Component{
	render(){
		const gamesInfo = this.props.showGames ? `played ${this.props.user.gamesCount} games` : ''
		const value = `${this.props.user.firstName} ${this.props.user.lastName} ${gamesInfo}`
		return(
			<li key={this.props.user.username}> {value} </li>
		)
	}
}

export default UsersListItem;