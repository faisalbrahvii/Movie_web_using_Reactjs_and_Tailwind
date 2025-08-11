import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogo from '../assests/logo/logoos.png';
import { OnlyOnMovieSite } from '../Data/Epdata';
import { FaPlayCircle } from 'react-icons/fa';

const TvShows = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const openModal = (movie) => {
    navigate('/OnlyOnModel', {
      state: { selectSession: movie },
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const SkeletonLoader = () => {
    return (
      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative h-32 sm:h-36 md:h-40 flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 rounded-md bg-gray-700 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-black px-4 sm:px-6 md:px-8 py-5">
        <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
          Only on MovieSite
        </h2>
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="bg-black px-4 sm:px-6 md:px-8 py-5">
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
        Only on MovieSite
      </h2>

      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex gap-4">
          {OnlyOnMovieSite.map((movie, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 group rounded-md overflow-hidden"
            >
              <img
                src={movie.image}
                alt={`Movie ${index}`}
                className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={userLogo}
                alt="User"
                className="w-7 h-7 absolute top-2 left-2 rounded border border-white"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
                onClick={() => openModal(movie)}
              >
                <FaPlayCircle className="text-white text-4xl sm:text-5xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShows;
