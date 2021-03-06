import React from 'react';
import classes from './TopMovie.module.css';
import { Link } from 'react-router-dom'
const TopMovie = ({ image, title, releaseDate, id, urlMatch }) => {

    return (
        <div>
            <div className={classes.TopMovieContainer}>
                <Link to={`${urlMatch}Individual/${id}`}>
                    <img
                        style={{ height: '12rem', width: '8rem' }} src={image} alt='movie'></img>
                </Link>
            </div>
            <div className={classes.TopMovieName}>{title}</div>

        </div>
    );
};

export default TopMovie;