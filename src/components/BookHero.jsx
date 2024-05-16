import React from 'react'
import book from '../assets/book-hero-bg.png'
import "../App.css"
function BookHero() {
  return (
    <div className="w-full h-[400px] md:h-[637px] flex ">
    <img src={book} alt="" className="relative w-full h-full" />
    <div className='absolute top-28 left-10 md:left-28 '>
        <h1  className=" md:text-center text-white font-semibold gabarito text-[60px] md:text-[112.23px]">Find us in <span className='text-[#A4CF25]'>Store</span></h1>
    </div>
</div>
  )
}

export default BookHero