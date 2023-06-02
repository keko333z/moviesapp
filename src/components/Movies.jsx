
import { Link } from "react-router-dom"

export function Movies({movies}) {
    return (
    <>
    {movies?.map(movie => 
      <div className="movies" key={movie.imdbID}>
      <Link className="link" to={'/moviesapp/movie/'+movie.imdbID}>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
        <img style={{width: '90%', padding: '10px'}}src={movie.Poster} alt="movie poster"></img>
      </Link>
      </div>
    )}
  </>    
  )}