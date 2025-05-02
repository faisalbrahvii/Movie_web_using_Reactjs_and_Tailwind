import React, { useEffect, useState } from 'react';

function Movie() {
    const [movieList , setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1")
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <>
            <div>
                {movieList.map((movie, index) => (
                    <img key={index} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                ))}
            </div>
        </>
    );
}

export default Movie;
