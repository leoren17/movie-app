import React from 'react';

const MovieCard = ({m}) => {
    return (
        <div className="movie">
            <div>
                <h3>{m.Title}</h3>
            </div>
            <div>
                <p>{m.Year}</p>
            </div>
            <div>
                <p>{m.Type}</p>
            </div>
            <div>
                {/* <img src='https://via.placeholder.com/400' /> */}
                <img src={m.Poster} />
            </div>
        </div>
    );
}

export default MovieCard;