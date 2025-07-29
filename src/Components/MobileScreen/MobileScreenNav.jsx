import React, { useState } from 'react';
import userLogo from '../../assests/logo/userlogo.jpeg';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
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
      {/* Top Navbar */}
      <div className='w-full z-50 p-4 bg-black/90 fixed top-0 left-0'>
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
            className="flex-shrink-0 flex items-center gap-1 border border-white/30 hover:bg-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium transition"
          >
            All Categories <RiArrowDropDownLine className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] bg-black flex flex-col">
          {/* Top bar with close button */}
          <div className="flex justify-end px-4 py-3 border-b border-white/10">
            <button
              onClick={() => setShowModal(false)}
              className="text-white text-3xl p-2 rounded-full hover:bg-white/10"
            >
              <IoClose />
            </button>
          </div>

          {/* Category list */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-center items-center space-y-4 px-4 py-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-lg w-full text-center py-3 bg-white/10 hover:bg-white/20 rounded-md cursor-pointer font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileScreenNav;
