import React from 'react'
import Bread from "../assets/bread.png"

function Bread4() {
  return (
    <div className='w-full px-10 md:px-0 py-10 md:py-20 bg-[#FCDC2A]  flex items-center justify-center'>
    <div className='w-full md:w-[90%] flex flex-col md:flex-row  items-center gap-16 justify-center '>
      <img src={Bread} alt="" />
      <div className='w-full md:w-[44%]  flex flex-col gap-12'>
          <h1 className='font-bold text-[30px] md:text-[40px] gabarito '>Honey and Olive Oil Wheat Bread</h1>
          <p className=" text-[16px] gabarito">A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.A unique blend offering a rich, creamy texture.</p>
          <div className="flex w-full">
           <button className=' text-[16px] md:text-[21.55px] gabarito px-6 md:px-12 text-white bg-black py-4  rounded-2xl'>Order Now</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Bread4