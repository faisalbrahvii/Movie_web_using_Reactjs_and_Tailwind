import React, { useEffect, useState } from 'react';
import { FaPlay, FaPlus } from "react-icons/fa6";

const MobileScreen = () => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);

  const getMovies = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`);
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };

  const getGenreNames = (genre_ids = []) => {
    const allGenres = {
      28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
      99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
      27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Sci-Fi",
      10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
    };
    return genre_ids.map(id => allGenres[id]).filter(Boolean).join(", ");
  };

  useEffect(() => {
    getMovies();
  }, []);
  // go
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[current];

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] bg-black overflow-hidden">
      {/* Background Image */}
      {currentMovie && (
        <img
          src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path || currentMovie.poster_path}`}
          alt={currentMovie.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

      {/* Content */}
      {currentMovie && (
        <div className="absolute bottom-6 left-0 right-0 z-20 px-4 flex flex-col items-center text-white text-center">
          <h2 className="text-lg sm:text-2xl font-bold mb-1 line-clamp-2">
            {currentMovie.title}
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mb-4">{getGenreNames(currentMovie.genre_ids)}</p>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-semibold text-xs sm:text-sm hover:bg-gray-300 transition">
              <FaPlay className="text-sm" /> Play
            </button>
            <button className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded font-semibold text-xs sm:text-sm border border-white hover:bg-white/30 transition">
              <FaPlus className="text-sm" /> My List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;
