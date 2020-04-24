import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../Context/MovieContext';
import classes from './IndividualMovie.module.css';
import axios from 'axios';
const IndividualMovie = (props) => {
    const { newestState, dispatch } = useContext(MovieContext)
    //name/title/releasedate/genre/length/plot
    console.log(props.computedMatch.params.id, 'id')
    const paramsId = props.computedMatch.params.id
    const topMovies = newestState.topMovies
    console.log(topMovies, 'top movies')
    const filtered = topMovies.find(movie => movie.id == paramsId)
    console.log(filtered, 'filtered')


    const styles = {
        background: {
            marginTop: '50px',
            width: '100 %',
            height: '60vh',
            position: 'relative',
            boxSizing: 'border-box',
            display: 'flex',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        '&:before': {
            content: `''`,
            position: 'absolute',
            backgroundImage: `linear - gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://image.tmdb.org/t/p/w500'${newestState.individualMovieDetails.logoImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: '1',
            opacity: '0.6'
        }
    }
    useEffect(() => {
        const getIndividualDetails = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            console.log(response, 'response individual')
            const filteredData = {};
            for (let key in response.data) {
                filteredData['id'] = response.data.id
                filteredData['backdropImage'] = response.data.backdrop_path
                filteredData['logoImage'] = response.data.poster_path
                filteredData['title'] = response.data.title
                filteredData['genre'] = response.data.genres[0].name
                filteredData['overview'] = response.data.overview
                filteredData['runtime'] = response.data.runtime
                filteredData['release'] = response.data.release_date
            }
            dispatch({ type: 'ADD_INDIVIDUAL_MOVIE_DETAILS', payload: { individualMovieDetails: filteredData } })
        }
        getIndividualDetails();
    }, [])

    console.log(newestState, 'neweststate individual')
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5)" + ',' + 'rgba(255,255,255,0.5))' + ',' + "url(" + "https://image.tmdb.org/t/p/w500" + newestState.individualMovieDetails.backdropImage + ")", backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: '.9',
        }}
            className={classes.IndividualMovieContainer}>
            <img
                className={classes.IndividualMovieImage}
                src={'https://image.tmdb.org/t/p/w500' + newestState.individualMovieDetails.logoImage}>
            </img>
            <div className={classes.IndividualMovieDetails}>
                <div className={classes.IndividualMovieTitle}>{newestState.individualMovieDetails.title}</div>
                <div> vote average --genreID -- movie length</div>
                <div>overview</div>
                <div className={classes.IndividualMovieRelease}>{newestState.individualMovieDetails.release}</div>
            </div>

        </div>
    );
};

export default IndividualMovie;