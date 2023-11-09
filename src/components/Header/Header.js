import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Header/Header.css'
import { useLocation } from 'react-router-dom'
const Header = ()=> {
  let location = useLocation();
  console.log(location);
  return (
    <header className='header-container'>
      <div className='header-nav-buttons'>
        <button className='nav-button'>
          <NavLink to='/' className='link'>
            Home
          </NavLink>
        </button>
        <button className='nav-button'>
          <NavLink to='/projects' className='link'>
            Projects
          </NavLink>
        </button>
        <button className='nav-button'>
          <NavLink to='/aboutme' className='link'>
            About Me
          </NavLink>
        </button>
      </div>
      {location.pathname === '/' &&<h2 className='header-title'>Welcome to my Portfolio!</h2>}
      {location.pathname === '/aboutme' &&<h2 className='header-title'>      Thank you for checking out my site:</h2>}
      <div className='header-toggle'>
        <span className='toggle-text'>
        Dark / Light 
        </span>
      </div>
    </header>
  )
}
export default Header;