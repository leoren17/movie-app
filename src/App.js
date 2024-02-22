import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import MovieCard from "./MovieCard";

// omdb api key: e957e0d2
const OMDB_API_URL = "http://www.omdbapi.com/?apikey=e957e0d2";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);

  // search for movies
  const search = async (title) => {
    const responseObject = await fetch(`${OMDB_API_URL}&s=${title}`);
    const data = await responseObject.json();
    // console.log(data);

    setMovies(data.Search);

    if (data.totalResults) {
      setTotal(data.totalResults);
    } else {
      setTotal(0);
    }
  };
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
    Title: "Pulp Fiction",
    Year: "1994",
    imdbID: "tt0110912",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row align-items-center m-5">
          <h1 className="mb-3 text-center">Search for Movies</h1>
          <input
            className="col form-control-lg"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          {/* <button className="col"
                        onClick={() => {search(searchTerm)}}>
                        search!
                    </button> */}
        </div>

        <div className="mb-3 text-center">
          <h2>
            Total Movies Found: <i>{total}</i>
          </h2>
        </div>

        {
          // checks to make sure movies is not null or undefined
          // if movies is null/undefined, return undefined
          movies?.length > 0 ? (
            <div className="row align-items-center">
              {movies.map((m) => (
                <MovieCard movie={m} />
              ))}
            </div>
          ) : (
            <div className="mb-3 text-center">
              <h1>No Movies Found!</h1>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default App;
