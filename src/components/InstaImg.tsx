import React from 'react'
import { FaInstagram } from 'react-icons/fa'

export const InstaImg = ({socialImg}:any) => {
  return (
    <div className='relative'>
        <img className='h-full w-full' src={socialImg} alt=""  />
        {/* overlay */}
        <div className="h-full w-full flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 hover:bg-black/50 ">
            <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10"/>
            </p>
        </div>
    </div>
  )
}
