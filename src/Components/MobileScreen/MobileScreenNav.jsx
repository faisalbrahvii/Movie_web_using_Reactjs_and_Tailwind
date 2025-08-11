import React from 'react';
import userLogo from '../../assests/logo/logoos.png';
import { MdDownloadDone, MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileScreenNav = () => { 
  const navigate = useNavigate();

  // Get MyList count from Redux
  const myList = useSelector((state) => state.myList);
  const myListCount = myList.length;

  return (
    <>
      <div className="w-full z-50 bg-black/95 backdrop-blur-sm p-4 top-0 left-0">
        <div className="flex items-center justify-between">
          <img
            src={userLogo}
            className="w-10 h-10 rounded-full border border-white/20 shadow-md object-cover"
            alt="User"
          />

          <div className="flex items-center gap-4 text-white text-2xl">
            {/* My List with Responsive Badge */}
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/MyList")}
            >
              <MdDownloadDone className="hover:text-red-500 transition" />
              {myListCount > 0 && (
                  <span
  className="
    absolute -top-1.5 -right-1.5
    bg-red-500 text-white
    text-[10px] sm:text-[10px]
    font-bold rounded-full
    px-[4px] py-[1px]
    flex items-center justify-center
    min-w-[16px] min-h-[16px]
    leading-none
  "
>
  {myListCount}
</span>

              )}
            </div>

            {/* Search Icon */}
            <MdSearch
              className="cursor-pointer hover:text-red-500 transition"
              onClick={() => navigate("/search")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileScreenNav;
