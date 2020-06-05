import React, {Component} from 'react';

class ScoreBoard extends Component{
	render(){
		return(
			<p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
			</p>
		)
	}
}

export default ScoreBoard;