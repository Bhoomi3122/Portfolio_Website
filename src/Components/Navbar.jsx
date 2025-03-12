import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/image.png'
const Navbar = () => {
  return (
    <div id='navbar-container'>
        
     <img src={Logo} id='logo'/>
      <ul id='navbar-links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/accomplishments'>Accomplishments</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/contact'>Contact me</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
