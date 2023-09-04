import React from 'react'
import '../Header/Header.css'

const Header = ()=> {
  return (
    <header className='header-container'>
      <div className='header-nav-buttons'>
        <button className='nav-button'>Home</button>
        <button className='nav-button'>Projects</button>
        <button className='nav-button'>About Me</button>
      </div>
      <h2 className='header-title'>Welcome to my Professional Portfolio!</h2>
      <div className='header-toggle'>
        <span className='toggle-text'>
        [Dark/Light]
        </span>
      </div>
    </header>
  )
}
export default Header;