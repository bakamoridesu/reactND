import React, {Component} from 'react';

class LikedMovie extends Component {
	render(){
        const {movieName, likes} = this.props
    	return(
        	<div>	
              <h2>{movieName}</h2>
                {likes.length === 0 ? (
          			
                  	<p> None of the current users liked this movie </p>
         			):(
          			<div>
          			<p> Liked by: </p>
          			<ul>
                    	{
          					likes.map( like => (
          						<li key = {like}>{like}</li>
        					))
          				}
  					</ul>
					</div>
        			)
                }
            </div>
        )
    }
}

export default LikedMovie;