import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UsersListItem from './UsersListItem.js';

class UsersList extends Component{
	state = {
		showGames: true
	}
	toggleGames = () => {
		this.setState((prevState) => ({
			showGames: prevState.showGames === false
		}))
	}
	render(){
		console.log(this.props.users.length)
		return (
			<div>
				<div>
					{this.props.users.length>0
					? (
					   <div>
					   <h1> Users List </h1>
						<button className='largeButton' onClick={this.toggleGames}>
							{this.state.showGames ? 'Hide' : 'Show'} number of games played
						</button>
					   </div>
					)
					:''}
				</div>
				<ul>
				{this.props.users.map(user => {
					return <UsersListItem user={user} showGames={this.state.showGames}/>
				})}
				</ul>
			</div>
		)
	}
}

export default UsersList;