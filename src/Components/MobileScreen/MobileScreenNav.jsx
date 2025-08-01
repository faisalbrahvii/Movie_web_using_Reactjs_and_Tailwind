import React, { useState } from 'react';
import userLogo from '../../assests/logo/logoos.png';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoArrowBackSharp } from "react-icons/io5"; // <-- left arrow
import { useNavigate } from 'react-router-dom';

const categories = [
  "Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy",
  "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller", "Animation"
];

const MobileScreenNav = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  return (
    <>
     
      <div className='fixed w-full z-50 bg-black/35 backdrop-blur-sm  p-4   top-0 left-0'>
        <div className='flex items-center justify-between'>
          <img
            src={userLogo}
            className="w-10 h-10 rounded-full border border-white/20 shadow-md object-cover"
            alt="User"
          />
          <div className='flex items-center gap-4 text-white text-2xl'>
            <MdDownloadDone className="cursor-pointer" />
            <MdSearch className="cursor-pointer" onClick={() => navigate("/search")} />
          </div>
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-3 mt-4 overflow-x-auto'>
          <button
            className="flex-shrink-0 flex items-center gap-2 border border-white/30 hover:bg-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium transition"
          >
            TV Shows
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex-shrink-0 flex items-center gap-1 border border-white/30 hover:bg-white/20 px-4 py-1 rounded-full text-white text-sm font-medium transition"
          >
            All Categories <RiArrowDropDownLine className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] bg-black flex flex-col">
          {/* Top bar with back button */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <button
              onClick={() => setShowModal(false)}
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10"
            >
              <IoArrowBackSharp />
            </button>
            <span className="text-white text-lg font-medium">All Categories</span>
          </div>

          {/* Category list */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6">
            <div className="grid grid-cols-1 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="text-base text-white text-center py-3 bg-white/10 hover:bg-white/20 rounded-md cursor-pointer font-medium transition"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileScreenNav;
