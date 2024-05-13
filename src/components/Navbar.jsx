import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import "../App.css";

function Navbar() {
  return (
    <div className="w-full bg-[#221609] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 fixed top-0 z-20">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 md:h-12" />
      </div>
      <div className="flex mt-4 md:mt-0 gap-6 items-center text-white font-Gabarito">
        <Link to="/" className="hover:text-gray-300">About Us</Link>
        <Link to="" className="hover:text-gray-300">Where to Buy</Link>
        <button className="bg-[#A4CF25] text-black p-2 md:px-4 rounded-lg w-[137px] h-[46px]">
          <Link to="/contact" className="hover:text-black">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
