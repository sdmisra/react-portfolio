import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <h4 className='footer-text'>Quick links to my work:</h4>
      <div className='footer-nav-buttons'>
        <a href='https://hyper-loom-explorer.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Hyper Loom
        </a>
        <a href='https://avian-anthems.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Avian Anthems
        </a>
        <a href='https://mars-chronicles.vercel.app' className='footer-link' target="_blank" rel="noreferrer noopener">
          Mars Chronicles
        </a>
      </div>
    </footer>
  )
}
export default Footer