import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // 🆕 Add this at the top

import {
  FaArrowTrendUp, FaPlus, FaStar, FaFire,
  FaLessThan, FaGreaterThan
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
    getMovies(); // Load movies on initial render
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
    <div className="bg-black py-10">
      <div className="  p-5">
        {/* Title Section */}
        <div className="flex  items-center justify-between  mb-6">
          <div className="flex items-center gap-3">
            <FaArrowTrendUp className="text-white text-lg" />
            <p className="text-white font-semibold">Trending Movies </p>
          </div>
          <div className="">
          <select
            onChange={handleGenreChange}
            className="bg-gray-500 text-white px-4 py-2  rounded-md text-sm focus:outline-none hover:bg-gray-600"
          >
            <option value="">Select Category</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.label}</option>
            ))}
          </select>
        </div>
          {/* <div className="flex items-center gap-2">
            <FaFire className="text-slate-500" />
            <p className="text-slate-500">Popular</p>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-slate-500" />
            <p className="text-slate-500">Premieres</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus className="text-slate-500" />
            <p className="text-slate-500">Recently Added</p>
          </div> */}
        </div>

        {/* Genre Select Dropdown */}
        

        {/* Scrollable Movies */}
        <div className="relative">
          {/* Scroll Arrows */}
          <div
            onClick={scrollLeft}
            className="absolute h-full flex items-center left-0 top-1/2 transform -translate-y-1/2 z-10  bg-black/70 hover:bg-black/85  p-2"
          >
            <FaLessThan className="text-white " />
          </div>

          <div
               ref={scrollRef}
               className="flex gap-6 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hidden px-1"
             >


{movieList.length > 0 ? movieList.slice(0, 14).map((movie, index) => (
  <Link
    key={movie.id}
    to={`/details/${movie.id}`} // 🆕 Navigate with movie ID
    className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
  >
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="rounded-lg w-full object-cover h-60 sm:h-64 md:h-72"
    />
    <p className="text-white font-bold mt-2 text-sm truncate">
      {movie.title.length > 20 ? `${movie.title.slice(0, 20)}...` : movie.title}
    </p>
    <div className="flex justify-between items-center text-white text-xs mt-1">
      <span className="truncate">{movie.release_date}</span>
      <span className="flex items-center gap-1">
        <FaStar className="text-yellow-400" />
        {movie.vote_average}
      </span>
    </div>
  </Link>
)) : (
  <div className="text-white text-center py-10 w-full">
    Loading movies...
  </div>
)}

          </div>

          <div
            onClick={scrollRight}
            className="absolute h-full flex items-center right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/85 p-2 "
          >
            <FaGreaterThan  className="text-white " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
