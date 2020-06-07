import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.js'

class ShowItemsPanel extends Component{
	static propTypes = {
		items: PropTypes.array.isRequired
	}
	render(){
		return(
		  <div>
		    <p className="items">Items</p>
			<ol className="item-list">
				{this.props.items.map((item, index) => 
					<ListItem keyProp={index} value = {item} />
				)}
			</ol>
		  </div>
		)
	}
}

export default ShowItemsPanel;