import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const SearchedMovies = () => {
  const [movies, setMovies] = useState([])
  const query = new URLSearchParams(useLocation().search).get('query')

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}&language=en-US&page=1`,
      )
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }
  }, [query])

  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  )
}

export default SearchedMovies
