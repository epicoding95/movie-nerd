import React, { useEffect, useContext, useState } from 'react';
import classes from './SearchBar.module.css';
import TextField from '@material-ui/core/TextField';
import { MovieContext } from '../Context/MovieContext';
import axios from 'axios';
const SearchBar = () => {
    const { newestState, dispatch } = useContext(MovieContext)
    const [userInput, setUserInput] = useState('')
    const handleClick = async (e) => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en&query=${userInput}`)
            const cleanedData = data.data.results.map((movie) => {
                return {
                    image: movie.poster_path, title: movie.original_title, releaseDate: movie.release_date, overView: movie.overview
                }
            })
            console.log(cleanedData, 'cleaned')
            dispatch({ type: 'ADD_SEARCHED_MOVIES', payload: { searchedMovies: cleanedData } })
        } catch (err) {
            console.log(err, 'error in fetch event')
        }
    }

    console.log(newestState, 'newests state')
    return (
        <div className={classes.SearchBarContainer}>
            <div className={classes.SearchBarLabel}>Welcome</div>
            <div className={classes.SearchBarInfo}>Start searching below to get started!</div>
            <input
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                className={classes.InputField} placeholder='search for your favorite movies..' />
            <input onClick={handleClick} type='submit' className={classes.Button} />
        </div>
    );
};

export default SearchBar;