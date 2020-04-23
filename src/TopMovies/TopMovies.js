import React, { useEffect, useContext } from 'react';
import classes from './TopMovies.module.css';
import TopMovie from './TopMovie/TopMovie';
import axios from 'axios';
import { MovieContext } from '../Context/MovieContext';
const TopMovies = () => {

    const { newestState, dispatch } = useContext(MovieContext)

    useEffect(() => {

        const getTopMovies = async () => {
            try {
                const data = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f1569140e4f4f512d0b9df93d35ae121&language=en-US&page=1')
                console.log(data)
                const editedData = data.data.results.map((x) => {
                    return {
                        id: Math.random(), image: x.poster_path, title: x.title, releaseDate: x.release_date
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

    console.log(newestState, 'newestState   ')
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
                    />
                })}


            </div>
        </>
    );
};

export default TopMovies;