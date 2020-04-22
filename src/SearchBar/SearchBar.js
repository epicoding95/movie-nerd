import React from 'react';
import classes from './SearchBar.module.css';
import TextField from '@material-ui/core/TextField';

const SearchBar = () => {
    return (
        <div className={classes.SearchBarContainer}>
            <div className={classes.SearchBarLabel}>Welcome</div>
            <div className={classes.SearchBarInfo}>Start searching below to get started!</div>
            <input className={classes.InputField} placeholder='search for your favorite movies..' />
            <input type='submit' className={classes.Button} />
        </div>
    );
};

export default SearchBar;