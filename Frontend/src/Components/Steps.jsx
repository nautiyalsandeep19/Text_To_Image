import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-60 '>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works</h1>
        <p className='text-lg text-gray-600 mb-8'>Transform Your Vision Into Image</p>

        <div className='space-y-4 w-full max-w-xl text-sm'>
            {stepsData.map((item,index)=>(
                <div className='flex items-center gap-4 p-5 bg-white shadow-md border cursor-pointer hover:scale-[1.05] transition-all duration-400 rounded-lg'  key={index}>
                    <img src={item.icon} alt="" srcSet="" width={20}/>
                    <div>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Steps