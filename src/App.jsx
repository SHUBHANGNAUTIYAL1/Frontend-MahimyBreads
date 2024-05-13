import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Book from './pages/Book';


function  App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/book" element={<Book/>}/>
       
        
      
      </Routes>
    </BrowserRouter>
  )
}

export default  App