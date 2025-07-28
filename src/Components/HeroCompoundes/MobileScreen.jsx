import React from 'react';
import HeroImages from '../../assests/Display/2.jpeg';
import { FaPlay, FaPlus } from "react-icons/fa6";

const MobileScreen = () => {
    
  return (
    <div className="relative w-full h-[430px] sm:h-[460px] md:h-[500px] overflow-hidden  px-2 sm:px-4 bg-black/85">
      {/* Background Image */}
      <img
        src={HeroImages}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover p-4"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content on top of image */}
      <div className="absolute bottom-6 left-0 right-0 px-4 flex flex-col items-center text-white text-center p-4">
        {/* Movie Title */}
        <h2 className="text-[20px] sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Movie Title</h2>

        {/* Action Buttons */}
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <button className="flex items-center gap-2 bg-white text-black px-5 py-[6px] sm:px-6 sm:py-2 rounded-md font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
            <FaPlay /> Play
          </button>
          <button className="flex items-center gap-2 bg-white/20 text-white px-5 py-[6px] sm:px-6 sm:py-2 rounded-md font-semibold border border-white hover:bg-white/30 transition text-sm sm:text-base">
            <FaPlus /> My List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
