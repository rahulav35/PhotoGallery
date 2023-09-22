import React from 'react'

const contact = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 box-border h-screen'>
      <h1 className="text-2xl font-bold text-center p-4 box-border"> Let's work together</h1>
      <form action="" className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input type="text" className="border shadow-lg p-3 box-border" placeholder='Name' />
          <input type="text" className="border shadow-lg p-3 box-border" placeholder='Email' />
        </div>
        <input type="text" className="border shadow-lg p-3 box-border w-full my-2" placeholder='Subject' />
        <textarea className='border shadow-lg p-3 box-border w-full' name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
        <button className="border shadow-lg p-3 box-border w-full mt-2">Submit</button>
      </form>
    </div>
  )
}

export default contact