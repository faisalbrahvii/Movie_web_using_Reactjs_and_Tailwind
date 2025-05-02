import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { GoDot, GoDotFill } from "react-icons/go";
import { FaRegCirclePlay } from "react-icons/fa6";
import { series } from '../Data/Epdata'; // adjust the path if needed

const Details = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const webseries = series.find(item => item.id === Number(id));

  if (!webseries) {
    return <div className="text-white text-center mt-20">Series not found.</div>;
  }

  return (
    <div className="flex items-center bg-black min-h-screen text-white p-8">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start">
        {/* Left side - Main Poster */}
        <div className="relative w-full max-w-md">
          <img src={webseries.image} alt={webseries.name} className="rounded-xl w-full object-cover shadow-lg" />
          <div className="absolute inset-0 flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
            <FaRegCirclePlay size={60} className="text-white bg-black/50 rounded-full p-2" />
          </div>
        </div>

        {/* Right side - Info */}
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4">{webseries.name}</h1>

          <div className="flex flex-wrap gap-3 text-gray-400 text-sm mb-2">
            {webseries.genres.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>

          <div className="flex gap-4 text-gray-400 text-sm mb-4">
            <p>{webseries.year}</p>
            <p>{webseries.rate}⭐</p>
            <p>{webseries.Duration}</p>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {webseries.description}
          </p>

          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg mb-6">
            <BsTrophy size={24} className="text-yellow-500" />
            <p className="text-gray-300 text-sm">
              Award-winning, critically acclaimed masterpiece.
            </p>
          </div>

          <div className="flex gap-4 mb-6">
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg text-white">
              <FaRegCirclePlay size={18} /> Play Trailer
            </button>
            <button className="flex items-center gap-2 border border-gray-600 hover:bg-gray-800 transition px-6 py-3 rounded-lg">
              <FaArrowAltCircleRight size={18} /> Add to List
            </button>
          </div>
          {showModal && (
        <div className="fixed inset-0  bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-5 text-white font-bold text-2xl"
            >
              &times;
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`${webseries.trailer}&autoplay=1`}
                // title={`${selectedSeries.name} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

          <div className="flex gap-4">
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-green-500 hover:bg-green-600 transition">
              <AiFillLike size={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-red-500 hover:bg-red-600 transition">
              <AiFillDislike size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Seasons */}
      {/* <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Seasons</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {webseries.seasons.map(season => (
            <div key={season.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <img src={season.image} alt={season.name} className="rounded-md mb-3" />
              <h3 className="text-lg font-bold mb-1">{season.name}</h3>
              <p className="text-gray-400 text-sm">{season.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Dots indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 text-gray-500">
        <GoDotFill className="text-white" />
        <GoDot />
        <GoDot />
        <GoDot />
        <GoDot />
      </div>
    </div>
  );
};

export default Details;
