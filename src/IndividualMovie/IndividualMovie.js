import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
const IndividualMovie = (props) => {
    const { newestState } = useContext(MovieContext)
    //name/title/releasedate/genre/length/plot
    console.log(props.computedMatch.params.id, 'id')
    const paramsId = props.computedMatch.params.id
    const topMovies = newestState.topMovies
    console.log(topMovies, 'top movies')
    const filtered = topMovies.find(movie => movie.id == paramsId)
    console.log(filtered, 'filtered')
    return (
        <div>
            {filtered.title}
            {filtered.releaseDate}
        </div>
    );
};

export default IndividualMovie;