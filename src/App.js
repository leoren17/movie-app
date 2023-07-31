import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import MovieCard from './MovieCard';

// omdb api key: e957e0d2
const OMDB_API_URL = "http://www.omdbapi.com/?apikey=e957e0d2";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    // search for movies
    const search = async (title) => {
        const responseObject = await fetch(`${OMDB_API_URL}&s=${title}`);
        const data = await responseObject.json();
        setMovies(data.Search);
        console.log(data.Search);
        console.log(movies);
    }
    // same as componentDidMount()
    useEffect(() => {
        search("pulp");
    }, []);

    // what an entry in data.Search looks like
    const tmp = {
        "Title": "Pulp Fiction",
        "Year": "1994",
        "imdbID": "tt0110912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      }

    return (
        <div className="app">
            <h1>Movie Search</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <button 
                    onClick={() => {search(searchTerm)}}>
                    search!
                </button>
            </div>
            
            <div className="container">
            {
                movies.length > 0 
                ? (
                    <MovieCard m={movies[0]}/>
                ) : (
                    <h1>No Movies Found!</h1>
                )
            }
            </div>
        </div>
    );
}

export default App;