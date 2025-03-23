import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

    const [state,setState] = useState('Login');
    const {setShowLogin ,setToken , setUser}= useContext(AppContext)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        try {
            if(state==='Login'){
               const {data} =  await axios.post('http://localhost:8000/api/user/login'  ,{email,password})
               if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token',data.token)
                setShowLogin(false)
               }
               else{
                toast.error(data.message)
               }
            }
            else{
                const {data} =  await axios.post('http://localhost:8000/api/user/register'  ,{name,email,password})
               if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token',data.token)
                setShowLogin(false)
                toast.success(data.message)
               }
               else{
                toast.error(data.message)
               }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        document.body.style.overflow='hidden';
        
        return ()=>{
            document.body.style.overflow='unset';
        }

    },[])
  return (
    <div className=' fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

        <form className='relative bg-white p-10 rounded-xl text-slate-500' onSubmit={onSubmitHandler}>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state==='Login'?'Login':'Sign Up'}</h1>
            <p className='text-sm'>Welcome back! please sing in to continue</p>

    {
        state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <input type="text" placeholder='Full Name' className='outline-none text-sm ' required  onChange={e=>setName(e.target.value)} value={name}/>
            </div>
    }
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <input type="email" placeholder='Email id' className='outline-none text-sm ' required onChange={e=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <input type="password" placeholder='Password' className='outline-none text-sm ' required onChange={e=>setPassword(e.target.value)} value={password}/>
            </div>

            <p className='text-sm text-black my-4 cursor-pointer '>Forgot Password ?</p>

            <button className='bg-black w-full text-white py-2 rounded-full cursor-pointer '>{state==='Login' ?'Login' :'Create Account'}</button>

            {
            state ==='Login' ?
            <p className='mt-5 text-center'>Don't have an account? <span className='text-gray-500 font-bold cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
            :
            <p className='mt-5 text-center'>Already have an account? <span className='text-gray-500 font-bold cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}

            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer'/>
        </form>
    </div>
  )
}

export default Login