import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieContextProvider } from './Context/MovieContext';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Spinner } from './Spinner/Spinner';
const FavoriteMovies = React.lazy(() => import('./FavoriteMovies/FavoriteMovies')); // Lazy-
const IndividualMovie = React.lazy(() => import('./IndividualMovie/IndividualMovie'));
const HomePage = React.lazy(() => import('./HomePage/HomePage'));
function App() {
  return (
    <>
      <Suspense fallback={Spinner}>
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
      </Suspense>

    </>
  );
}

export default App;
