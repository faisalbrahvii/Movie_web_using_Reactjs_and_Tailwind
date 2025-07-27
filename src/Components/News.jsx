import React from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";
import { news } from '../Data/Data';

const News = () => {
  return (
    <div className="bg-black w-full py-12">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        
        <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl font-bold mb-10">Latest News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={item.image} alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-white text-sm">{item.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-12 px-6 md:px-0">
          <BsArrowLeft className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          
          <div className="flex gap-2">
            <GoDot className="text-white text-xl" />
            <GoDotFill className="text-white text-xl" />
            <GoDot className="text-white text-xl" />
          </div>

          <BsArrowRight className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
        </div>

      </div>
    </div>
  );
};

export default News;
