import { PowerOffIcon, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (

    <div className='relative   ' >
     <div className='absolute  top-0 left-0 h-screen w-screen' > <div className="spinner-container h-[100%] w-[100%] ">
      <div className="orbit"></div>
      <div className="orbit"></div>
      <div className="orbit"></div>
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="core"></div>
    </div></div>
     <div className='h-screen w-full  flex justify-between items-center p-3  ' >
  
     
     <div className='h-full w-[60%]  p-2 px-[80px] flex flex-col justify-center items-center font-medium text-xl  '>
      {/* <User size={50} color='purple' /> */}
     
      <p className='flex  leading-9 text-orange-300  font-["IBM_PLEX_MONO"] '>
   
I am a highly motivated and results-driven B.Tech (CSE-AIML) student from VIT Bhopal, specializing in full-stack web development and algorithm design. With a strong academic background (8.51 CGPA) ongoing and a passion for building intelligent, user-centric applications, I focus on delivering tangible value through technology.


My core expertise lies in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) , complemented by proficiency in C/C++, Java, and Python. I am skilled in modern frontend practices, including Tailwind CSS , and have hands-on experience with deployment platforms like Vercel and Render.
      </p>
     </div>
     <div className='   h-[70%]  flex justify-center items-center w-[45%] overflow-hidden p-2 rounded-4xl '  >
    <img src='profile.jpg' id='profilePhoto' className=' h-[50%] w-[55%] object-cover h-full rounded-4xl bg-transparent  object-top   ' ></img>
     </div>
      
    </div>
    </div>
    
    
  )
}

export default About