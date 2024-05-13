import React from 'react'

import delivery1 from '../assets/delivery1.png'
import delivery2 from '../assets/delivery2.png'
import delivery3 from '../assets/delivery3.png'
import delivery4 from '../assets/delivery4.png'
import delivery5 from '../assets/delivery5.png'
import delivery6 from '../assets/delivery6.png'
import arrow from "../assets/Arrow2.png"


const banners = [
    {
        img1:delivery1,
        img2:delivery4,
        img3:delivery1
    },
    {
        img1:delivery2,
        img2:delivery5,
        img3:delivery2
    },
    {
        img1:delivery3,
        img2:delivery6,
        img3:delivery3
    },
   
]

function Available() {
  return (
    <div className="w-full  bg-[#FFF4BA] flex  justify-center items-center px-5 md:px-20 py-10 md:py-20">
      <div className="w-full md:w-[90%]  flex flex-col justify-center items-center gap-6 md:gap-16">
      
       
        
        <div className=" flex flex-col md:flex-row items-center justify-between gap-28">
        {
            banners.map((banner,index)=>(
               <div className="flex flex-col justify-center items-center gap-12  " key={index}>
                <div className="flex items-center justify-center">
                 <img src={banner.img1} alt="" />
                </div>
                <div className="flex items-center justify-center">
                 <img src={banner.img2} alt="" />
                </div>
                <div className="flex items-center justify-center">
                 <img src={banner.img3} alt="" />
                </div>
               </div>

            ))
        }

        </div>
       

      </div>
    </div>  
  )
}

export default Available