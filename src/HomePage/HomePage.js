import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopMovies from '../TopMovies/TopMovies';
import classes from './HomePage.module.css';
const HomePage = (props) => {
    return (
        <div className={classes.HomePageContainer}>
            <SearchBar />
            <TopMovies />
        </div>
    );
};

export default HomePage;