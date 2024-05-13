import React from 'react'
import { Navbar2 } from '../components/Navbar2'
import BookHero from '../components/BookHero'
import Bookbanner from '../components/Bookbanner'
import Available from '../components/Available'
import Footer from '../components/Footer' 
import Bookbottom_banner from '../components/Bookbottom-banner'

function Book() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Navbar2/>
        <BookHero/>
        <Bookbanner/>
        <Available/>
        <Bookbottom_banner/>
        <Footer/>
    </div>
  )
}

export default Book