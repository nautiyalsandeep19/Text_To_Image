import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
        <img src={assets.logo} alt="" width={150}/>
        <p className='flex-1 pl-4 text-gray-600 max-sm:hidden text-center'>Copyright @CodeWithSandeep | All right reserved.</p>
        <div className='flex gap-2.5'>
            <img className='transition-all duration-500 hover:scale-[1.2] cursor-pointer' src={assets.twitter_icon} alt="" width={35}/>
            <img  className='transition-all duration-500 hover:scale-[1.2] cursor-pointer'src={assets.facebook_icon} alt="" width={35}/>
            <img className='transition-all duration-500 hover:scale-[1.2] cursor-pointer' src={assets.instagram_icon} alt="" width={35}/>
        </div>
    </div>
  )
}

export default Footer