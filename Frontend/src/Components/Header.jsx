import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Header = () => {
  const navigate = useNavigate()
  const {user,setShowLogin}=useContext(AppContext)

  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'
    >
        <div className=' inline-flex  text-center gap-2  px-6 py-1 rounded-full border border-neutral-500 text-white'
        >
        <p className='text-black'>Convert Your Prompt into Image</p>
        </div>
        <h1 className='text-4xl font-light max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center '>Turn Text To <span className='text-gray-700 font-mono'>Image In Seconds.</span></h1>

        <p className='text-center max-w-xl mx-auto mt-5'>" Effortlessly convert text into stunning images in seconds with our powerful and easy-to-use tool. "</p>

        <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>Generate Images
            <img src={assets.star_group} alt="" className='h-5'/>
        </button>
    </div>
  )
}

export default Header