import React from 'react'
import Nutrition from "../assets/Nutrition.png"
import baked from "../assets/baked.png"
import fresh from "../assets/fresh.png"
import "../App.css"


const banners = [
    {
        title:'Nutrition Rich',
        content:' Our breads use natural ingredients and farm fresh millets packed with nutritional benefits',
        img:Nutrition
    },
    {
        title:'100% Fresh',
        content:'Our breads are baked with finest coconut milk and farm fresh millets. We make it a point to bake small batches and keep our stocks fresh',
        img:fresh
    },
    {
        title:'Zero Additive',
        content:' Our company follows the zero preservatives and additives rule strictly. Our products are entirely natural.',
        img:baked
    }
]

function QualityBanner() {
  return (
    <div className='w-full h-full flex flex-col items-center bg-[#FFFFE7] px-5 md:px-0 py-10 md:py-20 '>
        <div className=' gabarito w-full md:w-[90%]  block md:flex justify-between items-center gap-20 '>

           { banners.map((banner,index)=>(
            <div className={`w-full flex items-baseline mt-6  lg:h-[200px] md:mt-0 justify-center ${index>0?'md:justify-end':''}`}>
                <div key={index} className={`flex md:gap-6  justify-center w-[90%] ${index>1?' gap-2 md:gap-4 ':'md:gap-6 gap-8'}`}  >
                    <div className=' md:h-[100px] mt-2'>
                        <img src={banner.img} alt="" className={`md:w-[150px] md:h-[100px] ${index<1?'w-[70px] md:w-[100px] md:h-[80px]':''}`} />
                    </div>
                    <div className=' flex flex-col gap-4  '>
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