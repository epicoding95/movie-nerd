import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopMovies from '../TopMovies/TopMovies';
import classes from './HomePage.module.css';
const HomePage = (props) => {
    console.log(props, 'home page')
    return (
        <div className={classes.HomePageContainer}>
            <SearchBar />
            <TopMovies />
        </div>
    );
};

export default HomePage;