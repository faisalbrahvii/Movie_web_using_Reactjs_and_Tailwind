import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsTrophy } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=afcaa692aad9ee3412271fa7b8d4fba1&language=en-US&append_to_response=videos`);
        const data = await res.json();
        setMovie(data);

        const trailer = data.videos?.results.find(
          vid => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailerKey(trailer?.key || null);
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div className="text-white text-center mt-20">Loading movie...</div>;
  }

  return (
    <div className="bg-black text-white px-4 sm:px-6 pt-16 pb-10 min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Poster */}
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-xl w-full object-cover shadow-md"
          />
          {trailerKey && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setShowModal(true)}
            >
              <FaRegCirclePlay size={56} className="text-white bg-black/60 rounded-full p-2" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">{movie.title}</h1>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 text-gray-400 text-sm mb-2">
            {movie.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          {/* Metadata */}
          <div className="flex gap-4 flex-wrap text-gray-400 text-sm mb-4">
            <p>{movie.release_date?.slice(0, 4)}</p>
            <p>{movie.vote_average}⭐</p>
            <p>{movie.runtime} min</p>
          </div>

          {/* Overview */}
          <p className="text-gray-300 mb-5 text-sm leading-relaxed sm:text-base">
            {movie.overview}
          </p>

          {/* TMDB Rating Info */}
          <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-md mb-5">
            <BsTrophy size={22} className="text-yellow-400" />
            <p className="text-sm text-gray-300">
              Critically acclaimed on TMDB with a rating of {movie.vote_average}.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {trailerKey && (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm"
              >
                <FaRegCirclePlay size={16} /> Trailer
              </button>
            )}
            <button className="flex items-center gap-2 border border-gray-600 hover:bg-gray-800 px-4 py-2 rounded-md text-sm">
              <FaArrowAltCircleRight size={16} /> Add to List
            </button>
          </div>

          {/* Like/Dislike */}
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-green-500 hover:bg-green-600 transition">
              <AiFillLike size={20} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-red-500 hover:bg-red-600 transition">
              <AiFillDislike size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-3">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-black font-bold text-2xl z-10"
            >
              &times;
            </button>
            {trailerKey ? (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Trailer"
                ></iframe>
              </div>
            ) : (
              <div className="p-6 text-black text-center">
                <p>Trailer not available.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Optional Dot Indicator */}
      <div className="mt-10 flex justify-center gap-2 text-gray-600">
        <GoDotFill className="text-white" />
        <GoDot />
        <GoDot />
      </div>
    </div>
  );
};

export default Details;
