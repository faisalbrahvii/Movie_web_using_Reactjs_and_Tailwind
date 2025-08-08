import React, { useEffect, useState } from 'react';
import { FaPlay, FaPlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

// Skeleton Loader Component (mobile friendly)
const SkeletonLoader = () => (
  <div className="bg-black text-white px-4 sm:px-6 pt-16 pb-10 min-h-screen">
    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 animate-pulse">
      {/* Poster Skeleton */}
      <div className="bg-gray-800 rounded-xl w-full h-[500px] sm:h-[650px]"></div>

      {/* Info Skeleton */}
      <div className="flex flex-col justify-start gap-4">
        <div className="bg-gray-800 h-8 w-3/4 rounded"></div>
        <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
        <div className="flex gap-3 flex-wrap">
          <div className="bg-gray-700 h-4 w-16 rounded"></div>
          <div className="bg-gray-700 h-4 w-16 rounded"></div>
          <div className="bg-gray-700 h-4 w-16 rounded"></div>
        </div>
        <div className="bg-gray-700 h-20 w-full rounded"></div>
        <div className="bg-gray-800 h-10 w-40 rounded"></div>
        <div className="flex gap-3">
          <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
          <div className="bg-gray-800 h-10 w-10 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const MobileScreen = () => {
  const [movies, setMovies] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`);
      const data = await res.json();
      setMovies(data.results || []);
      setLoading(false); // ✅ Stop skeleton
    } catch (err) {
      console.error("Failed to fetch movies", err);
      setLoading(false);
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

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % movies.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [movies]);

  if (loading) return <SkeletonLoader />; // ✅ Show skeleton until data loads

  const currentMovie = movies[current];

  return (
    <div className='relative bg-black/95'>
      {/* Top Buttons */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-3 overflow-x-auto">
        <button className="flex-shrink-0 flex items-center gap-2 border border-white/30 hover:bg-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium transition">
          TV Shows
        </button>
        <button
          onFocus={() => navigate('/SelectCategories')}
          className="flex-shrink-0 flex items-center gap-1 border border-white/30 hover:bg-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium transition"
        >
          All Categories <RiArrowDropDownLine className="text-xl" />
        </button>
      </div>

      {/* Movie Display */}
      <div className='p-5'>
        <div className="relative h-[650px] bg-black overflow-hidden border-4 rounded mt-12">
          {/* Background Image */}
          {currentMovie && (
            <img
              src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
              alt={currentMovie.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
            />
          )}

          {/* Top Shadow */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 to-transparent z-20" />

          {/* Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

          {/* Content */}
          {currentMovie && (
            <div className="absolute bottom-6 left-0 right-0 z-30 px-4 flex flex-col items-center text-white text-center">
              <h2 className="text-base sm:text-lg font-semibold mb-1 tracking-wide drop-shadow-md">
                {currentMovie.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-white/60 mb-4">
                {getGenreNames(currentMovie.genre_ids)}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap justify-center w-full max-w-xs">
                <Link to={`/details/${currentMovie.id}`}>
                  <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-300 transition duration-200">
                    <FaPlay className="text-sm" /> Play
                  </button>
                </Link>
                <button className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-md text-xs font-medium bg-transparent hover:bg-white/20 transition duration-200">
                  <FaPlus className="text-sm" /> My List
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
