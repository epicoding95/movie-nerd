import React, { useEffect, useContext } from 'react';
import classes from './FavoriteMovies.module.css';
import { MovieContext } from '../Context/MovieContext';
import SearchedMovie from './SearchedMovie/SearchedMovie';
import { useHistory } from 'react-router-dom';
//should be called searched movies but :(
const FavoriteMovies = () => {
    const { newestState, dispatch } = useContext(MovieContext)
    let history = useHistory();
    const images = { src: '../assets/images/nologo.png' }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={classes.FavoriteMoviesContainer}>
            <h1></h1>
            <button className={classes.FavoriteMoviesButton} onClick={() => history.push('/')}>Home Page</button>

            {newestState.searchedMovies.map((movie) => {
                return <SearchedMovie
                    key={Math.random()}
                    image={'https://image.tmdb.org/t/p/w500' + movie.image}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    overView={movie.overView}
                    howMany={newestState.searchedMovies.length}
                />
            })}

        </div>
    );
};

export default FavoriteMovies;