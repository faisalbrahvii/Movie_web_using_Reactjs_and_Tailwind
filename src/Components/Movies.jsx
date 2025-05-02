import React, { useEffect, useState } from 'react';
import { FaArrowTrendUp, FaPlus, FaStar, FaFire, FaHeart, FaEye, FaCheck } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Fetch some movies when the component mounts
    getMovies();
  }, []);

  const getMovies = () => {
    const randomPage = Math.floor(Math.random() * 1000) + 1;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  const random_movies = (genreId) => {
    // Fetch movies based on the selected genre
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&with_genres=${genreId}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  return (
    <div>
       <div className='container mx-auto mt-10' >
      <div className='w-full grid grid-cols-3 gap-16 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-4  md:p-14'>
        <div className='flex justify-center items-center gap-2'>
          <BiSolidMoviePlay className='text-white text-2xl' />
          <p className='text-slate-100 font-sans text-[16px]'>Movies</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <RiMovie2Line className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Series</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <FaCheck className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Original Series</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <FaSearch className='text-slate-600' />
          <p className='text-slate-500 font-sans text-[16px]'>Search</p>
        </div>
      </div>
      <hr className='bg-gray-600' />
      <div className='flex gap-10 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-9'>
      <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(28)}>Action</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(12)}>Adventure</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(16)}>Animation</button>
            <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(35)}>Comedy</button>
            <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(80)}>Crime</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(99)}>Documentary</button>
            <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(18)}>Drama</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(27)}>Horror</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(10749)}>Romance</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(878)}>Sci-Fi</button>
            <button className='bg-red-600 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(10770)}>TV Movie</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(53)}>Thriller</button>
            <button className='bg-gray-900 px-8 py-2 font-sans rounded-3xl text-white' onClick={() => random_movies(37)}>Western</button>
        </div>
        <div className='grid sm:grid-cols-1 items-center mt-9'>
  <div className='flex items-center gap-3 p-4'>
    <p className='text-slate-400'>Sort by:</p>
    <button className='bg-red-600 px-6 py-2 font-sans rounded-3xl text-white'>Latest</button>
    <button className='bg-gray-900 px-6 py-2 font-sans rounded-3xl text-white flex items-center gap-2'>Year <FaChevronDown /></button>
    <button className='bg-gray-900 px-6 py-2 font-sans rounded-3xl text-white flex items-center gap-2'>News <FaChevronDown /></button>
  </div>
</div>

    </div>
      <div className='m-3 p-4 mt-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-5'>
          {/* Movie list */}
          {movieList && movieList.slice(0, 14).map((movie, index) => (
            <div key={index} className="">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <p className="text-white text-[16px] font-bold overflow-hidden whitespace-nowrap">
                  {movie.title.length > 12 ? movie.title.slice(0, 12) + '...' : movie.title}
                </p>
                <div className="text-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-2">
                  <p className="text-[14px] sm:text-[12px] md:text-[14px] lg:text-[14px]">{movie.release_date}</p>
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]" />
                    <FaEye className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]" />
                    <FaStar className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]" />
                    <p className="text-[12px] sm:text-[10px] md:text-[12px] lg:text-[12px]">{movie.vote_average}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;

