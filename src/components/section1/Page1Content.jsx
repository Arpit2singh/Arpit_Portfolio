import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = ({userData}) => {
  return (
    <div className='flex justify-between items-center p-4 gap-10'>
        
        <LeftContent/>
        <RightContent userData={userData} />


    </div>
  )
}

export default Page1Content