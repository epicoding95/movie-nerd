import React from 'react';
import classes from './TopMovie.module.css';
const TopMovie = (props) => {
    return (
        <div>
            <div className={classes.TopMovieContainer}></div>
            <div className={classes.TopMovieName}>movie name</div>
            <div className={classes.TopMovieRelease}> movie release date</div>
        </div>
    );
};

export default TopMovie;