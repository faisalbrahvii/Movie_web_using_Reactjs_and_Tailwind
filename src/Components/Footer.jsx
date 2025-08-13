import React from 'react';
import Logo from '../assests/logo/logooss.png';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white px-6 py-10'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
        {/* Logo Section */}
        <div className='flex flex-col items-center md:items-start'>
          <img src={Logo} alt="Logo" className='h-16 mb-4' />
          <p className='text-gray-400 text-sm text-center md:text-left'>
            Imagine Cinema — Your gateway to the latest blockbusters and entertainment.
          </p>
        </div>

        {/* Navigation */}
        <div className='flex flex-col items-center'>
          {/* <h2 className='font-semibold text-lg mb-2'>Navigation</h2> */}
          {/* <ul className='space-y-1 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>Upcoming</li>
            <li className='hover:text-white cursor-pointer'>Movies</li>
            <li className='hover:text-white cursor-pointer'>Contact</li>
          </ul> */}
        </div>

        {/* Contact + Social */}
        <div className='flex flex-col items-center md:items-end'>
          <h2 className='font-semibold text-lg mb-2'>Follow Us</h2>
          <div className='flex space-x-4 mb-4'>
            <FaFacebook className='hover:text-blue-500 cursor-pointer' />
            <FaInstagram className='hover:text-pink-500 cursor-pointer' />
            <FaTwitter className='hover:text-blue-400 cursor-pointer' />
          </div>
          <p className='text-gray-400 text-sm text-center md:text-right'>
            📞 0322 7075828 <br />
            ✉️ faisalherei43@gmail.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()} Imagine Cinema. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
