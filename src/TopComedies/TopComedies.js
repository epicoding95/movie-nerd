import React, { useEffect, useContext } from 'react';
import classes from './TopComedies.module.css';
import TopComedy from './TopComedy/TopComedy';
import axios from 'axios';
import { MovieContext } from '../Context/MovieContext';
const TopComedies = ({ urlMatch }) => {

    const { newestState, dispatch } = useContext(MovieContext)
    useEffect(() => {
        const getTopMovies = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/movie/35/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                console.log(data, 'comedy data')
                const editedData = data.data.results.map((x) => {
                    return {
                        id: x.id, image: x.poster_path, title: x.title, releaseDate: x.release_date
                    }
                })
                console.log(editedData, 'editedData')
                localStorage.setItem('TopComedies', JSON.stringify(editedData))
                dispatch({ type: 'ADD_COMMEDY_MOVIES', payload: { comedyMovies: editedData } })
            }
            catch (err) {
                console.log(err, 'error in api call')
            }

        }
        getTopMovies();
    }, [dispatch])

    let localStorgeData = ['localstoragedata'];
    if (localStorage.getItem('TopComedies') !== null) {
        localStorgeData = JSON.parse(localStorage.getItem('TopComedies'))
    }
    console.log(localStorgeData, 'local comedies')
    return (
        <>
            <div className={classes.TopComediesLabel}>Top Comedies</div>
            <div className={classes.TopComediesContainer}>
                {localStorgeData.map(movie => {
                    return <TopComedy
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

export default TopComedies;