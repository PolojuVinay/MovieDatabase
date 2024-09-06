import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import PopularMovies from './PopularMovies'
import TopRatedMovies from './TopRatedMovies'
import UpcomingMovies from './UpcomingMovies'
import MovieDetails from './MovieDetails'
import SearchedMovies from './SearchedMovies'
import './App.css'

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route path="/top-rated" component={TopRatedMovies} />
      <Route path="/upcoming" component={UpcomingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/search" component={SearchedMovies} />
    </Switch>
  </Router>
)

export default App
