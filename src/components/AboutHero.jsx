import React from 'react'
import chef from '../assets/baker.png'
import "../App.css"

function AboutHero() {
  return (
    <div className="w-full h-[637px] flex justify-center items-center">
    <img src={chef} alt="" className="relative w-full h-full" />
    <div className='absolute '>
        <h1  className=" text-center text-white font-semibold gabarito text-[70px] md:text-[112.23px]">About <span className='text-[#A4CF25]'>Us</span></h1>
    </div>
</div>
  )
}

export default AboutHero