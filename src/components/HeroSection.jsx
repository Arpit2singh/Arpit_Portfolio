import React from 'react'
import { ReactTyped } from "react-typed";
import Splineanimation from './Splineanimation';
import Navbartop from './Navbartop';

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center  '>
      <Navbartop/>
     <div className='flex justify-between items-center  '>
     
      
    <div className='h-screen w-[60%] bg-transparent flex flex-col justify-center items-start font-bold p-10 gap-10'>
         <div className='bg-gradient-to-r from-red-400 to-blue-400 flex justify-center text-center font-extrabold text-6xl bg-clip-text text-transparent p-4 '> Hey, what’s up? I’m Arpit</div>
         <div className='bg-gradient-to-r from-red-400 to-purple-400 flex justify-center text-center font-extrabold text-4xl bg-clip-text text-transparent p-4 font-["IBM_PLEX_MONO"] '>
            <ReactTyped 
           strings= {[
             "Developer by passion, creator by choice." , 
             "I build awesome things for the web."
           ]}
         typeSpeed={20}
         backSpeed={60}
         loop
           /> </div>
    </div>
      <div className='h-screen w-[40%] flex justify-center items-center overflow-hidden ' >
      <Splineanimation/>
      </div>
    </div>
    </div>

  )
}

export default HeroSection