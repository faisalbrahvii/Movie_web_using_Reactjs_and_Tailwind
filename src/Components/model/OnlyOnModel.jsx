import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import NLogo from '../../assests/logo/logoos.png';
import { FaPlay } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { BsBadgeHdFill } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../../redux/myListSlice";
import { FaCheck, FaPlus } from "react-icons/fa";
const OnlyOnModel = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [showEpisodes, setShowEpisodes] = useState(false);
  const initialData = location.state?.selectSession;
  const [currentData] = useState(initialData);
  const [selectedSeason, setSelectedSeason] = useState(currentData?.seasons?.[0]);
  const dispatch = useDispatch();
const myList = useSelector(state => state.myList);
const isInList = myList.some(item => item.id === currentData.id);

  if (!currentData) {
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
        <div className="bg-white rounded-lg w-full max-w-md p-6 text-center">
          <p className="text-gray-700 text-base sm:text-lg">No episode data found.</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
 const handleToggleList = () => {
  if (isInList) {
    dispatch(removeFromList(currentData.id));
  } else {
    dispatch(addToList({ ...currentData, type: "series" }));

  } 
};


  const closeModal = () => navigate(-1);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center overflow-y-auto">
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto rounded-2xl z-20 relative bg-black shadow-2xl no-scrollbar">
        
        <button
          onClick={closeModal}
          className="absolute top-3 left-4 text-white text-3xl z-30 hover:text-red-500 transition  p-3"
        >
          <IoArrowBackSharp />
        </button>

        <div
          className="relative bg-cover bg-center h-[350px] sm:h-[450px] rounded-t-2xl"
          style={{ backgroundImage: `url(${currentData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-4 sm:left-10 text-white z-20">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2">
              <img src={NLogo} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" alt="logo" />
              <p>SERIES</p>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold drop-shadow-md">{currentData.name}</h1>
            <div className="flex flex-wrap gap-3 mt-5">
              <button
                onClick={scrollToSection}
                className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-300 transition"
              >
                <FaPlay /> Play
              </button>
              <button
              onClick={handleToggleList}
              className="border border-white text-white px-3 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              {isInList ? <FaCheck /> : <FaPlus />}
            </button>

              
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <div className="flex flex-wrap gap-3 text-gray-400 text-sm font-medium">
                <span>{currentData.year}</span>
                <span>{currentData.Duration}</span>
                <BsBadgeHdFill size={16} />
                <FaAd size={16} />
                <MdMessage size={16} />
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-gray-300 text-black px-3 py-1 text-xs sm:text-sm rounded-full font-semibold flex items-center">
                  18 <GoPlus className="ml-1" />
                </span>
                <p className="text-white text-sm leading-relaxed">{currentData.description}</p>
              </div>
            </div>
            <div className="text-sm space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-400 font-semibold">Cast:</span>
                <p className="text-white">{currentData.Cast}.</p>
              </div>
            </div>
          </div>

          <div className="text-white">
            <p className="text-sm text-gray-300">{currentData.description}</p>
            <h1 className="text-sm font-bold text-gray-400 mt-2">
              Total: <span className="text-white">{currentData.Duration}</span>
            </h1>
          </div>
        </div>

        <hr className="border-gray-700" />

        {!selectedSeason || !showEpisodes ? (
          <section className="p-4 sm:p-5" ref={sectionRef}>
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-white text-xl sm:text-2xl font-bold">Seasons</h1>
              <p className="text-gray-300 text-sm">{currentData?.seasons?.length} Seasons Available</p>
            </div>
            {currentData?.seasons?.map((season) => (
              <div
                key={season.id}
                onClick={() => {
                  handleSeasonClick(season);
                  setShowEpisodes(true);
                }}
                className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 mb-4 cursor-pointer transition"
              >
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="flex items-center col-span-1">
                    <p className="text-white text-base font-bold">{season.id}</p>
                    <img src={season.image || NLogo} className="w-16 ml-3 rounded-md" />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <div className="flex justify-between text-white font-semibold text-sm">
                      <h2>{season.name}</h2>
                      <p>{season.episodes.length} Episodes</p>
                    </div>
                    <p className="text-xs text-gray-300">{season.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="p-4 sm:p-5 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg sm:text-2xl font-bold">Episodes of {selectedSeason.name}</h2>
              <button
                onClick={() => setShowEpisodes(false)}
                className="bg-white text-black text-xs sm:text-sm px-4 py-1 rounded hover:bg-gray-200"
              >
                ← Back to Seasons
              </button>
            </div>
            {selectedSeason?.episodes?.map((episode) => (
              <div
                key={episode.id}
                className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 cursor-pointer transition"
              >
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="flex items-center col-span-1">
                    <p className="text-white text-base font-bold">{episode.id}</p>
                    <img src={episode.image || NLogo} className="w-16 ml-3 rounded-md" />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <div className="flex justify-between text-white font-semibold text-sm">
                      <h2 className="md:text-sm sm:text-[10px]">{episode.name}</h2>
                      <p className="md:text-sm sm:text-[8px]">{episode.duration}</p>
                    </div>
                    <p className="text-xs text-gray-300">{episode.description}</p>
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

export default OnlyOnModel;
