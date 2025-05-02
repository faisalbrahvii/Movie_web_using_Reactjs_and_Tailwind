import React from 'react'
import Logo from '../assests/logo/netflix.png'
import { FaFacebook ,FaInstagram ,FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-slate-400   w-full  mt-10 '>

    <div className='container mx-auto pl-5 '>
        <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-2 items-center    '>
          <div className=''>
          <img src={Logo} alt="" className='h-24' />  
          </div>
          <div className='flex '>
          <p className=' text-black text-[15px] mb-4 '>@ imagine Cinema all right reserved </p>

            
          </div>
      
         
        </div>
    </div>
    </div>
  )
}

export default Footer

{/* <div className='flex justify-between items-center'>
        <div>
            <img src={Logo} alt="" className='h-24' />
        </div>
        <div className=''>
            <ul className='flex gap-14 text-white'>
                <li>Home</li>
                <li>Schedule</li>
                <li>Movies</li>
                <li>News</li>
            </ul>
            <div className='text-center mt-14'>
            <h1 className='text-white font-bold'>faysalbrahvii43.com</h1>
            <p className='text-white font-sans'>03227075828</p>
            </div> 
        </div>
        <div className='flex gap-7 text-white '>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>
      </div>
        <div className='flex justify-end'>
            <p className='text-slate-300'>@ imagine Cinema all right reserved</p>
        </div> */}