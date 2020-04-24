import React, { useEffect, useContext } from 'react';
import classes from './TopMovies.module.css';
import TopMovie from './TopMovie/TopMovie';
import axios from 'axios';
import { MovieContext } from '../Context/MovieContext';
import { useHistory, useLocation } from 'react-router-dom';
const TopMovies = ({ urlMatch }) => {
    const history = useHistory()

    const { newestState, dispatch } = useContext(MovieContext)
    useEffect(() => {
        const getTopMovies = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                console.log(data, 'all data top movies')
                const editedData = data.data.results.map((x) => {
                    return {
                        id: x.id, image: x.poster_path, title: x.title, releaseDate: x.release_date
                    }
                })
                console.log(editedData, 'editedData')
                dispatch({ type: 'ADD_TOP_MOVIES', payload: { topMovies: editedData } })
            }
            catch (err) {
                console.log(err, 'error in api call')
            }

        }
        getTopMovies();
    }, [dispatch])


    return (
        <>
            <div className={classes.TopMoviesLabel}>Top Movies</div>
            <div className={classes.TopMoviesContainer}>


                {newestState.topMovies.map(movie => {
                    return <TopMovie
                        key={Math.random()}
                        id={movie.id}
                        image={'https://image.tmdb.org/t/p/w500' + movie.image}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        urlMatch={urlMatch}
                    />
                })}


            </div>
        </>
    );
};

export default TopMovies;