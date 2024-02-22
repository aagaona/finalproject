import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navigation-bar'>
        <span>
            <Link to='/' className='title'>🎴 Power Play Gamez</Link>
        </span>
        <div className='hammenu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <span className='navigation-link'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/decks'>Decks</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/socials'>Socials</NavLink>
        </span>
    </div>
  )
}

export default Navbar