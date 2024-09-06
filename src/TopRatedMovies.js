import React, {useEffect, useState} from 'react'

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY&language=en-US&page=1',
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

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

export default TopRatedMovies
