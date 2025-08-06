 import React, { useRef, useState } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import { IoClose } from "react-icons/io5";
  import NLogo from '../../assests/logo/logoos.png';
  import { FaPlay, FaPlus } from "react-icons/fa6";
  import { AiOutlineLike } from "react-icons/ai";
  import { BsBadgeHdFill } from "react-icons/bs";
  import { FaAd } from "react-icons/fa";
  import { MdMessage } from "react-icons/md";
  import { GoPlus } from "react-icons/go";
  import { IoArrowBackSharp } from "react-icons/io5";

const ModelPage = () => {
 
  
    const sectionRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [showEpisodes, setShowEpisodes] = useState(false);
    const initialData = location.state?.selectSession;
    const [currentData] = useState(initialData);
    const [selectedSeason, setSelectedSeason] = useState(currentData?.seasons?.[0]);
  
    if (!currentData) {
      return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-2/3 p-6 text-center">
            <p className="text-gray-700 text-lg">No episode data found.</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  
    const closeModal = () => navigate(-1);
    const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    const handleSeasonClick = (season) => {
      setSelectedSeason(season);
    };
  
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
  
        <div className="w-11/12 lg:w-4/5 max-h-[90vh] overflow-y-auto no-scrollbar rounded-2xl z-20 relative bg-black shadow-2xl">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 left-4 text-white text-3xl z-30 hover:text-red-500 transition  p-3"
          >
            <IoArrowBackSharp />
          </button>
  
          {/* Header */}
          <div
            className="relative bg-cover bg-center h-[500px] rounded-t-2xl"
            style={{ backgroundImage: `url(${currentData.backgroundimage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-10 left-6 md:left-12 text-white z-20">
              <div className="flex items-center gap-3 text-sm font-medium mb-2">
                <img src={NLogo} className="w-8 h-8 object-contain" alt="logo" />
                <p>SERIES</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">{currentData.name}</h1>
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={scrollToSection}
                  className="bg-white text-black font-semibold text-lg px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300 transition"
                >
                  <FaPlay /> Play
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                  <FaPlus />
                </button>
                <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                  <AiOutlineLike />
                </button>
              </div>
            </div>
          </div>
  
          {/* Info Section */}
          <div className="p-5 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm font-medium">
                  <span>{currentData.year}</span>
                  <span>{currentData.Duration}</span>
                  <BsBadgeHdFill size={18} />
                  <FaAd size={18} />
                  <MdMessage size={18} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gray-300 text-black px-3 py-1 text-sm rounded-full font-semibold flex items-center">
                    18 <GoPlus className="ml-1" />
                  </span>
                  <p className="text-white text-sm">Lorem ipsum, dolor sit aut! Voluptate, cumque.</p>
                </div>
              </div>
              <div className="text-sm space-y-2">
                <div className="flex gap-2">
                  <span className="text-gray-400 font-semibold">Cast:</span>
                  <p className="text-white">{currentData.Cast}</p>
                </div>
                
              </div>
            </div>
  
            {/* Description */}
            <div className="text-white">
              <h1 className="text-base font-bold text-gray-400">Total: <span className="text-white">{currentData.Duration}</span></h1>
              <p className="mt-2 text-sm text-gray-300">{currentData.description}</p>
            </div>
          </div>
  
          <hr className="border-gray-600" />
  
          {/* Seasons / Episodes */}
          {!selectedSeason || !showEpisodes ? (
            <section className="p-5" ref={sectionRef}>
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-white text-2xl font-bold">Seasons</h1>
                <p className="text-gray-300 font-medium">{currentData?.seasons?.length} Seasons Available</p>
              </div>
              {currentData?.seasons?.map((season) => (
                <div
                  key={season.id}
                  onClick={() => {
                    handleSeasonClick(season);
                    setShowEpisodes(true);
                  }}
                  className={`w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-5 mb-4 cursor-pointer transition`}
                >
                  <div className="grid grid-cols-3 items-center gap-5">
                    <div className="flex items-center col-span-1">
                      <p className="text-white text-xl font-bold">{season.id}</p>
                      <img src={season.image || NLogo} className="w-20 ml-4  rounded-md" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <div className="flex justify-between text-white font-semibold">
                        <h2>{season.name}</h2>
                        <p>{season.episodes.length} Episodes</p>
                      </div>
                      <p className="text-sm text-gray-300">{season.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="p-5 space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-2xl font-bold">Episodes of {selectedSeason.name}</h2>
                <button
                  onClick={() => setShowEpisodes(false)}
                  className="bg-white text-black text-sm px-4 py-1 rounded hover:bg-gray-200"
                >
                  ← Back to Seasons
                </button>
              </div>
              {selectedSeason?.episodes?.map((episode) => (
                <div
                  key={episode.id}
                  className="bg-slate-800 hover:bg-slate-700 rounded-xl p-5 cursor-pointer transition"
                >
                  <div className="grid grid-cols-3 items-center gap-5">
                    <div className="flex items-center col-span-1">
                      <p className="text-white text-xl font-bold">{episode.id}</p>
                      <img src={episode.image || NLogo} className="w-20 ml-4 rounded-md" />
                    </div>
                    <div className="col-span-2 space-y-1">
                      <div className="flex justify-between text-white font-semibold">
                        <h2>{episode.name}</h2>
                        <h2>{episode.duration}</h2>
                      </div>
                      <p className="text-sm text-gray-300">{episode.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    );
  };
  
  
  


export default ModelPage
