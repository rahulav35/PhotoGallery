import React from 'react'

 const HomePage = ({heading,message}:any) => {
  return (
    <div className='flex items-center justify-center h-screen w-full  bg-center bg-fixed bg-cover  costom-img '>
       {/*overlay*/}
       <div className='absolute  top-0 left-0 h-screen w-full  bg-black/70 z-[2]'/>
      <div className="p-5 text-white z-[2] ">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">
          {message}
        </p>
        <button className='px-8 py-2 border'>book</button>
      </div>
    </div>
  )
}
export default HomePage;
