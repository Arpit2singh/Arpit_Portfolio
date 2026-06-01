import React, { useEffect } from 'react'
import { useState } from 'react'
import { CircleArrowOutDownRight , CircleArrowOutUpRight , SquareArrowDownRightIcon , CircleArrowRight } from 'lucide-react'
import {animate, delay, motion, scale} from 'framer-motion' 

const FeedbackForm = () => { 
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [query, setQuery] = useState('')
  const [size, setsize] = useState(100)

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(query);

    const sizeChanger = () => {
      setsize(250)
    }
    sizeChanger();

    const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "https://portfolio-backend-wpgz.onrender.com"

    try {
      const res = await fetch(`${API_BASE}/portfolio/Feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, query })
      })
      if (!res.ok) {
        console.error("Feedback submit failed");
      } else {
        console.log("Feedback submitted successfully");
      }
    } catch (err) {
      console.error("Feedback submission error:", err);
    }

    setName('');
    setEmail('');
    setQuery('');
  }

 const toggleVariant = {
  starter : {
    opacity : 0 , 
    scale : 0.5 , 
    x : [-300 , -100 , 0] , 
    y : [-500 , -100 , 0]
  }, 
  animate : {
    opacity : 1 , 
    scale : 1 , 
    x : 0 ,
    y : 0 , 
    transition : {
      duration : 1.3 , 
      delay : 0.8 , 
      ease : 'anticipate' , 

    }
  }
 }


  return (
    <div id="contact" className='min-h-screen w-full py-20 px-4 md:px-12 flex flex-col justify-center items-center bg-transparent'>
      <div className='w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-between p-4 bg-transparent rounded-4xl'>
        
        {/* Left decoration card */}
        <div className='w-full lg:w-[45%] h-[280px] sm:h-[350px] lg:h-[500px] relative rounded-4xl overflow-hidden border border-white/10 shadow-2xl shrink-0'>
          <img 
            src='https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFycm93fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' 
            className='h-full w-full object-cover opacity-35 select-none' 
            alt="Decoration Background"
          />
          <div className='absolute inset-0 p-6 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-300 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight'>
              Let’s build something awesome together — drop me a message!
            </h2>
          </div>
        </div>

        {/* Middle icon column (hidden on small viewports, visible on lg) */}
        <div className='hidden lg:flex flex-col gap-12 justify-center items-center'>
          <motion.div viewport={{once : true}} initial="starter" whileInView="animate" variants={toggleVariant} className='bg-gradient-to-br from-red-400/20 via-blue-500/20 to-pink-400/20 border border-white/10 rounded-2xl p-4 text-pink-300' ><CircleArrowOutDownRight size={32} /></motion.div>
          <motion.div viewport={{once : true}} initial="starter" whileInView="animate" variants={toggleVariant} className='bg-gradient-to-br from-red-400/20 via-blue-500/20 to-pink-400/20 border border-white/10 rounded-2xl p-4 text-pink-300' ><SquareArrowDownRightIcon size={32}/></motion.div>
          <motion.div viewport={{once : true}} initial="starter" whileInView="animate" variants={toggleVariant} className='bg-gradient-to-br from-red-400/20 via-blue-500/20 to-pink-400/20 border border-white/10 rounded-2xl p-4 text-pink-300' ><CircleArrowRight size={32} /></motion.div>
          <motion.div viewport={{once : true}} initial="starter" whileInView="animate" variants={toggleVariant} className='bg-gradient-to-br from-red-400/20 via-blue-500/20 to-pink-400/20 border border-white/10 rounded-2xl p-4 text-pink-300' ><CircleArrowOutUpRight size={32}/></motion.div>
        </div>

        {/* Right Form Card */}
        <div className='w-full lg:w-[45%] bg-white/10 border border-white/20 rounded-4xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-center'>
          <form className='flex flex-col gap-6' onSubmit={submitHandler}>
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-bold text-gray-300 uppercase tracking-wider'>Name</h3>
              <input 
                className='h-[50px] w-full px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all' 
                onChange={(e) => setName(e.target.value)}  
                value={name}  
                type='text' 
                placeholder='Enter your name'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-bold text-gray-300 uppercase tracking-wider'>Email</h3>
              <input 
                type='email' 
                placeholder='Enter your email' 
                value={email}  
                onChange={(e) => setEmail(e.target.value)} 
                className='h-[50px] w-full px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all' 
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-sm font-bold text-gray-300 uppercase tracking-wider'>Query</h3>
              <textarea 
                placeholder="Hey! What's the query..." 
                value={query}  
                onChange={(e) => setQuery(e.target.value)} 
                className='h-[150px] w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all resize-none' 
                required
              />
            </div> 
            <div className='flex justify-center mt-2'>
              <motion.button 
                className='h-[50px] text-white font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 shadow-lg shadow-pink-500/25 active:scale-95 transition-all flex items-center justify-center cursor-pointer'
                type='submit' 
                layout 
                style={{
                  width : size, 
                  borderRadius : 25,
                }}
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default FeedbackForm