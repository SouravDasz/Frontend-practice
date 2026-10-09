import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'
const rightContent = () => {
  return (
    <div className='h-full w-2/3 p-4  grid grid-cols-3 gap-4 overflow-hidden'>
        <Rightcard image="https://images.unsplash.com/photo-1790805618420-dbc531d8cc02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" />
        <Rightcard image="https://images.unsplash.com/photo-1791395418470-42527d549440?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D" />
        <Rightcard image="https://images.unsplash.com/photo-1780686616214-08da38e8ec29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzV8fHxlbnwwfHx8fHw%3D" />
    </div>
  )
}

export default rightContent