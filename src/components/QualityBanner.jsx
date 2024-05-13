import React from 'react'
import Nutrition from "../assets/Nutrition.png"
import baked from "../assets/baked.png"
import fresh from "../assets/fresh.png"
import "../App.css"


const banners = [
    {
        title:'Nutrition Rich',
        content:'Nutrition rich delights created to nourish your taste buds',
        img:Nutrition
    },
    {
        title:'100% Fresh',
        content:'Nutrition rich delights created to nourish your taste buds',
        img:fresh
    },
    {
        title:'Freshly Baked',
        content:'Nutrition rich delights created to nourish your taste buds',
        img:baked
    }
]

function QualityBanner() {
  return (
    <div className='w-full h-full flex flex-col items-center bg-[#FFFFE7] px-5 md:px-0 py-10 md:py-20 '>
        <div className=' gabarito w-full md:w-[90%]  block md:flex justify-between items-center gap-20 '>

           { banners.map((banner,index)=>(
            <div className={`w-full flex items-baseline mt-6 md:mt-0 justify-center ${index>0?'md:justify-end':''}`}>
                <div key={index} className={`flex md:gap-6 items-center justify-center w-[90%] ${index>1?'gap-4 ':'gap-6'}`}>
                    <div className=''>
                        <img src={banner.img} alt="" className='md:w-[100px] md:h-[100px]' />
                    </div>
                    <div className=' flex flex-col gap-4 '>
                        <h1 className='text-[24px] text-start font-bold'>{banner.title}</h1>
                        <p className={`${index>1?'w-full':'w-[70%]' } text-[16px] `}>{banner.content}</p>
                    </div>

                </div>
            </div>
           ))}
            
           
        </div>
    </div>
  )
}

export default QualityBanner