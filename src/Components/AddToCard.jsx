import React from 'react';
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { display } from '../Data/Data.js';

const AddToCard = () => {
  return (
    <div className='bg-black py-10 px-4 sm:px-6 lg:px-20'>
      {/* Section Heading */}
      <div className='text-center mb-10'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-2'>🎬 Upcoming Movies</h2>
        <p className='text-gray-400 text-sm sm:text-base max-w-xl mx-auto'>
          Stay tuned! Here's a glimpse of what's coming to your screens soon.
        </p>
      </div>

      {/* Movie Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {display.map((item, index) => (
          <div key={index} className='bg-[#111] rounded-lg overflow-hidden shadow-md hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-40 object-cover' />
            <div className='p-3'>
              <h3 className='text-white font-semibold text-base sm:text-lg mb-1 truncate'>{item.name}</h3>
              <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <FaCalendarAlt />
                <p>{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className='flex justify-center mt-12'>
        <button className='flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all duration-300'>
          <FaPlus className='text-lg' />
          <span className='text-sm sm:text-base font-medium'>Load More</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
