import React, {useContext, useEffect} from 'react'
import { Routes, Route, Navigate, useLocation} from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';

import Home from './pages/Home'
import Result from './pages/Result'
import GenerationResult from './pages/GenerationResult'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const {showLogin, isAuthenticated} = useContext(AppContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    {showLogin && <Login />}
    <div className='px-4 sm:px-10 md:px-14 lg:px-0 min-h-screen bg-gradient-to-b from-slate-800 via-teal-900 to-blue-600'> 
    <ToastContainer position='bottom-right'/>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/result/:id' element={isAuthenticated ? <GenerationResult /> : <Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
