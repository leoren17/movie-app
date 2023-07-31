import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        if (data.Search) {
            setMovies(data.Search);
        }        
    }
    // same as componentDidMount()
    useEffect(() => {
        search("avengers");
    }, []);

    // each time searchTerm changes
    useEffect(() => {
        search(searchTerm);
    }, [searchTerm]);

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
            <div className="container">      
                <div className="row align-items-center m-4">
                    <h1 className="mb-3">Search for Movies</h1>
                    <input className="col form-control input"
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value)}}
                    />
                    {/* <button className="col"
                        onClick={() => {search(searchTerm)}}>
                        search!
                    </button> */}
                </div>           
            {
                // checks to make sure movies is not null or undefined
                // if movies is null/undefined, return undefined
                movies?.length > 0 
                ? (                    
                    <div className='row'>
                        {movies.map((m) => <MovieCard movie = {m}/>)}
                    </div>
                ) : (
                    <h1>No Movies Found!</h1>
                )
            }        
            </div>
        </div>
    );
}

export default App;