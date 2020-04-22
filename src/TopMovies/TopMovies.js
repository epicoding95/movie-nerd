import React from 'react';
import classes from './TopMovies.module.css';
import TopMovie from './TopMovie/TopMovie';
import axios from 'axios'
const TopMovies = () => {


    return (
        <div className={classes.TopMoviesContainer}>
            <p className={classes.TopMoviesLabel}>Top Movies label</p>
            <TopMovie />

        </div>
    );
};

export default TopMovies;