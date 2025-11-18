import React from 'react'
import { Contact, Download, Home, Presentation, User, Wrench } from 'lucide-react'

const Navbartop = () => {
  return (
    <div className="flex justify-center items-center p-2 mt-8">
      <nav className="flex justify-evenly items-center h-[70px] w-[140vh] rounded-4xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg cursor-pointer">

        <a href="#home" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Home size={20}/> Home
        </a>

        <a href="#about" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <User size={20}/> About
        </a>
          {/* skills */}
        <a href="#Achieve" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Presentation size={20}/> Projects
        </a>

        <a href="#projects" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Wrench size={20}/> Skills
        </a>

        <a href="#resume" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Download size={20}/> Resume
        </a>

        <a href="#contact" className="text-[17px] font-bold text-white flex items-center gap-1 hover:text-gray-200">
          <Contact size={20}/> Contact
        </a>

      </nav>
    </div>
  )
}

export default Navbartop
