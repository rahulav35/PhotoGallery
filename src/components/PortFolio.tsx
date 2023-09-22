import Image from 'next/image'
import React from 'react'

const PortFolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 box-border text-center">
        <h1 className="font-bold text-2xl pb-6 box-border">Travel Photos</h1>
        <div className=" grid grid-rows-none  md:grid-cols-5 p-4 box-border gap-4">
            <div className="w-full h-full cols-span-2 md:col-span-3 row-span-2">
            <img height={761}  width={651}  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="w-full h-full flex justify-center">
                    <img height={235}  width={237}  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="w-full h-full  flex justify-center">
                    <img height={235}  width={237}  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="w-full h-full  flex justify-center">
                    <img height={235}  width={237}  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className="w-full h-full  flex justify-center">
                    <img height={235}  width={237}  src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                </div>
              </div>
  )}

export default PortFolio