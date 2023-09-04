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
      <h3 className='succinct-prompt'>Deployed application links are below if you want immediate examples of my work: </h3>
    </div>
    <div className='demo-container right-side'>
      <h1>This is a demo showing clips of my work</h1>
    </div>
    </>
  )
}
export default WelcomePage;