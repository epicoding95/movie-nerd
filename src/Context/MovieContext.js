import React, { createContext, useReducer } from 'react';

export const MovieContext = createContext();
const initialState = {
    topMovies: [],
    individualMovieDetails: {},
    searchedMovies: [],
    comedyMovies: []
}
const movieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOP_MOVIES':
            return {
                ...initialState, topMovies: action.payload.topMovies
            }
        case 'ADD_INDIVIDUAL_MOVIE_DETAILS':
            return {
                ...initialState, individualMovieDetails: action.payload.individualMovieDetails
            }
        case 'ADD_SEARCHED_MOVIES':
            return {
                ...initialState, searchedMovies: action.payload.searchedMovies
            }
        case 'ADD_COMMEDY_MOVIES':
            return {
                ...initialState, comedyMovies: action.payload.comedyMovies
            }
        default: return state
    }
}
export const MovieContextProvider = (props) => {

    const [newestState, dispatch] = useReducer(movieReducer, initialState)
    return (
        <MovieContext.Provider value={{ newestState, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    );
};
