import React from 'react'
import profilePic from '../../assets/Shane Profile JPEG.jpg'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <>
    <div className='welcome-container left-side'>
      <section className='welcome-text'>
        <span>Hello! My name is Shane Misra</span>
      </section>
      <img src={profilePic} className='profile' alt='This websites author and subject matter - Shane Misra'></img>
      <p className='succinct-prompt'>Thank you for taking the time to check out my work. Below are immediate links to some of my favorite projects!</p>
    </div>
    <div className='demo-container right-side'>
      <h1>This is a demo showing clips of my work</h1>
    </div>
    </>
  )
}
export default WelcomePage;