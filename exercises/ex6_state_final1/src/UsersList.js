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
		return (
			<div>
			    <div>
					<span> Users List </span><button className='smallButton' onClick={this.toggleGames}>Show</button>
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