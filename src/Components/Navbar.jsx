import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import userLogo from '../assests/logo/userlogo.jpeg';

const categories = [
  "Action", "Comedy", "Drama", "Sci-Fi", "Horror",
  "Romance", "Thriller", "Documentary", "Fantasy", "Anime"
];

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // 👈 new state
  const shouldShowCategories = showCategories || isHovered;

  return (
    <>
      <div className="absolute w-full z-50">
        <div className="hidden md:flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md shadow-md border-b border-white/10">
          
          {/* Left: Logo & Category Button */}
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">Netflix</h1>

            <div className="relative">
              <button
                onClick={() => setShowCategories((prev) => !prev)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-white text-sm font-semibold transition-all"
              >
                All Categories <IoMdMenu size={18} />
              </button>

              {/* Dropdown */}
              {shouldShowCategories && (
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setShowCategories(false);
                  }}
                  className="absolute top-12 left-0 w-48 bg-black/90 border border-white/10 rounded-lg shadow-xl overflow-hidden z-50"
                >
                  <ul className="flex flex-col">
                    {categories.map((cat, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 hover:bg-white/10 text-white text-sm cursor-pointer transition"
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Middle: Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search movies..."
              className={`rounded-full w-72 px-5 py-2 text-white placeholder-white/80 bg-white/20 backdrop-blur-md border border-white/10 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform duration-500 ease-in-out ${
                showSearch ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-white">
            <FaSearch size={18} onClick={() => setShowSearch(!showSearch)} className="hover:text-red-500 transition cursor-pointer" />
            <IoIosNotifications size={20} className="hover:text-red-500 transition cursor-pointer" />
            <HiDownload size={20} className="hover:text-red-500 transition cursor-pointer" />
            <RiMenu3Fill
              size={20}
              onClick={() => setShowSidebar(true)} // 👈 open sidebar
              className="hover:text-red-500 transition cursor-pointer"
            />
           
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
  className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black to-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
    showSidebar ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Header with User Info */}
  <div className="flex justify-between items-center p-4 border-b border-white/10">
    <div className="flex items-center gap-3">
      <img
        src={userLogo}
        className="w-11 h-11 rounded-full border border-white/20 shadow-md"
        alt="User"
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

  {/* Menu Items */}
  <ul className="px-4 py-6 space-y-4 text-sm font-medium">
    <li className="hover:text-red-500 cursor-pointer transition">My List</li>
    <hr className="border-white/10" />
    <li className="hover:text-red-500 cursor-pointer transition">Downloads</li>
    <hr className="border-white/10" />
    <li className="hover:text-red-500 cursor-pointer transition">Settings</li>
    <hr className="border-white/10" />
    <li className="hover:text-red-500 cursor-pointer transition">Help Center</li>
  </ul>
</div>

    </>
  );
};

export default Navbar;
