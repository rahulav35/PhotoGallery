

import HomePage from '@/components/HomePage'
import Insta from '@/components/Insta'
import Navbar from '@/components/Navbar'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import React from 'react'

const index = () => {
  return (

    <div className="min-h-screen  flex flex-col items-center justify-start  ">
      <Navbar/>

       <div className='h-full w-screen flex items-center justify-center'>
      <HomePage heading = "capture photography" message = "I capture moments in nature and keep them alive. "/>
    
    </div>
    
    <Slider slides={SliderData}/>
    <Insta/>
    
    
    
    </div>
   
  )
}

export default index