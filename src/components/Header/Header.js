import React from 'react'
import {Link} from 'react-router-dom'
import '../Header/Header.css'

const Header = ()=> {
  return (
    <header className='header-container'>
      <div className='header-nav-buttons'>
        <button className='nav-button'>
          <Link to='/' className='link'>
            Home
          </Link>
        </button>
        <button className='nav-button'>
          <Link to='/projects' className='link'>
            Projects
          </Link>
        </button>
        <button className='nav-button'>
          <Link to='/aboutme' className='link'>
            About Me
          </Link>
        </button>
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