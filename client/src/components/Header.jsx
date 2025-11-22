import React, { useContext } from 'react'
import { assets } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const sampleImages = [
    assets.image1, assets.image2, assets.image3, assets.image4
  ]

  const onClickHandler = () =>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>

        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'
        style={{
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.18, 
          backgroundSize: '600% 100%',
          animation: 'gradient 5s linear infinite'
        }}
        // initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4, duration:2}}
        >Your text gets cooked into image</motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5' initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration:0.8}}>Turn your thoughts into pictures with a single promp</motion.p>

        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-6 py-2.5 flex items-center gap-2 rounded-full cursor-pointer' whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}>Cook Images
            <img className='h-6' src={assets.star_group} alt="" />
        </motion.button>
        
        <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1, duration:1}}
         className='flex flex-wrap justify-center mt-16 gap-3'>
            {sampleImages.map((item, index)=>(
                <motion.img 
                whileHover={{scale:1.05, duration:0.1}}
                className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' 
                    src={item} alt="" key={index} width={90} />
                ))}
        </motion.div>
        
        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.2, duration:0.8}}
         className='mt-2 text-neutral-600'>Cooked images from CookImage</motion.p>

    </motion.div>
  )
}

export default Header
