import React from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Add this
import userLogo from '../assests/logo/logoos.png';
import { OnlyOnMovieSite } from '../Data/Epdata';
import { FaPlayCircle } from 'react-icons/fa';

const TvShows = () => {
  const navigate = useNavigate(); // ⬅️ Use navigate hook

  const openModal = (movie) => {
    navigate('/OnlyOnModel', {
      state: {
        selectSession: movie,
      },
    });
  };

  return (
    <div className="bg-black px-4 sm:px-6 md:px-8 py-5">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
        Only on MovieSite
      </h2>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4">
          {OnlyOnMovieSite.map((movie, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-48 sm:w-56 md:w-60 group rounded overflow-hidden"
            >
              {/* Movie Thumbnail */}
              <img
                src={movie.image}
                alt={`Movie ${index}`}
                className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* User Logo */}
              <img
                src={userLogo}
                alt="User"
                className="w-7 h-7 absolute top-2 left-2 rounded-full border border-white"
              />

              {/* Clickable Play Icon */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                onClick={() => openModal(movie)} // ⬅️ onClick handler
              >
                <FaPlayCircle className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShows;
