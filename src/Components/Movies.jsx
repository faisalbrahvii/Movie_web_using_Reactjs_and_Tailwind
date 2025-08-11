import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaStar,
  FaHeart,
  FaEye,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../redux/myListSlice";

const SkeletonLoader = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {Array.from({ length: 12 }).map((_, idx) => (
      <div
        key={idx}
        className="bg-gray-900 p-2 rounded-lg animate-pulse"
      >
        <div className="bg-gray-700 w-full h-60 sm:h-64 rounded-md"></div>
        <div className="mt-2 h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="mt-1 flex justify-between">
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    ))}
  </div>
);

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const myList = useSelector((state) => state.myList);

  useEffect(() => {
    fetchWithDelay(getMovies);
  }, []);

  const fetchWithDelay = (fetchFn) => {
    setLoading(true);
    fetchFn().finally(() => {
      setTimeout(() => setLoading(false), 2000); // 2s skeleton
    });
  };

  const getMovies = () => {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieList(Array.isArray(json?.results) ? json.results : []);
      })
      .catch(() => setMovieList([]));
  };

  const random_movies = (genreId) => {
    fetchWithDelay(() =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&with_genres=${genreId}`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovieList(Array.isArray(json?.results) ? json.results : []);
        })
        .catch(() => setMovieList([]))
    );
  };

  const sortByLatest = () => {
    fetchWithDelay(() =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&sort_by=popularity.desc`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovieList(Array.isArray(json?.results) ? json.results : []);
        })
        .catch(() => setMovieList([]))
    );
  };

  const getMoviesByYear = (year) => {
    setSelectedYear(year);
    fetchWithDelay(() =>
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&primary_release_year=${year}&sort_by=popularity.desc`
      )
        .then((res) => res.json())
        .then((json) => {
          setMovieList(Array.isArray(json?.results) ? json.results : []);
        })
        .catch(() => setMovieList([]))
    );
  };

  const genreButtons = [
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

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 text-center">
          <div className="flex justify-center items-center gap-2">
            <BiSolidMoviePlay className="text-white text-xl" />
            <p className="text-slate-100 text-xs sm:text-sm">Movies</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <RiMovie2Line className="text-slate-600 text-xl" />
            <p className="text-slate-500 text-xs sm:text-sm">Series</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaCheck className="text-slate-600 text-xl" />
            <p className="text-slate-500 text-xs sm:text-sm">Original</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaSearch className="text-slate-600 text-xl" />
            <p className="text-slate-500 text-xs sm:text-sm">Search</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Genre Buttons */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hidden no-scrollbar">
          {genreButtons.map((genre, idx) => (
            <button
              key={genre.id}
              onClick={() => random_movies(genre.id)}
              className={`px-4 sm:px-5 py-2 whitespace-nowrap rounded-full text-xs sm:text-sm font-medium ${
                idx % 2 === 0
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-800 hover:bg-gray-700"
              } text-white transition`}
            >
              {genre.label}
            </button>
          ))}
        </div>

        {/* Sort Buttons */}
        <div className="flex flex-wrap gap-3 items-center mt-6 mb-10 text-xs sm:text-sm">
          <p className="text-slate-400">Sort by:</p>
          <button
            onClick={sortByLatest}
            className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-full text-white"
          >
            Latest
          </button>

          <div className="relative">
            <select
              onChange={(e) => getMoviesByYear(e.target.value)}
              value={selectedYear || ""}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded-full text-white appearance-none pr-6"
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-2 top-2.5 text-white text-xs pointer-events-none" />
          </div>
        </div>

        {/* Movie Grid */}
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {Array.isArray(movieList) && movieList.length > 0 ? (
              movieList.slice(0, 18).map((movie) => {
                if (!movie.poster_path) return null;
                const isAdded = myList.some((item) => item.id === movie.id);
                return (
                  <div
                    key={movie.id}
                    className="bg-gray-900 p-2 rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    <Link to={`/details/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-md w-full object-cover h-60 sm:h-64"
                      />
                    </Link>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white text-xs sm:text-sm font-semibold truncate">
                        {movie.title}
                      </p>
                      <button
                        onClick={() =>
                          isAdded
                            ? dispatch(removeFromList(movie.id))
                            : dispatch(addToList(movie))
                        }
                        className="text-white text-lg"
                      >
                        {isAdded ? (
                          <FaCheck className="text-green-400" />
                        ) : (
                          <FaPlus />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-slate-300 text-[10px] sm:text-xs mt-1">
                      <span>{movie.release_date}</span>
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-xs" />
                        <FaEye className="text-xs" />
                        <FaStar className="text-yellow-400 text-xs" />
                        <span>{movie.vote_average}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-white text-center col-span-full mt-10">
                No movies found. Try again.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
