import HomePage from '@/components/HomePage'
import Navbar from '@/components/Navbar'
import PortFolio from '@/components/PortFolio'
import React from 'react'

const work = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start  ">
      <Navbar/>

      <HomePage heading="My Work" message="This is some of my recent work travelling the world. "/>
      <PortFolio/>
    </div>
  )
}

export default work