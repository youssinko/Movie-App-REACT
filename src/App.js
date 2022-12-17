import {useState, useEffect} from 'react'
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  //State to hold movie data
  const [movie, setMovie] = useState(null)
  //variable with your apiKey
  const apiKey =process.env.REACT_APP_RANIA_KEY

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data)
    } catch (err) {
      console.error(err)
    }
    
  }

  useEffect(() => {
    getMovie("Clueless")
  }, [])

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;