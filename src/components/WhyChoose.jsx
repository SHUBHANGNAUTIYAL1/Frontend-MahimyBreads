import React from 'react'
import  { useState, useEffect } from 'react';
import Mask from '../assets/Mask group.png'
import "../App.css"
import leftleaf from "../assets/left-leaf.png"
import rightleaf from "../assets/right-leaf.png"
import hallmark from "../assets/hallmark.png"

function WhyChoose() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maskAnimationCompleted, setMaskAnimationCompleted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMaskAnimationEnd = () => {
        setMaskAnimationCompleted(true);
    };

    
  return (
    <div className='flex  w-full py-10 md:py-20 bg-[#FFF4BA] items-center justify-center'>
     <div className='w-[90%] h-full flex md:flex-row flex-col md:gap-0 gap-12 justify-between items-center '>
        <div className=' w-full md:w-[45%] flex flex-col gap-12 md:order-1 order-2 '>
            <h1 className="gabarito font-bold text-[32px] ">
                Why Choose Mahimy Bread?
            </h1>
            <div className="flex flex-col gabarito text-[16px] gap-4 w-[90%]  "> 
                <div className="flex gap-4">
                    <div className="flex items-center justify-center">
                    <img src={leftleaf} alt="" />
                    <img src={rightleaf} alt="" />
                    </div>
                    <p><span className='font-bold'>100% Eggless :</span> Our bread is crafted without the use of any eggs,making it suitable for vegtarians and those with dietary restrictions.</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center">
                        <img src={leftleaf} alt="" />
                        <img src={rightleaf} alt="" />
                    </div>
                    <p><span className='font-bold'>Unbeatable Quality :</span> Our bread is crafted using only the finest ingredients, ensuring superior taste and texture.</p>
                    </div>
                    <div className="flex gap-4">
                    <div className="flex items-center justify-center">
                            <img src={leftleaf} alt="" />
                            <img src={rightleaf} alt="" />
                        </div>
                        <p><span className='font-bold'>Wide Variety :</span> From traditional favourite to unique artisanal creations, we offer a diverse selection to satisfy every craving.</p>
                    
                    </div>  
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center">
                            <img src={leftleaf} alt="" />
                            <img src={rightleaf} alt="" />
                        </div>
                        <p><span className='font-bold'>Health Consciousness :</span> We prioritize your well-beign by using wholesome ingredients and avoiding artificial additives of preservatives.</p>
                        
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center">
                            <img src={leftleaf} alt="" />
                            <img src={rightleaf} alt="" />
                        </div>
                        <p><span className='font-bold'>Reliable Availability :</span> Count on us for consistent availability and prompt delivery , ensuring you never out of delicious bread.</p>
                        
                    </div>
            </div>

        </div>
        <div className="h-full md:h-[425px] w-[300px] md:w-[567px] md:order-2 order-1 relative ">
            <img src={Mask} alt=""  className={`h-full w-full ${scrollPosition > 100 ? 'animate-mask' : ''}`} 
                        onAnimationEnd={handleMaskAnimationEnd} />
              {maskAnimationCompleted && (
                        <img 
                            src={hallmark} 
                            alt="" 
                            className="spin  absolute top-[10%] md:top-[15%] left-[10%] h-[100px] md:h-[158px] opacity-100" 
                        />
                    )}
        </div>
     </div>
    </div>
  )
}

export default WhyChoose