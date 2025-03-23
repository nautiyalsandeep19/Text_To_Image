import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


export const AppContext = createContext()

const AppContextProvider =(props)=>{
const [user,setUser]= useState(null)
const [showLogin,setShowLogin] = useState(false)
const [token , setToken] = useState(localStorage.getItem('token'))
const [credit,setCredit]= useState(false)
const navigate = useNavigate()

const loadCreditData = async () =>{
    try {
        const backendURL = import.meta.env.VITE_API_BASE_URL;
        const data = await axios.get(`${backendURL}/api/user/credits`,{headers:{token}})
        if(data){
            setCredit(data.data.credits)
            setUser(data.data.user)
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}


const generateImage = async (prompt) =>{
    try {
        const {data} = await axios.post(`${backendURL}/api/image/generate-image`,{prompt},{headers:{token}})
        if(data){
            loadCreditData()
            return data.resultImage
        }
        else{
            toast.error(data.message)
            loadCreditData()
            if(data.creditBalance===0){
                navigate('/buy-credit')
            }
        }
    } catch (error) {
        toast.error(error.message)
    }
}


const logOut=()=>{
    localStorage.removeItem('token');
    setToken('')
    setUser(null)
}

useEffect(()=>{
    if(token){
        loadCreditData()
    }

},[token])

const value={
    user,setUser,
    showLogin,setShowLogin,
    token , setToken,
    credit,setCredit,
    loadCreditData,
    logOut,
    generateImage
}

return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}

export default AppContextProvider