import React, { useState } from 'react'
import "../App.css"
import arrow from "../assets/Arrow2.png"
import axios from 'axios'

function Contactform() {

    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [topic,setTopic]=useState('')
    const [message,setMessage] =useState('')

const handleSubmit=async()=>{

    try{
       await axios.post("https://mahimy-backend.onrender.com/api/email/send-email",
       {First:FirstName,
        Last:LastName,
        Phone:phone,
        Email:email,
        Topic:topic,
        Message:message
        });
    
    alert('your Details send Successfully') 
    window.location.reload();
    }
    catch (error) {
        console.error('Error submiting details:', error);
      }

}
     




  return (
    <div className='w-full h-[1101px] flex flex-col justify-center items-center bg-[#FFF4BA] gap-12'>
        <div className='w-[65%]'>
        <h1 className='text-[20px] md:text-[32px] gabarito text-center'>There’s always time between batches to connect! Fill out the form below and we’ll be in touch as soon as possible.</h1>
        </div>
        <div className="h-[653px] w-[80%]  flex flex-col gap-8  gabarito">
            <div className="flex flex-col md:flex-row w-full item-center gap-6 md:gap-0 justify-between">
                <input type="text" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}  className="p-4 px-10 w-full md:w-[48%] rounded-full border-2 border-[#F0D964] outline-none" placeholder='First Name'/>
                <input type="text" value={LastName} onChange={(e)=>setLastName(e.target.value)} className="p-4 px-10 w-full md:w-[48%] rounded-full border-2 border-[#F0D964] outline-none" placeholder='Last Name'/>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-full item-center justify-between">
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="p-4 px-10 w-full md:w-[48%] rounded-full border-2 border-[#F0D964] outline-none" placeholder='Mobile'/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-4 px-10 w-full md:w-[48%] rounded-full border-2 border-[#F0D964] outline-none" placeholder='E-Mail'/>
            </div>
            <div className="flex w-full item-center justify-between">
                <input type="text"  value={topic} onChange={(e)=>setTopic(e.target.value)} className="p-4 px-10 w-full rounded-full border-2 border-[#F0D964] outline-none" placeholder='Select Topics'/>   
            </div>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="rounded-2xl p-4 px-10 border-2 border-[#F0D964] outline-none" name="" id="" cols="30" rows="20" placeholder='Message'></textarea>
        </div>
        <button  onClick={handleSubmit} className='px-6 md:px-10 text-[20px] md:text-[32px] gabarito py-2 border-2 border-black rounded-full flex justify-center items-center gap-4 ' >Send <img src={arrow}  alt="" /></button>

    </div>
  )
}

export default Contactform