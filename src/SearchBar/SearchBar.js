import React, { useEffect, useContext, useState } from 'react';
import classes from './SearchBar.module.css';
import TextField from '@material-ui/core/TextField';
import { MovieContext } from '../Context/MovieContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
const SearchBar = () => {
    let history = useHistory();
    const { newestState, dispatch } = useContext(MovieContext)
    const [userInput, setUserInput] = useState('')
    const [backDrop, setBackDrop] = useState([])
    const [spinnerIcon, setSpinnerIcon] = useState(false)
    const [changeDrop, setChangeDrop] = useState(['/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg'])
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

    useEffect(() => {
        const getRandomBackdrop = async () => {
            setSpinnerIcon(false)
            const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)

            const filteredData = data.data.results.map((image) => {
                return image.backdrop_path

            })
            setSpinnerIcon(false)
            setBackDrop(filteredData)
            // setChangeDrop(filteredData)
        }
        getRandomBackdrop()
        return () => clearInterval(interval)
    }, [])

    const interval = setInterval(() => {
        setChangeDrop(backDrop)
    }, 10000)

    return (
        <>
            <div
                className={classes.SearchBarContainer}
                style={{
                    backgroundImage: "linear-gradient(rgba(3,37,65,0.8)" + ',' + 'rgba(192,254,207,0.8))' + ',' + "url(" + "https://image.tmdb.org/t/p/w500" + changeDrop[Math.floor(Math.random() * backDrop.length)] + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'black'
                }}
            >
                {/* <div className={classes.SearchBarLabel}>Welcome</div> */}
                < div className={classes.SearchBarInfo} > Start searching to get started!</div >
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
            </div >
        </>
    );
};

export default SearchBar;
