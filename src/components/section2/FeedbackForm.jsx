import React, { useEffect } from 'react'
import { useState } from 'react'
import { CircleArrowOutDownRight , CircleArrowOutUpRight , SquareArrowDownRightIcon , CircleArrowRight } from 'lucide-react'
const FeedbackForm = () => { 
  
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [query, setQuery] = useState('')

 const submitHandler =async(e)=>{
     e.preventDefault() ; 
     console.log(name) ; 
     console.log(email) ; 
     console.log(query) ; 
    
    const res = await fetch(`https://portfolio-backend-wpgz.onrender.com/portfolio/Feedback/` ,
      {
        method : "POST" ,
        headers :{
          "Content-Type" : "application/json" , 
        },
        body: JSON.stringify({name ,email ,query})
      }
    )
      if (!res.ok) {
  console.error("Feedback submit failed");
} else {
  console.log("Feedback submitted successfully");
}


      setName('');
  setEmail('');
  setQuery('');
 }


  return (
    <div className=' h-screen w-full p-4 bg-transparent'>
      
      <div className='flex justify-between  items-center p-4  bg-transparent  rounded-4xl'>
        <div className=' h-[40vw] w-[40%] relative ' >

          <img  src='https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGFycm93fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' className='h-full w-full object-cover rounded-4xl opacity-80 ' ></img>
          <div className=' text-[70px] bg-gradient-to-br from bg-clip-text text-transparent shadow-lg from-blue-300 via-red-300 to-purple-700 to-black-500   font-bold absolute left-0 top-0 p-4 leading-20 '>
            Let’s build something awesome together — drop me a message!
          </div>
        </div>
        <div className=' flex flex-col gap-20  '>
          <div className='bg-gradient-to-br from-red-200 via-blue-500 to-pink-400 rounded-4xl p-4 ' ><CircleArrowOutDownRight size={48} /></div>
        
        <div className='bg-gradient-to-br from-red-200 via-blue-500 to-pink-400 rounded-4xl p-4 ' ><SquareArrowDownRightIcon size={48}/></div>
        <div className='bg-gradient-to-br from-red-200 via-blue-500 to-pink-400 rounded-4xl p-4 ' ><CircleArrowRight size={48} /></div>
        <div className='bg-gradient-to-br from-red-200 via-blue-500 to-pink-400 rounded-4xl p-4 ' ><CircleArrowOutUpRight size={48}/></div>

        </div>
        <div className=' h-[40vw] w-[55%]  relative overflow-hidden rounded-4xl '>
        {/* <img src='https://images.unsplash.com/photo-1497005367839-6e852de72767?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000' className='h-full w-full object-cover  '></img> */}
        
        <div className=' h-[40vw] w-full p-2   absolute top-0 left-0 bg-gradient-to-br   bg-white/1 border-white/30  shadow-lg backdrop-blur-md  text-black  '>
          <form className='flex flex-col justify-center  gap-4' onSubmit={submitHandler}>
            <div className='flex justify-evenly items-center  ' >
              <h3 className='text-center text-3xl font-extrabold bg-gradient-to-br from-red-300 via-purple-600 to-blue-500 bg-clip-text text-transparent  '  >Name</h3>
              <input className='h-[50px] w-[300px] px-[20px] py-2 rounded-4xl bg-[#faf2f2] ' onChange={(e)=>(setName(e.target.value))}  value={name}  type='text' placeholder='enter your name'></input>
            </div>
            <div className='flex justify-evenly' >
              <h3 className='text-center text-3xl font-extrabold bg-gradient-to-br from-red-300 via-purple-600 to-blue-500 bg-clip-text text-transparent ' >Email</h3>
              <input type='text' placeholder='enter your email' value={email}  onChange={(e)=>{ console.log(email) ; setEmail(e.target.value) }} className='h-[50px] w-[300px] px-[20px] py-2 rounded-4xl bg-[#faf2f2] ' ></input>
            </div>
            <div className='flex justify-evenly'  >
              <h3 className='text-center text-3xl font-extrabold bg-gradient-to-br from-red-300 via-purple-600 to-blue-500 bg-clip-text text-transparent '  >Query</h3>
              <textarea placeholder='hey! whats the Query..' value={query}  onChange={(e)=>(setQuery(e.target.value))} className='h-[200px] w-[300px] px-[20px] py-2 rounded-4xl bg-[#faf2f2] ' ></textarea>
            </div> 
            <div className=' flex justify-center mt-[60px]' >
            <button className='h-[50px] w-[400px] text-white font-medium bg-red-300  rounded-4xl  'type='submit' >Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm