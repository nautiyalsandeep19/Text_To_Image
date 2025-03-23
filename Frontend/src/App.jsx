import React, { useContext } from 'react'
import Home from './Pages/Home'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { AppContext } from './Context/AppContext'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const {showLogin} = useContext(AppContext)

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-tale-100 to-blue-50 '>
      <Navbar/>
      <ToastContainer position='top-right'/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={ <Result/>}/>
        <Route path='/buy-credit' element={ <BuyCredit/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App