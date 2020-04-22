import React, { createContext, useReducer } from 'react';

const MovieContext = createContext();
const initialState = {
    allMovies: [],
    singleMovie: '',
    searchedMovies: []
}
const movieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ALL_MOVIES':
            return {
                ...initialState,
            }
        case 'ADD_SINGLE_MOVIE':
            return {
                ...initialState,
            }
        case 'ADD_SEARCHED_MOVIES':
            return {
                ...initialState,
            }
        default: return state
    }
}
const MovieContextProvider = (props) => {

    const [newestState, dispatch] = useReducer(movieReducer, initialState)
    return (
        <MovieContext.Provider value={{ newestState, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;