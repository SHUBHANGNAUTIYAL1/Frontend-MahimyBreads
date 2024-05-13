import React from 'react'
import herobread from "../assets/herobread.png"
import Arrow from '../assets/Arrow2.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import b5 from '../assets/b5.png'
import b6 from '../assets/b6.png'
import b7 from '../assets/b7.png'

import "../App.css"
function HeroSection() {

  
  return (
    <div className='flex h-[400px] md:h-[800px] w-full py-10 md:py-20 bg-[#FEFAEA] items-center justify-center relative '>
      <div className='w-full md:w-[90%] h-full flex flex-row  md:gap-0  justify-between '>
        <div className='w-[50%] flex flex-col  mt-20  ml-10 '>
          <div className='w-full relative  '>
            <h1 className='just-another-hand-regular text-[60px] md:text-[158px]'>Freshness</h1>
            <p className='habibi-regular text-[30px] md:text-[78px] top-[60%] left-[15%] absolute'>meets</p>
            <p className='gabarito text-[40px] md:text-[110px] leading-[44px] md:leading-[120px] bg-[#A4CF25] bg-cover absolute'>delight</p>
          </div>
          <div className=' mt-[40%] md:mt-[35%]'>
          <button  className='px-4   md:px-10 text-[16px] md:text-[32px] gabarito py-2 border-2 border-black rounded-full flex justify-center items-center gap-4 ' >Taste Now<img src={Arrow} className="h-[20px] md:h-[30px]" alt="" /></button>
          </div>

           
        </div>
        <div className='w-[50%]  flex justify-center items-center'>
         <img src={herobread} alt="" className=" z-20 relative" />
         </div>

         <img src={b1} alt="" className='absolute animate-b1 hidden md:block transition-all duration-1000 ' loading="lazy" />
         <img src={b2} alt="" className='absolute animate-b2 hidden md:block transition-all duration-1000' loading="lazy" />
         <img src={b3} alt="" className='absolute animate-b3 hidden md:block transition-all duration-1000' loading="lazy" />
         <img src={b4} alt="" className='absolute animate-b4 hidden md:block transition-all duration-1000' loading="lazy" />
         <img src={b5} alt="" className='absolute  animate-b5 hidden md:block transition-all duration-1000' loading="lazy" />
         <img src={b6} alt="" className='absolute  animate-b6 hidden md:block transition-all duration-1000' loading="lazy" />
         <img src={b7} alt="" className='absolute  animate-b7 hidden md:block transition-all duration-1000'loading="lazy" />

      </div>
    </div>
  )
}

export default HeroSection