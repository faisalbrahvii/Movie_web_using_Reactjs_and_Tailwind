import React, { useRef, useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import { FaPlus, FaEye, FaHeart, FaStar, FaClosedCaptioning } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";
import { TbArrowsMaximize } from "react-icons/tb";

const Live = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const rewind10 = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const forward10 = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  return (
    <div className="bg-black text-white px-4 py-6 md:py-8">
      <div className="max-w-6xl mx-auto">

        {/* Video Player Section */}
        <div className="relative rounded-xl overflow-hidden">
          {/* Add your video src here */}
          {/* <video
            ref={videoRef}
            src={MainVideo}
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
            controls={false}
          /> */}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black via-black/70 to-transparent z-10">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-lg sm:text-xl font-semibold">Jurassic World: Fallen Kingdom (2018)</h1>
                <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
                  <FaEye /> Watching Now
                </p>
              </div>
              <div className="flex gap-3 text-xl">
                <FaHeart className="cursor-pointer hover:text-red-500" />
                <FaPlus className="cursor-pointer hover:text-green-500" />
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-black/70 p-3 rounded-xl mt-4 text-sm md:text-base">
              <div className="flex gap-4 items-center text-lg">
                {isPlaying ? (
                  <IoMdPause className="cursor-pointer" onClick={togglePlayPause} />
                ) : (
                  <MdPlayArrow className="cursor-pointer" onClick={togglePlayPause} />
                )}
                <GrBackTen className="cursor-pointer" onClick={rewind10} />
                <GrForwardTen className="cursor-pointer" onClick={forward10} />
              </div>

              <div className="flex-1 flex items-center gap-2">
                <p className="hidden sm:block text-gray-400 text-xs">28:25</p>
                <input
                  type="range"
                  className="w-full accent-red-500 h-1"
                />
                <p className="hidden sm:block text-gray-400 text-xs">-1:40:06</p>
              </div>

              <div className="flex gap-3 text-lg">
                <FaClosedCaptioning className="cursor-pointer" />
                <HiSpeakerWave className="cursor-pointer" />
                <TbArrowsMaximize className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Placeholder Box for Video (remove this when you use actual video tag) */}
          <div className="h-[220px] sm:h-[300px] md:h-[400px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-lg">
            {/* Replace this with your <video> tag */}
            internal Issue !!
          </div>
        </div>

        {/* YouTube Trailer Section */}
        {/* <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Watch Trailer</h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vn9mMeWcgoM?rel=0"
              title="Jurassic World Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Live;
