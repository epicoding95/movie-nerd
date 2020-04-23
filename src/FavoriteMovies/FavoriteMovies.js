import React, { useCallback, useContext } from 'react';
import classes from './FavoriteMovies.module.css';
import { MovieContext } from '../Context/MovieContext';
import SearchedMovie from './SearchedMovie/SearchedMovie';

//should be called searched movies but :(
const FavoriteMovies = () => {
    const { newestState, dispatch } = useContext(MovieContext)
    console.log(newestState, 'favorite movies')


    return (
        <div className={classes.FavoriteMoviesContainer}>
            {newestState.searchedMovies.map((movie) => {
                return <SearchedMovie
                    key={Math.random()}
                    image={'https://image.tmdb.org/t/p/w500' + movie.image}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    overView={movie.overView}
                />
            })}

        </div>
    );
};

export default FavoriteMovies;