import React from 'react'
import profilePic from '../../assets/Shane Profile JPEG.jpg'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
    <div className='welcome-container left-side'>
      <h1>Thank you for visiting my page! My name is Shane Misra.</h1>
      <h3>Quick Links to my deployed sample projects are in the footer below:</h3>
      <img src={profilePic} className='profile' alt='This websites author and subject matter - Shane Misra'></img>
    </div>
    <div className='demo-container right-side'>
      <h1>This is a demo showing clips of my work</h1>
    </div>
    </>
  )
}
export default WelcomePage;