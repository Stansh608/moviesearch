//React Hooks
import { useEffect, useState } from 'react';

//import css
import './App.css';

//import Movie
import MovieCard from './components/MovieCard';

//import search icon
import searchIcon from './search.svg'

//Url to movies API
const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=a504199c"




//main component
function App() {
  {/* To load the movies dynamically use useState */}
  const [movies, setMovies] = useState([]); //The default is an empty array

  //use state to enable search
  const [searchTerm, setSearchTerm] = useState('')
  // function to searchMovies
  const searchMovies= async (title) => {
    const response= await fetch(`${API_URL} &s=${title}`)
    const data= await response.json();


    setMovies(data.Search);
}
  useEffect(()=>{

    searchMovies("Vikings"); //on refresh 
  }, [])


  return(<div className='app'>
  
  <h1 className=''>Movies Site</h1>

  <div className='search'>
    <input placeholder='Type here...'
    value={searchTerm}
    onChange={(e)=>{setSearchTerm(e.target.value);

    }}

    />
    <img src={searchIcon}
    alt='Search here..'
    onClick={()=>{searchMovies(searchTerm);}}/>

  </div>

  {
    movies?.length >0 ? (
    <div className='container'>
      
      {movies.map((movie) =>(
        <MovieCard movie={movie}/>
      ))}
    

  </div>
    ) : (
      <div className='empty'>
        <h2>No movies Found!!</h2>
      </div>
    )
  }
  
  
  </div>)

}

export default App;
