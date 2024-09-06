import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`,
    )
      .then(response => response.json())
      .then(data => setMovie(data))

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY&language=en-US`,
    )
      .then(response => response.json())
      .then(data => setCast(data.cast))
  }, [id])

  if (!movie) return <div>Loading...</div>

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Rating: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
      {/* Render cast */}
      <div>
        {cast.map(member => (
          <div key={member.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
              alt={member.name}
            />
            <p>
              {member.name} as {member.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
