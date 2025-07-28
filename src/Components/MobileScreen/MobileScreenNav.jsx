import React, { useState } from 'react';
import userLogo from '../../assests/logo/userlogo.jpeg';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";



const MobileScreenNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='absolute w-full z-50 p-4 '>
      {/* Top user icons */}
      <div className='flex items-center justify-between'>
        <img
          src={userLogo}
          className="w-10 h-10 rounded-full border border-white/20 shadow-md"
          alt="User"
        />
        <div className='flex items-center gap-3 text-white text-xl'>
          <MdDownloadDone />
          <MdSearch />
        </div>
      </div>

      {/* Category Dropdown */}
      <div className='flex items-center gap-3 mt-4' >
        <button
          
          className="flex items-center justify-between w-40 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold transition"
        >
          All Categories <RiArrowDropDownLine className="text-2xl" />
        </button>
          <button
            
            className="flex items-center justify-between w-40 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold transition"
          >
            All Categories <RiArrowDropDownLine className="text-2xl" />
          </button>

        
       
      </div>
    </div>
  );
};

export default MobileScreenNav;
