import React, { useEffect } from 'react';
import classes from './SearchedMovie.module.css';
import { NoLogo } from '../../assets/images/nologo.png'

const SearchedMovie = ({ image, title, releaseDate, overView, howMany }) => {
    const images = { src: '../../assets/images/nologo.png' }

    return (
        <>

            <div className={classes.SearchedMoviesDetails}>
                <div className={classes.SearchedResultsTitle}>Searched Results</div>
                <div className={classes.SearchedResultsInfo}>Movies <div style={{ backgroundColor: 'lightgray', width: '18px', height: '18px', borderRadius: '5px', paddingLeft: '8px' }}>5</div></div>
                <div className={classes.SearchedResultsInfo}>Tv Shows <div style={{ backgroundColor: 'lightgray', width: '18px', height: '18px', borderRadius: '5px', paddingLeft: '8px' }}>5</div></div>
            </div>

            <div className={classes.SearchedMovieContainer}>
                <div className={classes.SeardhedMovieImage}>
                    <img style={{ width: '5rem', height: '8.2rem', borderRadius: '5px' }} alt='image' src={image}>
                    </img>
                </div>
                <div>{title}</div>
                <div>{releaseDate}</div>
                <div className={classes.SearchedMovieOverView}>{overView.slice(0, 150)}...</div>
            </div>
        </>
    );
};

export default SearchedMovie;