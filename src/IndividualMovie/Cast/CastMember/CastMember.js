import React from 'react';
import classes from './TopMovie.module.css';
import { Link } from 'react-router-dom'
const CastMember = () => {


    return (
        <div>
            <div className={classes.TopMovieContainer}>
                <Link to={`${urlMatch}Individual/${id}`}>
                    <img

                        style={{ height: '12rem', width: '8rem' }} src={image} alt='actor image'></img>
                </Link>
            </div>
            <div className={classes.TopMovieName}>{title}</div>

        </div>
    );
};

export default CastMember;