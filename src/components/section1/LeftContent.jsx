import React from 'react'
import { AlignEndHorizontal } from 'lucide-react';
const LeftContent = () => {
  return (

    <div className='h-2/3 w-1/3   flex flex-col justify-between items-start p-2 gap-3 leading-6www '>
      <div className='flex justify-center  bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400

       font-bold text-5xl p-2'>
 What I’ve Been Working On
</div>

<div className='text-xl font-medium  text-white p-2 text-start leading-10'>
Things I'm building while growing as a developer — exploring new technologies, solving real problems, and becoming better with every project.</div>

    
    <AlignEndHorizontal className='self-start ' />
    </div>
    
  )
}

export default LeftContent