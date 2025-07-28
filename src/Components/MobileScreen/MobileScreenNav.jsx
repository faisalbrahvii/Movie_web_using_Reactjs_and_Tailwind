import React, { useState } from 'react';
import userLogo from '../../assests/logo/userlogo.jpeg';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5"; // Close icon

const categories = [
  "Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy",
  "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller", "Animation"
];

const MobileScreenNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className='w-full z-50 p-4 bg-black/90'>
        <div className='flex items-center justify-between'>
          <img
            src={userLogo}
            className="w-10 h-10 rounded-full border border-white/20 shadow-md"
            alt="User"
          />
          <div className='flex items-center gap-3 text-white text-2xl'>
            <MdDownloadDone />
            <MdSearch />
          </div>
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-3 mt-4'>
          <button
            className="flex items-center gap-4 border hover:bg-white/20 px-4 py-1 rounded-full text-white text-sm font-semibold transition"
          >
            TV Shows
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 border hover:bg-white/20 px-4 py-1 rounded-full text-white text-sm font-semibold transition"
          >
            All Categories <RiArrowDropDownLine className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] bg-black text-white flex flex-col">
          {/* Top bar with close */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <h2 className="text-lg font-semibold">Categories</h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-white text-2xl"
            >
              <IoClose />
            </button>
          </div>

          {/* Categories List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-lg px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md cursor-pointer"
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
