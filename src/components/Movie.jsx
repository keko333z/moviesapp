import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Movie(){

    const [movie, setMovie] = useState()
    const {id} = useParams()
     
      useEffect(()=>{
      fetch(`https://www.omdbapi.com/?apikey=dbd7f885&i=${id}`)
      .then(resp => resp.json())
      .then(json => {setMovie(json)})
      .catch(error => console.log(error))
      },[id])
      
      return (
        <>
         { movie ? 
          <div className="movie" key={movie?.imdbID}>
          <h2>{movie?.Title}</h2>
          <p>{movie?.Year} </p>
          <p>Country: {movie?.Country} - Duration: {movie?.Runtime}</p>
          <img style={{width: '80%', marginLeft: '10%', padding: '10px'}} src={movie.Poster} alt="movie poster"></img>
          
          <p>Genre: {movie?.Genre}</p>
          <div className="actors">Director: {movie?.Director}</div>
          <div className="plot">Plot: {movie?.Plot}</div>
          <div className="actors">Actors: {movie?.Actors}</div>
          
          <div className="imdb">Imdb rating: {movie?.imdbRating}</div>
          <div className="metacritic">Metacritic score: {movie?.Metascore}</div>
          <div className="rottentomatoes">Rotten Tomatoes Tomatometer: {movie.Ratings[1]?.Value}</div>

          </div>
           : <h3>Loading...</h3>
          }
        </>
        )}