import React, { memo } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopMovies from '../TopMovies/TopMovies';
import classes from './HomePage.module.css';
import TopComedies from '../TopComedies/TopComedies';
const HomePage = (props) => {
    const urlMatch = props.computedMatch.url
    return (
        <div className={classes.HomePageContainer}>
            <SearchBar urlMatch={urlMatch} />
            <TopMovies urlMatch={urlMatch} />
            <TopComedies urlMatch={urlMatch} />
        </div>
    );
};

export default HomePage;