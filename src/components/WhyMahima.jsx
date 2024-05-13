import React from 'react'
import '../App.css'
import fi_1 from '../assets/fi_1.png'
import fi_2 from '../assets/fi_2.png'
import fi_3 from '../assets/fi_3.png'
import fi_4 from '../assets/fi_4.png'

const banners = [
    {
        title:'Modern Machinery',
        img:fi_1
    },
    {
        title:'Automated Process',
        img:fi_2
    },
    {
        title:'Latest Technology',
        img:fi_3
    },
    {
        title:'Untouched by Hands',
        img:fi_4
    }
]

function WhyMahima() {
  return (
    <div className="w-full  bg-[#FFF4BA] flex  justify-center items-center px-5 md:px-20 py-10 md:py-20">
      <div className="w-full md:w-[90%]  flex flex-col justify-center items-center gap-6 md:gap-16">
      
        <h1 className="gabarito text-[50px]  md:text-[74.38px] font-semibold">Why  <span className='bg-[#A4CF25]'> Mahimy Foods? </span></h1>
        
        <div className=" flex flex-col md:flex-row items-center justify-between gap-20">
        {
            banners.map((banner,inder)=>(
               <div className="flex flex-col justify-center items-center gap-4  ">
                <div className="bg-[#5D2E17] flex justify-center items-center rounded-full h-[148px] w-[148px]">
                    <img src={banner.img} alt="" />
                </div>
                <div className='flex items-center justify-center w-[50%]'>
                <h1 className="gabarito text-[25.66px] font-bold text-center ">{banner.title}</h1>
                </div>
               </div>

            ))
        }

        </div>

      </div>
    </div>  
  )
}

export default WhyMahima