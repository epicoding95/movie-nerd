import React from 'react';
import classes from './TopComedy.module.css';
import { Link } from 'react-router-dom'
const TopMovie = ({ image, title, releaseDate, urlMatch, id }) => {
    return (
        <div>
            <div className={classes.TopComedyContainer}>
                <Link to={`${urlMatch}Individual/${id}`}>
                    <img style={{ height: '12rem', width: '8rem' }} src={image} alt='movie'></img>
                </Link>
            </div>
            <div className={classes.TopComedyName}>{title}</div>

        </div>
    );
};

export default TopMovie;