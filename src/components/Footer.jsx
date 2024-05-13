import React from 'react'
import { Link } from 'react-router-dom'
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import logo2 from "../assets/logo2.png"
import '../App.css'
import insta from '../assets/insta.png'
import face from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import frame from '../assets/Frame.png'

function Footer() {
  return (
    <div className='gabarito  w-full flex py-20 md:py-10 px-10  items-center'>
        <div className="w-[90%] gap-6 flex flex-col  items-center">
            <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0 justify-between">
                <div className="w-full md:w-[30%] flex flex-col gap-12">
                    <div className="flex gap-6 md:gap-4 justify-center md:justify-start flex-col w-full">   
                        <img src={logo2} className="w-[40%]" alt=" "/>
                        <p className='text-[16px]  '>Find Mahimy Foods Bread at these partnered vendors in your neighbourhood!</p>
                    </div>
                </div>
                <div className='w-full md:w-[20%] text-[16px] flex  md:flex-col items-center gap-6  '>
                    <Link >About</Link>
                    <Link >Products</Link>
                    <Link >Contact</Link>
                </div>
                <div className='w-full md:w-[20%]  flex flex-col  items-center gap-6'>
                    <div className='flex items-center w-full  gap-4'>
                        <img src={phone} alt="" />    
                        <p>+91-8876753482</p>
                    </div>
                    <div className='flex items-center  w-full gap-4'>
                        <img src={mail} alt="" />    
                        <p>mahimyfoods@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className=' text-gray-400 w-full h-[20px] flex flex-col md:flex-row justify-between'>
                <div>
                    <p>Mahimy Foods 2024. All Rights Reserved</p>
                </div>
                <div className='flex gap-2  items-center '>
                    <p>follow us</p>
                    <img src={face} className='h-[20px]' alt="" />
                    <img src={insta} className='h-[20px]' alt="" />
                    <img src={twitter} className='h-[20px]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer