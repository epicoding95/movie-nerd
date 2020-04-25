import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import axios from 'axios';

const Cast = () => {
    const { newestState, dispatch } = useContext(MovieContext)

    console.log(newestState, 'newest state with cast  in cast')
    return (
        <div>
            image
            name
            movie name
        </div>
    );
};

export default Cast;