
import React from 'react'

const CardsUI = ({ data }) => {
    console.log("Card Data:", data)
    return (

        <div className='p-3 bg-transparent rounded-4xl  backdrop-blur-md'>

            <div className=' bg-gradient-to-br opacity-90 from-red-200 via-purple-300 to-blue-400 /40 border-white/50 shadow-lg border-2 text-white backdrop-blur-md  h-[350px] w-[250px] rounded-4xl p-3  flex flex-col justify-evenly shadow-amber-200 '>
                <div className='flex justify-between p-2 '>
                    <div className='b-2 border-2 border-[#222] rounded-3xl overflow-hidden w-10 h-10 flex justify-center items-center ' ><img src={data.imgsrc} className='h-full w-full object-cover  rounded-full'></img></div>
                    <div className='bg-[#999] rounded-xl p-[10px] text-[13px]'>{data.status}</div>
                </div>
                <div className='flex justify-between p-1  '>
                    <div className='font-bold p-1 text-[20px] [text-stroke:2px_black] text-blue-950 font-  font-bold ' >{data.company}</div>
                    <div className='text-[10px] p-2'> {data.posted}</div>
                </div>
                <div className='font-bold p-1 text-xl '>{data.title}</div>
                <div className='flex  justify-between item-center  gap-2 p-1'>
                    <div className='bg-red-400 rounded-xl p-[10px] text-[13px]'><h3>{data.type}</h3></div>
                    <div className='bg-purple-400 rounded-xl p-[8px] text-[13px]'><h3>{data.level}</h3></div>
                </div>
                <hr className=' text-[#999] '></hr>
                <div className='flex justify-between items-center gap-1 p-2 shrink-0'>
                    <div className='flex justify-center items-center gap-2 p-1 text-black '>
                        <div className='font-semibold p-1 text-[15px]'><h3>{data.location}</h3></div>
                        {/* <div className=' p-2 text-[10px]'><h3>{data.location}</h3></div> */}
                    </div>
                    <div className='  flex justify-between items-center align-bottom gap-2 p-2'>
                        <div className='bg-[#333] flex justify-center items-center text-center rounded-xl p-3 text-[13px] h-[50px] w-[100px] text-white'>{data.rate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsUI