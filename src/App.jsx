
import { useEffect, useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import { Movie } from './components/Movie'
import { Movies } from './components/Movies'
import { Header } from './components/Header'
import { getSomeRandom } from 'popular-movie-quotes'
import './App.css'

function App() {

  const [movies, setMovies]= useState([])
  const [quote, setQuote] = useState(null)
  const q=getSomeRandom(1)
  
  useEffect(()=>{

    async function fetchData(obj){
      try {
        const resp = await fetch(`https://www.omdbapi.com/?apikey=dbd7f885&t=${obj.movie}`)
        const json = await resp.json()
        obj.poster = json.Poster  
        setQuote(obj)
        } 
      catch (error) 
      { console.log(error) }
    }

    const quoteObj= q[0]
    
    if(!quote){
    fetchData(quoteObj)
    }  
  },[q])

  return (
    <div className='container'>
      <Header setMovies={setMovies}></Header>
      <div className='body'>
      
      <Routes>
        <Route path='/moviesapp/' element={ movies?.length !== 0 ? 
            <Movies movies={movies}/> : 
            ( quote ? <div className="quote"><p>{quote?.quote}</p><b>{quote?.movie}</b><p>{quote?.year}</p><img src={quote?.poster} alt='sorry, no poster this time'></img></div> : <h2>Loading...</h2>)}>
        </Route>
        <Route path='/movie/:id' element={<Movie />}></Route>
      </Routes>
      </div>
     </div>
  )
}

export default App
