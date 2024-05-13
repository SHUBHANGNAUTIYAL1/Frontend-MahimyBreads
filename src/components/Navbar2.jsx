
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import "../App.css";
import { useNavigate } from 'react-router-dom';

export const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleSubmit=()=>{
   navigate('/contact')
  }

  return (
    <div className=" font-Gabarito fixed top-0 bg-[#221609]  w-[100vw] flex justify-between items-center px-4 md:px-[48px] py-6   md:text-[18px] z-50">
      <a href="/" className="relative ">
        <img src={logo} alt="logo" className="w-[100%]" width={100} />
        
      </a>
      <div className="hidden md:flex gap-16 text-white  justify-between items-center font-arhivo">
        
       
        <Link to="/about" className="hover:text-gray-300">About us</Link>
        <Link to="/book" className="hover:text-gray-300">Where to Buy</Link>
        <button onClick={handleSubmit} className="bg-[#A4CF25] text-black p-2 md:px-4 rounded-lg w-[137px] h-[46px]">
          Contact Us
        </button>
      </div>
      <div className="md:hidden flex items-center justify-between">
        {showMenu ? (
          <X
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Menu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className="  md:hidden fixed top-0 left-0 w-[85vw] h-[100%]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-gradient-to-l from-[#230c02] to-[#221609] text-white z-[50] font-semibold text-[24px] ">
          <X className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300">About Us</Link>
          <Link to="" onClick={toggleMenu} className="hover:text-gray-300">Where to Buy</Link>
         
          <Link to="/contact" onClick={toggleMenu}className="hover:text-gray-300">Contact Us</Link>
          
          
        </div>
      )}

    </div>
  );
};
