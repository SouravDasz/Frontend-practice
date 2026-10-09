import React from 'react'

const Rightcard = ({ image }) => {
  return (
    <>
    <div className='h-full w-full min-w-0 rounded-2xl overflow-hidden relative'>
        <img
        className='h-full w-full object-cover' src={image} alt="" />
    <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-12 w-12 flex justify-center text-2xl items-center
    font-semibold'>1</h2>
    <div>
        <p className='text-white mb-10 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex harum maxime temporibus blanditiis! Esse ducimus perferendis eius laudantium quis!</p>
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white px-8 py-2 rounded-full'>satiesfied</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'>
            <i className="ri-arrow-right-line"></i>
        </button>
        </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Rightcard