import React, { Component } from 'react';
import LikedMovie from './LikedMovie.js';

class MoviesLiked extends Component {
	constructor(props){
    	super(props)
        const likesByMovie = []
        for (const movie in props.movies){
           const likes = []
           for (const profile of props.profiles){
              if(profile.favoriteMovieID === movie){
                 likes.push(props.users[profile.userID].name)
              }
           }
           likesByMovie.push({movieID: movie, movieName: props.movies[movie].name, likes: likes})
           this.likesByMovie = likesByMovie
           console.log(likesByMovie)
        }
    }
    render(){
        return (
          <div>
          {this.likesByMovie.map(likedMovie => (
          		<LikedMovie key={likedMovie.movieID} movieName={likedMovie.movieName} likes={likedMovie.likes}/>
           ))}
		  </div>
        )
    }
}

export default MoviesLiked;