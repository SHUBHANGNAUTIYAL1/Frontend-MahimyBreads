import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import QualityBanner from '../components/QualityBanner'
import WhyChoose from '../components/WhyChoose'
import Highlights from '../components/Highlights'
import Bread1 from '../components/Bread1'
import Bread2 from '../components/Bread2'
import Bread3 from '../components/Bread3'
import Bread4 from '../components/Bread4'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'
import { Navbar2 } from '../components/Navbar2'

function About() {
  return (
    
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar2/>
      <HeroSection/>
      <QualityBanner/>
      <WhyChoose/>
      <Highlights/>
      <Bread1/>
      <Bread2/>
      <Bread3/>
      <Bread4/>
      <BottomBanner/>
      <Footer/>
    </div>
  )
}

export default About