import React from 'react';
import { FaHeart, FaEye, FaStar, FaPlus } from "react-icons/fa";
// import Batman from '../assests/row/1.jpeg';
import {display} from '../Data/Data.js'
const AddToCard = () => {
  return (
    <div className='p-4  bg-black'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center sm:justify-items-start'>
    {display.map((items, index) => (
      <div key={index} className='justify-self-center'>
        <div>
          <img src={items.image} alt="" className='rounded-lg' />
        </div>
        <div className='mt-4'>
          <p className='text-white text-[16px] font-bold'>{items.name}</p>
          <div className='text-white flex gap-10'>
            <div>
              <p className='text-[14px]'>{items.year}</p>
            </div>
           
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className='flex justify-center items-center mt-10'>
    <FaPlus className='text-white bg-gray-900 p-5 text-6xl rounded-full border' />
  </div>
</div>

  );
};

export default AddToCard;
