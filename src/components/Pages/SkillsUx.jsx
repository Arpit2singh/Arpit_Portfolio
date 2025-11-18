import React from 'react'

const SkillsUx = () => {
  return (
    <div className=' flex items-center  p-7 justify-start gap-x-6  '>
    <div className='   -rotate-90 h-[250px]   flex justify-center items-center  text-8xl bg-clip-text text-transparent font-extrabold bg-gradient-to-br from-red-400 via-purple-500 to-yellow-500  transition-all duration-500 hover:opacity-90 cursor-pointer  ' > <div className='hover:bg-gradient-to-br from-yellow-400 via-red-400 to-gray-800 p-4 bg-clip-text text-transparent  flex justify-start  ' >Skills </div></div>

    <div className='   h-[200px] flex justify-start items-center  text-7xl bg-clip-text text-transparent font-extrabold bg-gradient-to-br from-red-400 via-purple-500 to-yellow-500  transition-all duration-500 hover:opacity-90 cursor-pointer  ' > <div className='hover:bg-gradient-to-br from-yellow-400 via-red-400 to-gray-800 p-4 bg-clip-text text-transparent   ' >Things I am Good At</div></div>
 </div> )
}

export default SkillsUx