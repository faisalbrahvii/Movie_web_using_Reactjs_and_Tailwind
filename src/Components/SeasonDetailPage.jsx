import React from 'react';
import { useLocation } from 'react-router-dom';

const SeasonDetailPage = () => {
  const location = useLocation();
  const { season } = location.state || {}; 

  if (!season) {
    return <div>No season data found.</div>;
  }

  return (
    <div className="container p-5">
      <div
          className="relative mb-4 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${season.image})`,
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 rounded-lg"></div>
          <div className="absolute bottom-10 p-4 w-full">
            <div className="flex items-center text-white font-semibold">
              
              <p>SERIES</p>
            </div>
            <h1 className="text-7xl font-bold mt-[-8px] text-white">
              {season.name || "Episode Name"}
            </h1>
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-2">
                
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SeasonDetailPage;
