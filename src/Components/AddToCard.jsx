import React from 'react';
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const AddToCard = () => {
  // 5 hardcoded upcoming movie entries
  const movies = [
    {
      title: "Deadpool & Wolverine",
      release_date: "2025-08-15",
      image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
    },
    {
      title: "Avengers: Secret Wars",
      release_date: "2025-11-07",
      image: "https://deadline.com/wp-content/uploads/2025/06/SPRMAN_Character_Art_Lex_Instavert_1638x2048_DOM.jpg?w=800"
    },
    {
      title: "Inside Out 2",
      release_date: "2025-06-13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnJzzHvuO7LxUnAp0Q70w_PpFYp3hq7_rlA&s"
    },
    {
      title: "Frozen III",
      release_date: "2025-12-20",
      image: "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg"
    },
    {
      title: "The Batman Part II",
      release_date: "2025-10-03",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECtw_44AO6uzul5Cjt2TqQhEk0ivZKZnz1w&s"
    }
  ];

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
        {movies.map((movie, index) => (
          <div key={index} className='bg-[#111] rounded-lg overflow-hidden shadow-md hover:scale-105 duration-300'>
            <img 
              src={movie.image} 
              alt={movie.title} 
              className='w-full h-40 object-cover' 
            />
            <div className='p-3'>
              <h3 className='text-white font-semibold text-base sm:text-lg mb-1 truncate'>{movie.title}</h3>
              <div className='flex items-center gap-2 text-gray-400 text-sm'>
                <FaCalendarAlt />
                <p>{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className='flex justify-center mt-12'>
        <button className='flex items-center gap-2 text-white  hover:bg-gray-700 px-6 py-1 rounded-sm  transition-all duration-300'>
          
          <span className='text-sm sm:text-base font-medium'>More Coming</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCard;
