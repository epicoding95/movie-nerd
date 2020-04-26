import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieContextProvider } from './Context/MovieContext';
import HomePage from './HomePage/HomePage';
import IndividualMovie from './IndividualMovie/IndividualMovie';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';



function App() {
  return (
    <>
      <MovieContextProvider>
        <BrowserRouter>
          <Switch>
            <FavoriteMovies path='/FavoriteMovies' component={FavoriteMovies} />
            <IndividualMovie path='/Individual/:id' component={IndividualMovie} />
            <HomePage path='/' component={HomePage} />
            } />
          </Switch>
        </BrowserRouter>
      </MovieContextProvider>

    </>
  );
}

export default App;
