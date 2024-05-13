import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import delivery1 from '../assets/delivery1.png'
import delivery2 from '../assets/delivery2.png'
import delivery3 from '../assets/delivery3.png'
import delivery4 from '../assets/delivery4.png'
import arrow from "../assets/Arrow2.png"


const banners = [
    {
        title:'Modern Machinery',
        img:delivery1
    },
    {
        title:'Automated Process',
        img:delivery2
    },
    {
        title:'Latest Technology',
        img:delivery3
    },
    {
        title:'Untouched by Hands',
        img:delivery4
    }
]

function AvailabilityBanner() {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate('/contact')
       }
  return (
    <div className="w-full  bg-[#FFF4BA] flex  justify-center items-center px-5 md:px-20 py-10 md:py-20">
      <div className="w-full md:w-[90%]  flex flex-col justify-center items-center gap-6 md:gap-16">
      
        <h1 className="gabarito text-center  text-[58.38px] font-semibold">We are available at</h1>
        
        <div className=" flex flex-col md:flex-row items-center justify-between gap-12 md:gap-28">
        {
            banners.map((banner,index)=>(
               <div className="flex flex-col justify-center items-center gap-4  " key={index}>
                 <img src={banner.img} alt="" />
               </div>

            ))
        }

        </div>
        <button  onClick={handleSubmit} className='px-6 md:px-10 text-[20px] md:text-[32px] gabarito py-2 border-2 border-black rounded-full flex justify-center items-center gap-4 ' >Contact Us<img src={arrow}  alt="" /></button>

      </div>
    </div>  
  )
}

export default AvailabilityBanner