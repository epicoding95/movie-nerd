import React from 'react';
import classes from './SearchedMovie.module.css';
const SearchedMovie = ({ image, title, releaseDate, overView }) => {
    return (
        <div className={classes.SearchedMovieContainer}>
            <div className={classes.SeardhedMovieImage}>
                <img style={{ width: '5rem', height: '8.1rem', borderRadius: '5px' }} alt='image' src={image}>
                </img>
            </div>
            <div>{title}</div>
            <div>{releaseDate}</div>
            <div className={classes.SearchedMovieOverView}>{overView.slice(0, 150)}...</div>
        </div>
    );
};

export default SearchedMovie;