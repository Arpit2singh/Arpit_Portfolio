import React, { useState, useEffect } from 'react'
import { Contact, Home, Presentation, User, Wrench, BookOpen, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbartop = () => {
  const [theme, setTheme] = useState(() => {
    // Detect system preference or saved item
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  }

  return (
    <motion.div variants={navVariants} initial="hidden" animate="animate" className="flex justify-center items-center p-2 mt-8 text-sm md:text-lg w-[90%] md:w-[75%] fixed top-0 z-50">
      <nav className="flex justify-evenly items-center h-[70px] w-full max-w-6xl rounded-4xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg cursor-pointer px-4">

        <a href="#home" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <Home size={18} />
          <span className='hidden md:block'>Home</span>
        </a>

        <a href="#about" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <User size={18} />
          <span className='hidden md:block'>About</span>
        </a>

        <a href="#projects" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <Presentation size={18} />
          <span className='hidden md:block'>Projects</span>
        </a>

        <a href="#skills" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <Wrench size={18} />
          <span className='hidden md:block'>Skills</span>
        </a>

        <a href="#blog" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <BookOpen size={18} />
          <span className='hidden md:block'>Blog</span>
        </a>

        <a href="#contact" className="text-sm xl:text-lg font-extrabold text-white flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
          <Contact size={18} />
          <span className='hidden md:block'>Contact</span>
        </a>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="text-white hover:text-yellow-300 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-gray-300" />}
        </button>

      </nav>
    </motion.div>
  )
}

export default Navbartop
