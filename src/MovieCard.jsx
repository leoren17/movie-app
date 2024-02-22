import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="col m-2 d-flex justify-content-center">
      {/* <div>
                <h3>{movie.Title}</h3>
            </div>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <p>{movie.Type}</p>
            </div> */}
      <div className="img-container">
        {/* <img src='https://via.placeholder.com/400' /> */}
        <img
          className="poster"
          src={
            movie.Poster === "N/A"
              ? "https://placehold.co/270x400?text=Poster+N/A"
              : movie.Poster
          }
          alt={movie.Title}
        />
        <div></div>
        <div>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
