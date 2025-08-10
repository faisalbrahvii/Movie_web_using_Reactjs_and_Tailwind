import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlayCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { removeFromList } from "../redux/myListSlice";
import { Link } from 'react-router-dom';

const MyList = () => {
  const myList = useSelector(state => state.myList);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto pt-28 pb-10 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl font-extrabold tracking-wide border-b border-gray-700 pb-3">
          My List
        </h1>

        {myList.length === 0 ? (
          <p className="text-gray-400 mt-6">No movies in your list yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-6">
            {myList.map(movie => (
              
<div
                key={movie.id}
                className="relative group rounded-lg overflow-hidden bg-gray-900 shadow-lg transform transition-transform duration-300 ease-out hover:scale-110 hover:z-20"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="flex gap-6">
                    <Link
                            key={movie.id}
                            to={`/details/${movie.id}`}
                            className=""
                          >

                    <button className="text-white text-4xl hover:white-gray-500 transition-transform transform hover:scale-110">
                      <FaPlayCircle />
                    </button>
                          </Link>
                    <button
                      onClick={() => dispatch(removeFromList(movie.id))}
                      className="text-white text-4xl hover:text-red-400 transition-transform transform hover:scale-110"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              </div>
                          
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
