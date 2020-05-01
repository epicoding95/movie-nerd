import React, { } from 'react';
import classes from './SearchedMovie.module.css';
import NoLogo from '../../assets/images/nologo.png'

const SearchedMovie = ({ image, title, releaseDate, overView, mediaType }) => {

    if (image.toString().includes('null')) {
        image = NoLogo
    }
    let overview;
    if (overView) {
        overview = overView.slice(0, 150)
    }
    let movieCount = 0;
    let tvCount = 0;
    let personsCount = 0;
    const mediaTypes = localStorage.getItem('mediaTypes')
    if (mediaTypes === 'movie') {
        localStorage.setItem('movieCount', mediaTypes)
    } else if (mediaType === 'tv') {
        tvCount++
    } else if (mediaType === 'person') {
        personsCount++
    }
    return (
        <>
            <div className={classes.SearchedMoviesDetails}>
                <div className={classes.SearchedResultsTitle}>Searched Results</div>
                <div className={classes.SearchedResultsInfo}>Movies <div style={{ backgroundColor: 'lightgray', width: '18px', height: '18px', borderRadius: '5px', paddingLeft: '8px' }}>{localStorage.getItem('movies')}</div></div>
                <div className={classes.SearchedResultsInfo}>TV Shows <div style={{ backgroundColor: 'lightgray', width: '18px', height: '18px', borderRadius: '5px', paddingLeft: '8px' }}>{localStorage.getItem('tvShows')}</div></div>
                <div className={classes.SearchedResultsInfo}>Persons <div style={{ backgroundColor: 'lightgray', width: '18px', height: '18px', borderRadius: '5px', paddingLeft: '8px' }}>{localStorage.getItem('persons')}</div></div>
            </div>

            <div className={classes.SearchedMovieContainer}>
                <div className={classes.SearchedMovieImage}>
                    <img style={{ width: '5rem', height: '10.3rem', borderRadius: '5px' }}
                        alt='no image'
                        src={image}>
                    </img>
                </div>
                <div className={classes.SearchedMovieTitle}>{title}</div>
                <div className={classes.SearchedMovieDate}>{releaseDate}</div>
                <div className={classes.SearchedMovieOverView}>{overview}...</div>
            </div>
        </>
    );
};

export default SearchedMovie;