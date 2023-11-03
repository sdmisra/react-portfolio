import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-nav-buttons'>
        <a href='https://hyper-loom-explorer.vercel.app' className='footer-link'>
          HyperLoom
        </a>
        <a href='https://avian-anthems.vercel.app' className='footer-link'>
          Avian Anthems
        </a>
        <a href='https://mars-chronicles.vercel.app' className='footer-link'>
          Mars Chronicles
        </a>
      </div>
      <h3>Live project links</h3>
    </footer>
  )
}
export default Footer