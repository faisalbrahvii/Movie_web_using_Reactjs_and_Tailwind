import React from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";
import { news } from '../Data/Data'
const News = () => {
  return (
    <div className='bg-black'>
      <div className='container mx-auto sm:text-center lg:text-start p-6 md:p-16'>

        <div className='flex justify-center'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>News</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 md:mt-12'>
           {news.map((items, index) => (
             <div key={index} className=''>
               <div>
                 <img src={items.image} alt="" className='w-full h-32 md:h-32 lg:h-32 rounded' />
               </div>
               <div className='flex justify-start mt-4 md:mt-6'>
                 <p className='text-white text-sm'>{items.des}</p>
               </div>
             </div>
           ))}
         </div>

             <div className='flex justify-between mt-8 md:mt-12'>
          <div><BsArrowLeft className='text-white text-2xl md:text-2xl lg:text-2xl' /></div>
          <div className='flex'>
            <GoDot className='text-white text-2xl md:text-2xl lg:text-2xl' />
            <GoDotFill className='text-white text-2xl md:text-2xl lg:text-2xl' />
            <GoDot className='text-white text-2xl md:text-2xl lg:text-2xl' />
          </div>
          <div><BsArrowRight className='text-white text-2xl md:text-2xl lg:text-2xl' /></div>
        </div>
      </div>
    </div>
  );
};

export default News;
