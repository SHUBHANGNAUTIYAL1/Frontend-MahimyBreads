import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import human from "../assets/human.png"
import comma from "../assets/comma.png"
import '../App.css'

const Banners=[
  {
   content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. ',
   name:'Saravana',
   location:'Banglore',
   img:human
  },
  {
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. ',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. ',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. ',
    name:'Saravana',
    location:'Banglore',
    img:human
   },
   {
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. ',
    name:'Saravana',
    location:'Banglore',
    img:human
   }
  
]

function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    // Call handleResize once on initial render to set initial state
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    const settings = {
      dots: false,
      infinite: true,
      
      slidesToShow:isMobile ? 1 : 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed:20,
      cssEase: "linear",
      ltr: true,
      arrows: false
      
      
      
    };
    const settings2 = {
      dots: false,
      
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 20,
      cssEase: "linear",
      rtl: true,
      arrows: false
      
      
    };
  return (
    <div className="h-full  w-[99vw] px-2 ">
      <div className="slider-container h-full w-full z-50 gap-2   flex  flex-col items-center ">
        <Slider  {...settings} className="w-full md:w-[95%] flex justify-between  ">
          {
            Banners.map((banner,index)=>(

             <div className="p-10 ">
              <div className="  bg-white  p-5 md:p-10 flex flex-col gap-2 border-2 border-[#F2D784] " key={index}  >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <img src={banner.img} alt="" />
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">{banner.name}</h1>
                      <p className="gabarito text-[13px] text-[#B9B9B9]">{banner.location}</p>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
            
          </div>
          </div>
          ))
         }
        </Slider>
        <Slider {...settings2} className="w-[90%]  justify-between hidden md:flex">
          {
            Banners.map((banner,index)=>(
              <div className="p-10">
              <div className="  bg-white p-5 md:p-10 flex flex-col gap-2 border-2 border-[#F2D784] " key={index}  >
                <h1 className="gabarito text-[14px]">{banner.content}</h1>
                <div className="w-full flex items-center">
                  <img src={banner.img} alt="" />
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-center">
                      <h1 className="gabarito font-bold text-[19.2px]">{banner.name}</h1>
                      <p className="gabarito text-[13px] text-[#B9B9B9]">{banner.location}</p>
                    </div>
                    <img src={comma} alt="" />
                  </div>
                </div>
            
          </div>
          </div>
        
          ))
         }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
