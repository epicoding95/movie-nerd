import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContextProvider from './Context/MovieContext';
import HomePage from './HomePage/HomePage';
import IndividualMovie from './IndividualMovie/IndividualMovie';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <MovieContextProvider>
        <BrowserRouter>
          <Switch>
            <HomePage path='/' component={HomePage} />
            <IndividualMovie path='/IndividualMovie' component={IndividualMovie} />
          </Switch>
        </BrowserRouter>
      </MovieContextProvider>

    </>
  );
}

export default App;
