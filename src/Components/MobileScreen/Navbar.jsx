import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import userLogo from '../../assests/logo/userlogo.jpeg';
import { useNavigate } from 'react-router-dom';
import { MdDownloadDone, MdSearch } from "react-icons/md";

const categories = [
  "Action", "Comedy", "Drama", "Sci-Fi", "Horror",
  "Romance", "Thriller", "Documentary", "Fantasy", "Anime"
];

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const shouldShowCategories = showCategories || isHovered;
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed w-full z-50 bg-black/70 backdrop-blur-md shadow-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 md:px-8 py-3">

          {/* Left: Logo & Categories */}
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-[10px] sm:text-xs font-extrabold text-red-600 tracking-wide">still in operation not finished yet</h1>

            <div className="relative hidden md:block">
              <button
                onClick={() => setShowCategories((prev) => !prev)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold"
              >
                All Categories <IoMdMenu size={18} />
              </button>

              {shouldShowCategories && (
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setShowCategories(false);
                  }}
                  className="absolute top-12 left-0 w-44 bg-black/90 border border-white/10 rounded-lg shadow-xl z-50"
                >
                  <ul className="flex flex-col">
                    {categories.map((cat, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-white/10 text-white text-sm cursor-pointer"
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Middle: Search */}
          <div className="relative flex-1 mx-4 md:mx-8 max-w-xs hidden md:block">
            <input
  type="text"
  placeholder="Search movies..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onFocus={() => navigate("/search")}
  className={`w-full px-5 py-2 rounded-full text-white placeholder-white/70 bg-white/10 backdrop-blur-lg border border-white/10 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ${
    showSearch ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none'
  }`}
/>


          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-white">
            <FaSearch
              size={18}
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer hover:text-red-500 transition"
            />
            {/* <IoIosNotifications size={20} className="cursor-pointer hover:text-red-500 transition" /> */}
            <MdDownloadDone size={20} className="cursor-pointer hover:text-red-500 transition" />
            <RiMenu3Fill
              size={22}
              onClick={() => setShowSidebar(true)}
              className="cursor-pointer hover:text-red-500 transition"
            />
          </div>
        </div>

        {/* Mobile Search Input */}
        {showSearch && (
          <div className="block md:hidden px-4 pb-3">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-full px-4 py-2 rounded-full text-white placeholder-white/70 bg-white/10 border border-white/10 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black to-gray-900 text-white z-[9999] shadow-2xl transition-transform duration-300 ${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={userLogo}
              alt="User"
              className="w-11 h-11 rounded-full border border-white/20 shadow-md"
            />
            <div>
              <h1 className="text-base font-semibold">Faisal</h1>
              <p className="text-xs text-white/60">Premium Member</p>
            </div>
          </div>
          <IoMdClose
            size={24}
            onClick={() => setShowSidebar(false)}
            className="cursor-pointer hover:text-red-500 transition"
          />
        </div>

        <ul className="px-4 py-6 space-y-4 text-sm font-medium">
          <li className="hover:text-red-500 cursor-pointer">My List</li>
          <hr className="border-white/10" />
          <li className="hover:text-red-500 cursor-pointer">Downloads</li>
          <hr className="border-white/10" />
          <li className="hover:text-red-500 cursor-pointer">Settings</li>
          <hr className="border-white/10" />
          <li className="hover:text-red-500 cursor-pointer">Help Center</li>
          <hr className="border-white/10" />
          <li className="hover:text-red-500 cursor-pointer">Login </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
