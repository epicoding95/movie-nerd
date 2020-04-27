import React, { useEffect, useContext, useState } from 'react';
import classes from './SearchBar.module.css';
import TextField from '@material-ui/core/TextField';
import { MovieContext } from '../Context/MovieContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const SearchBar = () => {
    let history = useHistory();
    const { newestState, dispatch } = useContext(MovieContext)
    const [userInput, setUserInput] = useState('')
    const handleClick = async () => {

        try {

            const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en&query=${userInput}`)
            console.log(data, 'searched ata ib search bar')
            const cleanedData = data.data.results.map((movie) => {
                return {
                    image: movie.poster_path, title: movie.original_title, releaseDate: movie.release_date, overView: movie.overview
                }
            })
            dispatch({ type: 'ADD_SEARCHED_MOVIES', payload: { searchedMovies: cleanedData } })
            history.push('/FavoriteMovies')

        } catch (err) {
            console.log(err, 'error in fetch event')
        }
    }

    return (
        <div className={classes.SearchBarContainer}>
            {/* <div className={classes.SearchBarLabel}>Welcome</div> */}
            <div className={classes.SearchBarInfo}>Start searching to get started!</div>
            <div className={classes.InputContainer}>
                <input
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    className={classes.InputField} placeholder='search for your favorite movies..'
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            handleClick()
                        }
                    }}
                />

                <input onClick={handleClick} value='Search' type='button' className={classes.Button} />
            </div>
        </div>
    );
};

export default SearchBar;