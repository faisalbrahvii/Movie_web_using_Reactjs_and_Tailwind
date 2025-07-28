import React, { useState } from 'react';
import userLogo from '../../assests/logo/userlogo.jpeg';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";



const MobileScreenNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className=' w-full z-50 p-4 bg-black/90'>
      {/* Top user icons */}
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

      {/* Category Dropdown */}
      <div className='flex items-center gap-3 mt-4' >
        <button
          
          className="flex items-center  gap-4  border hover:bg-white/20 px-4 py-1 rounded-full text-white text-sm font-semibold transition"
        >
          TV Shows 
        </button>
          <button
            
            className="flex tems-center gap-4 border hover:bg-white/20 px-4 py-1 rounded-full text-white text-sm font-semibold transition"
          >
            All Categories <RiArrowDropDownLine className="text-2xl" />
          </button>

        
       
      </div>
    </div>
  );
};

export default MobileScreenNav;
