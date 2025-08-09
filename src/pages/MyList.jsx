import React from 'react';
import userLogo from '../assests/logo/logoos.png';
import { FaPlayCircle } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

const MyList = () => {
  return (
    <div className="mx-auto pt-28 pb-10 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl font-extrabold tracking-wide border-b border-gray-700 pb-3">
          My List
        </h1>
        <div>
        <h2 className="text-gray-300 text-lg mt-6 mb-4">Your Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <div
              className="relative group rounded-lg overflow-hidden bg-gray-900 shadow-lg transform transition-transform duration-300 ease-out hover:scale-110 hover:z-20"
            >
              <img
                src={userLogo}
                alt="Movie Poster"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <img
                src={userLogo}
                alt="User"
                className="w-8 h-8 absolute top-3 left-3 border-2 border-white  shadow-md"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex gap-6">
                  <button className="text-white text-4xl hover:text-red-500 transition-transform transform hover:scale-110">
                    <FaPlayCircle />
                  </button>
                  <button className="text-white text-4xl hover:text-green-400 transition-transform transform hover:scale-110">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          
        </div>

        </div>
        <div>
        <h2 className="text-gray-300 text-lg mt-6 mb-4">Your Tv </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <div
              className="relative group rounded-lg overflow-hidden bg-gray-900 shadow-lg transform transition-transform duration-300 ease-out hover:scale-110 hover:z-20"
            >
              <img
                src={userLogo}
                alt="Movie Poster"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <img
                src={userLogo}
                alt="User"
                className="w-8 h-8 absolute top-3 left-3 border-2 border-white  shadow-md"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="flex gap-6">
                  <button className="text-white text-4xl hover:text-red-500 transition-transform transform hover:scale-110">
                    <FaPlayCircle />
                  </button>
                  <button className="text-white text-4xl hover:text-green-400 transition-transform transform hover:scale-110">
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            </div>
          
        </div>

        </div>
      </div>
    </div>
  );
};

export default MyList;
