import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlayCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { removeFromList } from "../redux/myListSlice";
import { Link } from "react-router-dom";

const MyList = () => {
  const myList = useSelector((state) => state.myList);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto pt-28 pb-10 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide border-b border-gray-700 pb-3">
          My List
        </h1>

        {myList.length === 0 ? (
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            No movies in your list yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mt-6">
            {myList.map((movie) => (
              <div
                key={movie.id}
                className="relative group rounded-lg overflow-hidden bg-gray-900 shadow-lg transition-transform duration-300 ease-out hover:scale-[1.05]"
              >
                {/* Movie Poster */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-44 sm:h-52 md:h-60 object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="flex items-center gap-6">
                    {/* Play Button */}
                    <Link to={`/details/${movie.id}`}>
                      <button className="text-white text-3xl sm:text-4xl hover:text-gray-300 transition-transform transform hover:scale-110">
                        <FaPlayCircle />
                      </button>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => dispatch(removeFromList(movie.id))}
                      className="text-white text-3xl sm:text-4xl hover:text-red-400 transition-transform transform hover:scale-110"
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
