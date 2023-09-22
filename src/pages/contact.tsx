import HomePage from '@/components/HomePage'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import React from 'react'

const contact = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start  ">
      <Navbar/>

      <HomePage heading="Contact" message="Submit the form below for work and quotes. "/>
    
    <Contact/>
    
    </div>
  )
}

export default contact