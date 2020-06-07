import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DeletePanel extends Component{
	static propTypes = {
		onDelete: PropTypes.func.isRequired,
		itemsFound: PropTypes.bool.isRequired
	}
	render() {
		return(
			<button onClick={this.props.onDelete} disabled={this.props.itemsFound()}>
			    Delete Last Item
			</button>
		)
	}
}

export default DeletePanel;