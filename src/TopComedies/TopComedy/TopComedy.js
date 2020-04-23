import React from 'react';
import classes from './TopComedy.module.css';
import { Link } from 'react-router-dom'
const TopMovie = ({ image, title, releaseDate }) => {
    return (
        <div>
            <div className={classes.TopComedyContainer}>
                <Link to='/IndividualMovie'>
                    <img style={{ height: '12rem', width: '8rem' }} src={image} alt='movie'></img>
                </Link>
            </div>
            <div className={classes.TopComedyName}>{title}</div>

        </div>
    );
};

export default TopMovie;