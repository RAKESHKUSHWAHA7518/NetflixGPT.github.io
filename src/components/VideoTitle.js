import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video  absolute pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl text-bold'>{title}</h1>
        <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>  
       <div className='my-4 md:m-0'>
        <button  className='bg-blue-500  text-white md:py-4 px-3 md:px-10 py-2   text-xl  rounded-md hover:bg-opacity-50   '>▶️ Play</button>
        <button className='mx-4 bg-blue-500  hidden md:inline-block text-white p-4  px-10 text-xl bg-opacity-50 rounded-md '>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
