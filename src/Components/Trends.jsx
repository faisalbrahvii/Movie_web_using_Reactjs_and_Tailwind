import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowTrendUp, FaStar, FaLessThan, FaGreaterThan
} from "react-icons/fa6";

const Trends = () => {
  const [movieList, setMovieList] = useState([]);
  const scrollRef = useRef(null);

  const genres = [
    { id: 28, label: "Action" },
    { id: 12, label: "Adventure" },
    { id: 16, label: "Animation" },
    { id: 35, label: "Comedy" },
    { id: 80, label: "Crime" },
    { id: 99, label: "Documentary" },
    { id: 18, label: "Drama" },
    { id: 27, label: "Horror" },
    { id: 10749, label: "Romance" },
    { id: 878, label: "Sci-Fi" },
    { id: 10770, label: "TV Movie" },
    { id: 53, label: "Thriller" },
    { id: 37, label: "Western" },
  ];

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results || []))
      .catch(err => console.error("Movie fetch error:", err));
  };

  const random_movies = (genreId) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&with_genres=${genreId}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results || []));
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    if (genreId) random_movies(genreId);
  };

  return (
    <div className="bg-black py-8 sm:py-10 px-4 sm:px-6 md:px-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
        <div className="flex items-center gap-2">
          <FaArrowTrendUp className="text-white text-base sm:text-lg" />
          <p className="text-white text-base sm:text-lg font-semibold">Trending Movies</p>
        </div>

        {/* Genre Dropdown */}
        <select
          onChange={handleGenreChange}
          className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm focus:outline-none hover:bg-gray-600 w-full sm:w-auto"
        >
          <option value="">Select Category</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.label}</option>
          ))}
        </select>
      </div>

      {/* Movie Scroll Area */}
      <div className="relative">
        {/* Left Arrow (only on md+) */}
        <div
          onClick={scrollLeft}
          className="hidden md:flex absolute h-full items-center left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 cursor-pointer"
        >
          <FaLessThan className="text-white text-lg" />
        </div>

        {/* Movie Cards Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-hidden scrollbar-thumb-gray-700 scrollbar-track-black"
        >
          {movieList.length > 0 ? movieList.slice(0, 14).map((movie) => (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="min-w-[130px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] flex-shrink-0"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <p className="text-white font-semibold mt-2 text-xs sm:text-sm truncate">
                {movie.title.length > 25 ? `${movie.title.slice(0, 25)}...` : movie.title}
              </p>
              <div className="flex justify-between items-center text-white text-xs mt-1">
                <span className="truncate">{movie.release_date}</span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </Link>
          )) : (
            <div className="text-white text-center py-10 w-full">
              Loading movies...
            </div>
          )}
        </div>

        {/* Right Arrow (only on md+) */}
        <div
          onClick={scrollRight}
          className="hidden md:flex absolute h-full items-center right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 cursor-pointer"
        >
          <FaGreaterThan className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Trends;
