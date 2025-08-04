import React, { useState } from 'react';
import userLogo from '../../assests/logo/logoos.png';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const MobileScreenNav = () => { 
  const navigate = useNavigate();
  
  return (
    <>
     
      <div className=' w-full z-50 bg-black/95 backdrop-blur-sm  p-4     top-0 left-0'>
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
        </div>

        
      

     
    </>
  );
};

export default MobileScreenNav;
