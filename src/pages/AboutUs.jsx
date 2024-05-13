import React from 'react'
import { Navbar2 } from '../components/Navbar2'
import AboutHero from '../components/AboutHero'
import AboutMahimy from '../components/AboutMahimy'
import Footer from '../components/Footer'
import WhyMahima from '../components/WhyMahima'
import AboutDataBanner from '../components/AboutDataBanner'
import AvailabilityBanner from '../components/AvailabilityBanner'
import Story from '../components/Story'
import Testimonials from '../components/testimonials'

function AboutUs() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Navbar2/>
        <AboutHero/>
        <AboutMahimy/>
        <Story/>
        <WhyMahima/>
        <AboutDataBanner/>
        <Testimonials/>
        <AvailabilityBanner/>
        <Footer/>
    </div>
  )
}

export default AboutUs