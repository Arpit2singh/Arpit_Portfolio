import React from 'react'
import { ReactTyped } from "react-typed";
import Splineanimation from './Splineanimation';
import Navbartop from './Navbartop';
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Navbartop />
      <div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-12 min-h-screen pt-24 gap-8'>

        {/* Left Content Column */}
        <div className='w-full lg:w-[60%] bg-transparent flex flex-col justify-center items-start font-bold gap-5 py-10'>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1 text-xs font-bold border-green-400/40 text-green-300 bg-green-400/10 hover:bg-green-400/15 cursor-default"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to Opportunities
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-gradient-to-r from-red-400 to-blue-400 text-left font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent p-1 leading-tight'
          >
            Hey, what's up?<br />I'm Arpit
          </motion.div>

          {/* Typed Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='bg-gradient-to-r from-red-400 to-purple-400 text-left font-extrabold text-xl md:text-2xl bg-clip-text text-transparent'
          >
            <ReactTyped
              strings={[
                "Developer by passion, creator by choice.",
                "I build awesome things for the web.",
                "MERN Stack · React · Node.js · AI"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='flex flex-wrap gap-3 mt-2'
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/30 border-0 gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              <a href="#projects">
                View Work <ArrowRight size={16} />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-bold border-white/25 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              <a href="#contact">
                <Briefcase size={16} /> Contact Me
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="rounded-full font-extrabold bg-yellow-400 hover:bg-yellow-500 text-black gap-2 shadow-md hover:scale-105 active:scale-95 transition-transform border-0"
            >
              <a href="/Arpit_Resume.pdf" download>
                <Download size={16} /> Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='flex gap-2 mt-4'
          >
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full h-10 w-10 transition-all duration-300 hover:scale-110"
            >
              <a href="https://github.com/Arpit2singh" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-full h-10 w-10 transition-all duration-300 hover:scale-110"
            >
              <a href="https://www.linkedin.com/in/arpitsinghno1" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-full h-10 w-10 transition-all duration-300 hover:scale-110"
            >
              <a href="mailto:arpitlibono57@gmail.com">
                <Mail size={20} />
              </a>
            </Button>
          </motion.div>
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