import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Search_movie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const randomPage = Math.floor(Math.random() * 500) + 1;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results || []))
      .catch(() => setMovieList([]));
  };

  const filteredMovies = movieList.filter(movie =>
    movie?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-10">
      <div className="flex justify-center items-center mb-6">
        <div className=" flex relative w-full max-w-md">
            <button onClick={() => navigate(-1)}
s                          className="text-white text-2xl p-2 rounded-full hover:bg-white/10"
                        >
                          <IoArrowBackSharp />
                        </button>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => navigate('/search')}
            className={`w-full px-5 py-2 rounded-full text-white placeholder-white/70 bg-white/10 backdrop-blur-lg border border-white/10 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300`}
          />
          <FaSearch className="absolute right-4 top-2.5 text-white/70" size={18} />
        </div>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg">
              <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className="min-w-[130px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] flex-shrink-0"
                  >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition duration-300"
              />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-white col-span-full text-lg">No movies found</p>
        )}
      </div>
       

      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        body {
          overflow-x: hidden;
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default Search_movie;
