import { useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function Header({setMovies}) {
    
    const movieRef = useRef('')
    const prevSearch = useRef()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/moviesapp/')
        if (prevSearch.current === movieRef.current.value ) return
        fetch(`https://www.omdbapi.com/?apikey=dbd7f885&s=${movieRef.current.value}`)
        .then(resp => resp.json())
        .then(json => {setMovies(json.Search); prevSearch.current=movieRef.current.value})
        .catch(error => console.log(error))
    
      }

    return (
    <div className="header">
        <Link className="header-link" to='/moviesapp/' onClick={()=>{setMovies([]); prevSearch.current=''; movieRef.current.value='' }}>Home</Link>
        <form onSubmit={handleSubmit}>
            <input className="movie-search-input" ref={movieRef} placeholder="movie title..."></input>
            <button type="submit">Send</button>
        </form>
    </div>
    )}