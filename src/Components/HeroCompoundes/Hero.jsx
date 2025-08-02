import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { series } from "../../Data/Epdata";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(series[0]);

  const openModal = (webseries) => {
    navigate("/modalpage", { state: { selectSession: webseries } });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let currentIndex = 0;

    const scrollNext = () => {
      if (window.scrollY > 100) return;

      const items = scrollContainer.children;
      if (currentIndex >= items.length) {
        currentIndex = 0;
      }

      setCurrentItem(series[currentIndex]);

      items[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });

      currentIndex++;
    };

    scrollNext();
    const interval = setInterval(scrollNext, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-full text-white overflow-hidden transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${currentItem.backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full p-6 mt-24">
        {/* Left Side */}
        <div className="max-w-xl space-y-4 mt-20 md:mt-0 animate-fadeInLeft">
          <p className="text-slate-300 text-sm sm:text-base">
            ⏱ Duration:{" "}
            <span className="font-semibold">{currentItem.Duration}</span>
          </p>

          <div className="flex gap-2 text-sm sm:text-base text-slate-300">
            <p className="font-semibold text-white">🎭 Genre:</p>
            <p>{currentItem.genres}</p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif drop-shadow-lg mt-4">
            {currentItem.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mt-2">
            Dive into the gripping world of{" "}
            <span className="font-semibold">{currentItem.name}</span>. Explore,
            experience and enjoy cinematic storytelling like never before.
          </p>

          {/* ✅ Play here button */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => openModal(currentItem)}
              className="flex w-full max-w-[220px] items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-5 py-2 rounded-full backdrop-blur-sm transition duration-300 ease-in-out"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-12 md:mt-0 flex gap-6 items-end overflow-x-auto w-full scroll-smooth snap-x snap-mandatory px-2 scrollbar-hidden"
        >
          {series.map((webseries) => (
            <div
              key={webseries.id}
              className="relative w-40 sm:w-48 md:w-52 flex-shrink-0 group transition-transform duration-500 hover:scale-105 rounded-xl overflow-hidden shadow-xl snap-start border border-white/10 hover:border-white/20"
            >
              <img
                src={webseries.image}
                className="w-full h-64 object-cover rounded-xl"
                alt={webseries.name}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <div className="text-center w-full">
                  <div className="text-white font-semibold text-sm md:text-base mb-3">
                    {webseries.name}
                  </div>

                  <div className="flex justify-center w-full px-3">
                    <button
                      onClick={() => openModal(webseries)}
                      className="flex w-full max-w-[220px] items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-5 py-2 rounded-full backdrop-blur-sm transition duration-300 ease-in-out"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Play 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
