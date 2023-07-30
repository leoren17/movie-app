import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';

// omdb api key: e957e0d2
const OMDB_API_URL = "http://www.omdbapi/?apikey=e957e0d2";

const App = () => {

    // search for movies
    const search = async (title) => {
        const responseObject = await fetch(`${OMDB_API_URL}&s=${title}`);
        const data = await responseObject.json();
        console.log(data);
    }
    // same as componentDidMount()
    useEffect(() => {
        search("pulp");
    }, []);

    return (
        <>
            <h1>Movie App</h1>
        </>
    );
}

export default App;