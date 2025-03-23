import React, { useContext } from 'react';
import { assets, plans } from '../assets/assets'
import {AppContext} from '../Context/AppContext'
import { useNavigate } from 'react-router-dom';

const BuyCredit = () => {

  const {user} = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='min-h-[80vh] text-center pt-5 mb-10'>
      <button className='border-none border-black bg-gray-500 text-white rounded px-10 py-2  mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl text-gray-600 font-medium mb-6 sm:mb-10'>Select Your Plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
       {plans.map((item,index)=>(
        <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
          <img src={assets.profile_icon} alt="" width={40}/>
          <p className='mt-3 mb-1 text-black font-semibold'>{item.id}</p>
          <p className='text-sm text-black'>{item.desc}</p>
          <p className='mt-6 text-black'><span className='text-xl font-medium text-black'>Rs{item.price}</span>/{item.credits} credits</p>
          <button onClick={()=>navigate('/')} className='w-full bg-gray-500 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user?'Purchase':'Get Started'}</button>
        </div>
       ))}
      </div>
    </div>
  )
u}

export default BuyCredit