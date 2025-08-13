import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { GoDot, GoDotFill } from "react-icons/go";

const News = () => {
  const [loading, setLoading] = useState(true);

  // Example optimized images from Unsplash (resized for faster load)
  const news = [
    { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop", des: "Breaking news from the seaside." },
    { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop", des: "City lights inspire new trends." },
    { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&auto=format&fit=crop", des: "Tech innovations changing the world." },
    { image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&auto=format&fit=crop", des: "Sports updates from around the globe." },
    { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop", des: "Travel destinations gaining popularity." }
  ];

  // Preload images and show skeletons until they finish loading
  useEffect(() => {
    let loadedCount = 0;
    news.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === news.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  // Skeleton loader
  const SkeletonCard = () => (
    <div className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-700"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-black w-full py-12">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        
        <h1 className="text-white text-center lg:text-left text-3xl md:text-4xl font-bold mb-10">Latest News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {loading
            ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
            : news.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-white text-sm">{item.des}</p>
                  </div>
                </div>
              ))
          }
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
