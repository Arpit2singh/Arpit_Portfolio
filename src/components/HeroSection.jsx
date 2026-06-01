import React from 'react'
import { ReactTyped } from "react-typed";
import Splineanimation from './Splineanimation';
import Navbartop from './Navbartop';
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Navbartop />
      <div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-12 min-h-screen pt-20 gap-8'>
        
        {/* Left Content Column */}
        <div className='w-full lg:w-[60%] bg-transparent flex flex-col justify-center items-start font-bold gap-6 py-10'>
          <div className='bg-gradient-to-r from-red-400 to-blue-400 text-left font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent p-1 leading-tight'>
            Hey, what’s up? I’m Arpit
          </div>
          <div className='bg-gradient-to-r from-red-400 to-purple-400 text-left font-extrabold text-2xl md:text-3xl bg-clip-text text-transparent p-1 font-["IBM_PLEX_MONO"]'>
            <ReactTyped 
              strings={[
                "Developer by passion, creator by choice.",
                "I build awesome things for the web."
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-wrap gap-4 mt-4'>
            <a href="#projects" className='px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 rounded-full text-white font-bold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-purple-500/20'>
              View Work
            </a>
            <a href="#contact" className='px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 rounded-full text-white font-bold text-sm md:text-base hover:scale-105 active:scale-95 transition-all'>
              Contact Me
            </a>
            <a href="/Arpit_Resume.pdf" download className='px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full font-extrabold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-md'>
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className='flex gap-6 mt-6 pl-1 text-gray-400'>
            <a href="https://github.com/Arpit2singh" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-115 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arpitsinghno1" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-115 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:arpitlibono57@gmail.com" className="hover:text-white hover:scale-115 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right 3D Animation Column */}
        <motion.div 
          drag 
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}  
          className='w-full lg:w-[40%] flex justify-center items-center overflow-hidden h-[350px] md:h-[450px]'
        >
          <Splineanimation />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection