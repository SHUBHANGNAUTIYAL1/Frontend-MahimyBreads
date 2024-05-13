import React from 'react'
import '../App.css'

import bg_image from '../assets/bg-image.png'
const banners = [
    {
        title:'50+',
        sub:'Years of Legacy'
        
    },
    {
        title:'10+',
        sub:'Award wins'
        
    },
    {
        title:'100M+',
        sub:'Happy Customers'
        
    },
    {
        title:'25+',
        sub:'Healthy Products'
        
    }
]

function AboutDataBanner() {
  return (
    <div className="w-full h-[700px] md:h-[344px] flex flex-col  justify-center items-center  relative">
      <img src={bg_image} className="w-full h-full object-cover" alt="" />
      <div className="w-full px-4 md:px-0 md:w-[90%]   flex flex-col justify-center items-center gap-6 md:gap-10 absolute">
      
        <h1 className="gabarito text-[32px] md:text-[58.38px] font-semibold text-white">We are best at taste & Hygiene</h1>
        
        <div className=" flex flex-col md:flex-row items-center justify-between gap-20">
        {
            banners.map((banner,index)=>(
               <div className="flex flex-col justify-center items-center   " >
                
                <h1 className="gabarito text-[30px] md:text-[50px] text-[#A4CF25] font-bold  ">{banner.title}</h1>
                <h1 className="gabarito text-[16px] md:text-[30px] text-white  ">{banner.sub}</h1>
                
               </div>

            ))
        }

        </div>

      </div>
    </div>  
  )
}

export default AboutDataBanner