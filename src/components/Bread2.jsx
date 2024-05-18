import React from 'react'
import Bread from "../assets/bread.png"

function Bread2() {
  return (
    <div className='w-full py-10 md:py-20 bg-[#114232]  flex items-center justify-center px-10 md:px-0'>
      <div className=' w-full md:w-[90%] flex flex-col md:flex-row  items-center gap-16 justify-center '>
        <img src={Bread} alt="" />
        <div className=' w-full md:w-[44%]  flex flex-col gap-12'>
            <h1 className='font-bold text-[30px] md:text-[40px] gabarito text-white'>Coconut Milk Bread</h1>
            <p className="text-white text-[16px] gabarito">Our coconut milk bread kneaded with rich butter, delivers the perfect irresistible loaf. The coconut milk is extracted in the most hygienic conditions and the best quality of butter is used. Try this for the perfect breakfast partner.</p>
            <div className="flex w-full">
             <button className=' text-[16px] md:text-[21.55px] gabarito px-6 md:px-12 bg-[#A4CF25] py-4  rounded-2xl'>Order Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Bread2
