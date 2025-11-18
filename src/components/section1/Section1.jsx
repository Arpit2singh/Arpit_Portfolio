import React from 'react'
import Navbar from '../Navbar'
import Page1Content from './Page1Content'

const Section1 = ({userData}) => {
  return (
    <div>
        <Navbar/>
        <Page1Content userData={userData}/>
    </div>
  )
}

export default Section1