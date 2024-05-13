import React from 'react'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import '../App.css'
import line from '../assets/line.png'
import { useEffect,useRef } from 'react'

const banners = [
    {
        img:s1,
        title:'Bakery Started',
        content:'in 1991 the plant was fully automated with computerized control for the uniform baking process.At present, the capacity of the unit is 100 times the capacity the unit had in 1978.',
       line:line
    },
    {
        img:s2,
        title:'Full Automation',
        content:'Mahimy Foods is the first Bread Manufacturing Unit that has introduced "full automation" in a Bread Plant in Chennai so that the Best Quality is achieved.',
        line:line
    },
    {
        img:s3,
        title:'National Launch',
        content:'Mahimy Foods is the first Bread Manufacturing Unit that has introduced "full automation" in a Bread Plant in Chennai so that the Best Quality is achieved.',
        line:line
    },
]

function Story() {

    const elementsRef = useRef([]);

    useEffect(() => {
        const fadeInOnScroll = () => {
            elementsRef.current.forEach((element, index) => {
                if (isElementInViewport(element)) {
                    setTimeout(() => {
                        element.classList.add('opacity-100');
                        element.classList.remove('opacity-0');
                        if (index < 2) {
                            const lineImg = element.querySelector('.line-img');
                            lineImg.classList.add('animate-expandWidth');
                            lineImg.classList.remove('opacity-0');
                        }
                    }, index * 1000); // Adjust the delay value here (200ms for example)
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
    <div className="w-full   bg-[#114232] flex  justify-center items-center px-5 lg:px-20 py-5 lg:py-20">
      <div className="w-full   flex flex-col justify-center items-center gap-6 md:gap-16">
        <h1 className="gabarito font-semibold  text-[50px] md:text-[74.38px] text-white">Our Story</h1>
        <div  className="  flex flex-col md:flex-row  justify-between gap-12 md:gap-28">
            {
                banners.map((banner,index)=>(
                    <div ref={(el) => (elementsRef.current[index] = el)} className="flex md:w-[200px] lg:w-[250px] flex-col  relative transition-all duration-500 opacity-0 " key={index}>
                        <div className='w-[250px]  h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]  '>
                         <img src={banner.img} alt="" />
                         
                        {index < 2 && <div  
                          className='absolute left-[67%] top-[25%] hidden h-[5px] bg-[#A4CF25] opacity-30 md:block line-img'
                          style={{ animationDelay: `${index * 200}ms` }} >
                            </div>}
                          </div>
                        <div className="flex flex-col   px-[10px] w-[250px] h-[250px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
                        <h1 className="gabarito text-center text-[32px] md:text-[24px] lg:text-[32px] text-white md:font-bold">{banner.title}</h1>
                        <p className="gabarito text-center text-[16px] md:text-[12px] lg:text-[16px] text-white">{banner.content}</p>
                        </div>
                    </div>
                ))
            }


        </div>

      </div>
    </div>

  )
}

export default Story