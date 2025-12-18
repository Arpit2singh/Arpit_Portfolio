import React from 'react'
import { Contact, Download, Home, Presentation, User, Wrench } from 'lucide-react'

const Navbartop = () => {
  return (
    <div className="flex justify-center items-center p-2 mt-8 text-sm :md:text-lg w-[70%] ">
      <nav className="flex justify-evenly items-center h-[70px] w-full max-w-6xl  rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg cursor-pointer">

        <a href="#home" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Home size={20}/><h1 className='hidden sm:block ' >Home</h1>
        </a>

        <a href="#about" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <User size={20}/><h1 className='hidden sm:block ' >About</h1>
        </a>
          {/* skills */}
        <a href="#Achieve" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Presentation size={20}/><h1 className='hidden sm:block ' >Projects</h1>
        </a>

        <a href="#projects" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Wrench size={20}/><h1 className='hidden sm:block ' >Skills</h1>
        </a>

        <a href="#resume" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Download size={20}/><h1 className='hidden sm:block ' >Resume</h1>
        </a>

        <a href="#contact" className="text-md xl:text-xl font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Contact size={20}/><h1 className='hidden sm:block ' >Contact</h1>
        </a>

      </nav>
    </div>
  )
}

export default Navbartop
