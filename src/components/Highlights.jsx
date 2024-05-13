import React from 'react'
import "../App.css"
import keto from "../assets/keto.png"
import fibre from "../assets/fibre.png"
import delicious from "../assets/delicious.png"
import slice from "../assets/slice.png"
import { useEffect,useRef } from 'react'

function Highlights() {

  
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
        const sliceAnimation=()=>{
            const slice=imagesRef.current[0];
            if(isElementInViewport(slice))
                {
                    setTimeout(()=>{
                    slice.classList.add('animate-slideIn')
                    slice.classList.remove('opacity-0')
                   },0)
                }

        }

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
        window.addEventListener('scroll', sliceAnimation);
        sliceAnimation();
        
        return () => {
            window.removeEventListener('scroll', fadeInOnScroll);
            window.removeEventListener('scroll', sliceAnimation);

        };
    }, []);

  return (
    <div className="w-full gabarito  lg:h-[977px] py-10 bg-white flex flex-col justify-center items-center">
        <div className='w-[90%]   flex gap-16 flex-col  justify-center items-center'>
          <h1 className='font-bold text-[32px] md:text-[42px]'>Nutritional Highlights</h1>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-14'>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">30 Calories</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">2g Net Carbs</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">Low Carb</div>
              <div className="font-bold text-[16px] md:text-[24px] px-4 md:px-10 py-2 bg-[#A4CF25] rounded-3xl">cRc & OK Kosher Certified</div>

          </div>
          <div className="relative h-[280px]  md:h-[600px] w-full md:w-[700px] lg:w-[900px] flex justify-center ">
          <img ref={(el) => (imagesRef.current[0] = el)} src={slice} alt="" className="absolute h-[250px] md:h-[530px] lg:h-[563px]  opacity-0 " />
            <img ref={(el) => (imagesRef.current[1] = el)} src={delicious} alt="" className="absolute h-[50px] md:h-[167px] top-10 left-[10%] md:left-[1%] lg:left-[10%] opacity-0 " />
            <img ref={(el) => (imagesRef.current[2] = el)} src={keto} alt="" className="absolute h-[50px] md:h-[167px] top-24 left-[75%] opacity-0" />
            <img ref={(el) => (imagesRef.current[3] = el)} src={fibre} alt="" className="absolute h-[50px] md:h-[167px] top-[65%] left-[20%] md:left-[10%] lg:left-[20%] opacity-0" />
          </div>
      </div>
    </div>

  )
}

export default Highlights