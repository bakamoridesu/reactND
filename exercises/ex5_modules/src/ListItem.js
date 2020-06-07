import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component{
	static propTypes = {
		keyProp: PropTypes.number.isRequired,
		value: PropTypes.string.isRequired
	}
	render (){
		return (
			<li key={this.props.keyProp}>{this.props.value}</li>
		)
	}
}

export default ListItem;