import React from 'react'
import Navbar from '../components/Navbar'
import ContactHero from '../components/ContactHero'
import Contactform from '../components/Contactform'
import Footer from '../components/Footer'
import { Navbar2 } from '../components/Navbar2'
function Contact() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Navbar2/>
        <ContactHero/>
        <Contactform/>
        <Footer/>
    </div>
  )
}

export default Contact