import React from 'react'
import { useEffect,useRef } from 'react';
import '../App.css'
import arrow from "../assets/Arrow2.png"
import { useNavigate } from 'react-router-dom';
import bead1 from '../assets/bead1.png'
import bead2 from '../assets/bead2.png'
import bead3 from '../assets/bead3.png'
import bead4 from '../assets/bead4.png'
import bead5 from '../assets/bead5.png'

function Bookbottom_banner() {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate('/contact')
       }
       const imagesRef = useRef([]);

       useEffect(() => {
        const fadeInOnScroll = () => {
            imagesRef.current.forEach((image, index) => {
                if (isElementInViewport(image)) {
                    setTimeout(() => {
                        image.classList.add('opacity-100');
                        image.classList.remove('opacity-0');
                    }, index * 500); // Adjust the delay value here (500ms for example)
                }
            });
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); // To run the function initially in case the elements are already in view.

        return () => {
            window.removeEventListener('scroll', fadeInOnScroll);
        };
    }, []);

  return (
    <div className="w-full bg-[#FFF0E7]  flex  justify-center items-center px-0 md:px-20 py-10 md:py-20">
    <div className="w-full md:w-[90%]  flex flex-col md:flex-row justify-between items-center">
    <div className=' w-full md:w-[600px] h-[500px] md:h-[450px] relative'>
            <img ref={(el) => imagesRef.current.push(el)} src={bead1} alt="" className='absolute top-6 left-[15%] md:left-[20%]   transition-all duration-500 opacity-0' />
            <img ref={(el) => imagesRef.current.push(el)} src={bead2} alt="" className='absolute top-7 left-[42%]  md:left-[38%] transition-all duration-500 opacity-0' />
            <img ref={(el) => imagesRef.current.push(el)} src={bead3} alt="" className='absolute left-[48%]  top-[25%] md:left-[45%] transition-all duration-500 opacity-0' />
            <img ref={(el) => imagesRef.current.push(el)} src={bead4} alt="" className='absolute left-[30%]  top-[45%] md:left-[35%] transition-all duration-500 opacity-0' />
            <img ref={(el) => imagesRef.current.push(el)} src={bead5} alt="" className='absolute left-[26%]  top-[65%] md:left-[30%] transition-all duration-500 opacity-0' />
            <img ref={(el) => imagesRef.current.push(el)} src={bead1} alt="" className='absolute left-[26%]  top-[85%] md:left-[28%] transition-all duration-500 opacity-0' />
        </div>
      <div className='w-full md:w-[50%] flex flex-col gap-6 '>
        <h1 className=" gabarito text-[50px] md:text-[74.38px]">Have questions?</h1>
        <p className=" gabarito text-[22px] md:text-[32px]">There’s always time between batches to help! Reach out to us with any questions or concerns.</p>
        
        <button  onClick={handleSubmit} className='px-10 w-full lg:w-[70%] md:px-5 text-[20px] md:text-[32px] gabarito py-2 border-2 border-black rounded-full flex justify-center items-center gap-4 ' >Contact Us<img src={arrow}  alt="" /></button>
        
      </div>
    </div>

  </div>
  )
}

export default Bookbottom_banner