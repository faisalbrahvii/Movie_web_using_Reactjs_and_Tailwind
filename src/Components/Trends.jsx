import React, { useEffect, useState } from 'react';
import { FaArrowTrendUp, FaPlus, FaStar, FaFire, FaHeart, FaEye, FaLessThan, FaGreaterThan } from "react-icons/fa6";
// import  { trends } from '../Data/Data'; 

const Trends = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const randomPage = Math.floor(Math.random() * 1000) + 1;

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&page=${randomPage}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };

  const random_movies = (genreId) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=afcaa692aad9ee3412271fa7b8d4fba1&with_genres=${genreId}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };


  return (
    <div className='bg-black'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 hero lg:p-14 md:p-14 gap-16'>
          <div className='flex justify-center gap-4'>
            <FaArrowTrendUp className='text-white items-center text-2xl' />
            <p className='text-slate-100 font-sans text-[16px]'>Trends Now</p>
          </div>
          <div className='flex justify-center items-center  gap-2'>
            <FaFire className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Popular</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <FaStar className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Premires</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <FaPlus className='text-slate-600' />
            <p className='text-slate-500 font-sans text-[16px]'>Recently Added</p>
          </div>
        </div>
        <hr className='bg-gray-600 ' />
        <div className='flex gap-10  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-9 scrollbar-hidden'>
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
      </div>
      <div className='mt-9'>
        <div className='flex items-center gap-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hidden'>
          <div>
            <FaLessThan className='text-white text-5xl absolute p-2 left-0' />
          </div>
          {movieList && movieList.slice(0, 14).map((movie, index) => (
           <div key={index} className=''>
             <div className='sm:w-[110px] md:w-56 lg:w-56'>
               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='rounded-lg' />
               <div className='mt-4'>
               <p className='text-white sm:text-[10px] md:text-[16px] lg:text-[18px] font-bold overflow-hidden whitespace-nowrap'>{movie.title.length > 12 ? movie.title.slice(0, 20) + '...' : movie.title}</p>
                 <div className='text-white flex gap-10'>
                   <div>
                     <p className='sm:text-[8px] md:text-[14px]'>{movie.release_date}</p>
                   </div>
                   <div className='flex justify-between items-center gap-2'>
                     <FaHeart className='sm:text-[8px] md:text-[14px]' />
                     <FaEye className='sm:text-[8px] md:text-[14px] text-red-700' />
                     <FaStar className='sm:text-[8px] md:text-[14px] text-yellow-300' />
                     <p className='sm:text-[8px] md:text-[14px] text-yellow-300'>{movie.vote_average}</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           ))}
          <div  >
            <FaGreaterThan className='text-white  text-5xl absolute right-0  p-2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trends;
