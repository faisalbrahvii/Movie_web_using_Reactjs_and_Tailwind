import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom';

const SelectCategories = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Drama", id: 18 },
    { name: "Fantasy", id: 14 },
    { name: "Horror", id: 27 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Sci-Fi", id: 878 },
    { name: "Thriller", id: 53 },
    { name: "Animation", id: 16 }
  ];

  const API_KEY = "afcaa692aad9ee3412271fa7b8d4fba1";

  const fetchMoviesByCategory = async (genreId) => {
    try {
      setLoading(true);
      const randomPage = Math.floor(Math.random() * 5) + 1;
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${randomPage}`
      );
      const data = await res.json();
      setMovies(data.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-[999] bg-black flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black">
            <button
              onClick={() => {
                if (selectedCategory) {
                  setSelectedCategory(null);
                  setMovies([]);
                } else {
                  navigate('/');
                }
              }}
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10 transition"
            >
              <IoArrowBackSharp />
            </button>

            <span className="text-white text-lg font-medium truncate">
              {selectedCategory ? selectedCategory : "All Categories"}
            </span>

            <button
              onClick={() => navigate('/')}
              className="bg-slate-200 text-black px-3 py-1 rounded-md text-sm font-medium transition"
            >
              Home
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6">
            {!selectedCategory ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      fetchMoviesByCategory(category.id);
                    }}
                    className="text-base text-white text-center py-3 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer font-medium transition transform hover:scale-105"
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-lg animate-pulse">Loading movies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <Link
                      key={movie.id}
                      to={`/details/${movie.id}`}
                      className="relative group bg-white/10 rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-[250px] sm:h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <p className="text-white text-center text-sm px-2">{movie.title}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-white text-center">No movies found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectCategories;
