import React from 'react'
import { CornerUpRight, GitBranch, Github, Target } from 'lucide-react'
import { Universalcontext } from '../Context/UniversalDataContext'
import { useContext } from 'react'
import { Code , Tv } from 'lucide-react'
const RightContent = ({userData}) => {

  const UniversalData = useContext(Universalcontext)
  
  return (
    <div id='Maincomp'  className='h-[450px] w-3/4  p-3 overflow-x-auto'>
        < div id='Maincards'   className='flex flex-nowrap gap-4 '>
    {UniversalData?.map((item)=>(
        <div key={item.id}  className='h-[400px] w-[300px] shrink-0  rounded-4xl overflow-hidden relative ' >
        <img src={item.img} className=' object-cover h-full w-full opacity-25 '></img>
        <div className='absolute top-0  left-0 h-full w-full  p-3 flex justify-between flex-col  '>
            <div className=' rounded-full h-[40px] w-[40px] p-2 flex justify-center items-center bg-red-400 font-extrabold'>
               {item.id}
            </div>
            <div className='mt-20 font-medium text-white '>{item.text}</div>
            <div className='flex gap-10 p-2 '>
                <button  onClick={()=>{
                  window.open(item.links.live || item.links.github , "_blank");
                }} className='h-[40px] w-[150px] bg-purple-400 p-2 rounded-4xl bg-purple-4cle00 font-bold active:scale-90 '>  {item.mainBtn}</button>
                <button className='h-10 w-10 flex justify-center items-center  rounded-4xl bg-yellow-300'>{item.links.live ? <Tv /> : <Code />}

                </button>
                
            </div>
        </div>

        </div>
))}
</div>
    </div>
  )
}

export default RightContent