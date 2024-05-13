import React from 'react'
import chef from '../assets/chef.png'
import "../App.css"

function ContactHero() {
  return (
    <div className="w-full h-[632.5px] flex justify-center items-center">
        <img src={chef} alt="" className="relative w-full h-full" />
        <div className='absolute '>
            <h1  className=" text-center text-white font-semibold gabarito text-[80px] md:text-[112.23px]">Contact <span className='text-[#A4CF25]'>Us</span></h1>
        </div>
    </div>
  )
}

export default ContactHero