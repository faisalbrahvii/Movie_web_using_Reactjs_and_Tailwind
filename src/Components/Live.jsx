import React from 'react'
import MainImage from '../assests/live.jpeg'
import { MdPlayArrow } from "react-icons/md";
import {  FaPlus , FaEye  ,FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { GrBackTen } from "react-icons/gr";
import { FaClosedCaptioning } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { TbArrowsMaximize } from "react-icons/tb";

const Live = () => {
  return (
    <div>
      <div className='container mx-auto relative'>
  <img className='w-full h-auto rounded-2xl' src={MainImage} alt='' />
  <div className='absolute top-0 left-0 w-full p-6 md:p-6 text-white'>
   <div className='flex justify-between'>
    <div>
    <h1 className='text-2xl font-bold mt-5'>Jurassic World : fallen Kingdom | 2018 </h1>
    <p className='text-slate-200 flex items-center gap-3 mt-2 text-sm '><FaEye /> Watching</p>
    </div>
    <div className='flex gap-4 p-6'>
    <FaHeart />
    <FaPlus />
    </div>
   </div>
    
  </div>
  <div className='absolute bottom-5  w-full p-2 md:p-2 text-white'>
   <div className='flex bg-black/85 rounded-3xl text-[18px] text-white p-6 justify-between items-center' >
   <IoMdPause />
   <GrBackTen />
   <p className='text-slate-400 text-sm'>28:25</p>
   <input type="range" className='w-[80%]'  name="" id="" />
   <p className='text-slate-400 text-sm'>-01:40:06</p>
   <FaClosedCaptioning />
   <HiSpeakerWave />
   <TbArrowsMaximize />
   </div>
    
  </div>
</div>

    </div>
  )
}

export default Live
