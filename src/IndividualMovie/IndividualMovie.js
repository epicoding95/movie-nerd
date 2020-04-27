import React, { useContext, useEffect } from 'react';
import { MovieContext } from '../Context/MovieContext';
import classes from './IndividualMovie.module.css';
import axios from 'axios';
import Cast from './Cast/Cast';
import { useHistory } from 'react-router-dom';
const IndividualMovie = (props) => {
    const { newestState, dispatch } = useContext(MovieContext)
    const history = useHistory();
    //name/title/releasedate/genre/length/plot
    console.log(props.computedMatch.params.id, 'id')
    const paramsId = props.computedMatch.params.id
    const topMovies = newestState.topMovies
    console.log(topMovies, 'top movies')
    const filtered = topMovies.find(movie => movie.id == paramsId)
    console.log(filtered, 'filtered')


    useEffect(() => {
        const getIndividualDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
                const responseForCast = await axios.get(`https://api.themoviedb.org/3/movie/${paramsId}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
                console.log(responseForCast, 'response for cast intiial')
                const filteredData = {};
                for (let key in response.data) {
                    filteredData['id'] = response.data.id
                    filteredData['backdropImage'] = response.data.backdrop_path
                    filteredData['logoImage'] = response.data.poster_path
                    filteredData['title'] = response.data.title
                    filteredData['genre'] = response.data.genres[0].name
                    filteredData['overview'] = response.data.overview
                    filteredData['runtime'] = +response.data.runtime
                    filteredData['release'] = response.data.release_date
                    filteredData['releaseYear'] = response.data.release_date.slice(0, 4)
                    filteredData['voteAverage'] = response.data.vote_average
                }
                const filteredDataForCast = {}
                for (let key in responseForCast.data) {
                    filteredDataForCast['castId'] = responseForCast.data.id
                    filteredDataForCast['cast'] = responseForCast.data.cast
                }
                console.log(filteredDataForCast, 'FILTEREDresponseForCast --------------')
                localStorage.setItem('filteredCastArray', JSON.stringify(filteredDataForCast))
                console.log(responseForCast, 'RESPONSE FOR CAST 23@#@#')
                dispatch({ type: 'ADD_CAST', payload: { cast: filteredDataForCast } })
                dispatch({ type: 'ADD_INDIVIDUAL_MOVIE_DETAILS', payload: { individualMovieDetails: filteredData } })

            }

            catch (err) {
                console.log(err)
            }
        }
        getIndividualDetails();
    }, [])
    let { backdropImage, logoImage, title, genre, overview, runtime, release, releaseYear, voteAverage } = newestState.individualMovieDetails;
    if (voteAverage) {
        voteAverage *= 10
        console.log(voteAverage)
    }
    let emoji;
    if (voteAverage > 75) {
        emoji = '👍'
    } else {
        emoji = '💩'
    }
    return (
        <>
            <button className={classes.IndividualMovieButton} onClick={() => history.push('/')}>Home Page</button>
            <div style={{
                backgroundImage: "linear-gradient(rgba(92,151,255,0.6)" + ',' + 'rgba(92,151,255,0.6))' + ',' + "url(" + "https://image.tmdb.org/t/p/w500" + backdropImage + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: '.9',
            }}
                className={classes.IndividualMovieContainer}>
                <img
                    className={classes.IndividualMovieImage}
                    src={'https://image.tmdb.org/t/p/w500' + logoImage}>
                </img>
                <div className={classes.IndividualMovieDetails}>
                    <div className={classes.IndividualMovieTitle}>{title}({releaseYear})</div>
                    <div className={classes.IndividualMovieBody}> {release} - {genre} - {runtime}</div>
                    <div style={{ display: 'flex' }}>
                        <div className={classes.VoteAverage}>{voteAverage}%</div>
                        <div className={classes.VoteAverageText} >Average Vote {emoji} </div>
                    </div>
                    <strong className={classes.IndividualMovieOverView}>Overview</strong>
                    <div className={classes.IndividualMovieOverViewContinued} >{overview}</div>

                </div>

            </div>
            <Cast paramsId={paramsId} />
        </>
    );
};

export default IndividualMovie;